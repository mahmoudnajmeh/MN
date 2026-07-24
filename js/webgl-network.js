(() => {
  "use strict";

  const container = document.getElementById("particles-js");

  if (!container) {
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.className = "webgl-network-canvas";
  canvas.setAttribute("aria-hidden", "true");
  container.replaceChildren(canvas);

  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    depth: false,
    powerPreference: "high-performance",
    premultipliedAlpha: true
  });

  if (!gl) {
    container.classList.add("webgl-network-fallback");
    return;
  }

  const vertexShaderSource = `
    attribute vec2 a_position;
    attribute float a_alpha;
    attribute float a_size;
    uniform vec2 u_resolution;
    varying float v_alpha;

    void main() {
      vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
      gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
      gl_PointSize = a_size;
      v_alpha = a_alpha;
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;
    uniform vec3 u_color;
    uniform float u_is_point;
    varying float v_alpha;

    void main() {
      float alpha = v_alpha;

      if (u_is_point > 0.5) {
        vec2 coordinate = gl_PointCoord - vec2(0.5);
        float radius = length(coordinate);
        float core = 1.0 - smoothstep(0.00, 0.16, radius);
        float halo = 1.0 - smoothstep(0.10, 0.50, radius);
        alpha *= max(core, halo * 0.72);
      }

      gl_FragColor = vec4(u_color, alpha);
    }
  `;

  const compileShader = (type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  };

  const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    container.classList.add("webgl-network-fallback");
    return;
  }

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    container.classList.add("webgl-network-fallback");
    return;
  }

  const positionLocation = gl.getAttribLocation(program, "a_position");
  const alphaLocation = gl.getAttribLocation(program, "a_alpha");
  const sizeLocation = gl.getAttribLocation(program, "a_size");
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const colorLocation = gl.getUniformLocation(program, "u_color");
  const isPointLocation = gl.getUniformLocation(program, "u_is_point");

  const positionBuffer = gl.createBuffer();
  const alphaBuffer = gl.createBuffer();
  const sizeBuffer = gl.createBuffer();

  const pointer = { x: 0, y: 0, active: false, pressed: false };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pulses = [];
  const packets = [];
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let nodes = [];
  let animationFrame = 0;
  let lastFrame = performance.now();
  let lastPacketSpawn = 0;

  const uploadAttribute = (buffer, location, values, size) => {
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, values, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
  };

  const drawBatch = (mode, positions, alphas, sizes, color, pointMode = false) => {
    if (!positions.length) {
      return;
    }

    uploadAttribute(positionBuffer, positionLocation, new Float32Array(positions), 2);
    uploadAttribute(alphaBuffer, alphaLocation, new Float32Array(alphas), 1);
    uploadAttribute(sizeBuffer, sizeLocation, new Float32Array(sizes), 1);
    gl.uniform3f(colorLocation, color[0], color[1], color[2]);
    gl.uniform1f(isPointLocation, pointMode ? 1 : 0);
    gl.drawArrays(mode, 0, positions.length / 2);
  };

  const nodeCountForViewport = () => {
    const area = width * height;
    return Math.max(64, Math.min(128, Math.round(area / 11800)));
  };

  const createNodes = () => {
    const count = nodeCountForViewport();
    nodes = Array.from({ length: count }, (_, index) => {
      const depth = Math.random();
      const central = index < Math.max(8, Math.round(count * 0.12));

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (central ? 5 : 11),
        vy: (Math.random() - 0.5) * (central ? 5 : 11),
        size: central ? 7 + Math.random() * 6 : 2.7 + Math.random() * 4.2,
        phase: Math.random() * Math.PI * 2,
        depth,
        central,
        activation: 0
      };
    });
  };

  const resize = () => {
    const bounds = container.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);

    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    gl.viewport(0, 0, canvas.width, canvas.height);
    createNodes();
  };

  const createPulse = (x, y, strength = 1) => {
    pulses.push({ x, y, radius: 8, life: 1, strength });

    for (const node of nodes) {
      const dx = node.x - x;
      const dy = node.y - y;
      const distance = Math.hypot(dx, dy);

      if (distance < 220) {
        node.activation = Math.max(node.activation, 1 - distance / 220);
      }
    }
  };

  const spawnPacket = (timestamp) => {
    if (timestamp - lastPacketSpawn < 140 || nodes.length < 2) {
      return;
    }

    lastPacketSpawn = timestamp;
    const start = nodes[Math.floor(Math.random() * nodes.length)];
    let end = nodes[Math.floor(Math.random() * nodes.length)];
    let attempts = 0;

    while (end === start && attempts < 5) {
      end = nodes[Math.floor(Math.random() * nodes.length)];
      attempts += 1;
    }

    packets.push({ start, end, progress: 0, speed: 0.28 + Math.random() * 0.52, life: 1 });
  };

  const ringGeometry = (x, y, radius, segments = 56) => {
    const positions = [];
    const alphas = [];
    const sizes = [];

    for (let index = 0; index < segments; index += 1) {
      const first = (index / segments) * Math.PI * 2;
      const second = ((index + 1) / segments) * Math.PI * 2;
      positions.push(
        x + Math.cos(first) * radius,
        y + Math.sin(first) * radius,
        x + Math.cos(second) * radius,
        y + Math.sin(second) * radius
      );
      alphas.push(1, 1);
      sizes.push(1, 1);
    }

    return { positions, alphas, sizes };
  };

  const draw = (timestamp) => {
    const elapsed = Math.min((timestamp - lastFrame) / 1000, 0.04);
    lastFrame = timestamp;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.useProgram(program);
    gl.uniform2f(resolutionLocation, width, height);

    if (!reducedMotion) {
      for (const node of nodes) {
        const speedFactor = 0.55 + node.depth * 0.9;
        node.x += node.vx * elapsed * speedFactor;
        node.y += node.vy * elapsed * speedFactor;
        node.activation = Math.max(0, node.activation - elapsed * 0.72);

        if (node.x < -50) node.x = width + 50;
        if (node.x > width + 50) node.x = -50;
        if (node.y < -50) node.y = height + 50;
        if (node.y > height + 50) node.y = -50;

        if (pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < 85000 && distanceSquared > 4) {
            const distance = Math.sqrt(distanceSquared);
            const influence = (1 - distanceSquared / 85000) * elapsed;
            const direction = pointer.pressed ? 38 : 13;
            node.x += (dx / distance) * influence * direction;
            node.y += (dy / distance) * influence * direction;
            node.activation = Math.max(node.activation, influence * 4.5);
          }
        }
      }
    }

    const linePositions = [];
    const lineAlpha = [];
    const lineSizes = [];
    const brightLinePositions = [];
    const brightLineAlpha = [];
    const brightLineSizes = [];
    const maxDistance = Math.min(235, Math.max(165, width / 7.2));
    const maxDistanceSquared = maxDistance * maxDistance;

    for (let first = 0; first < nodes.length; first += 1) {
      for (let second = first + 1; second < nodes.length; second += 1) {
        const dx = nodes[first].x - nodes[second].x;
        const dy = nodes[first].y - nodes[second].y;
        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared < maxDistanceSquared) {
          const proximity = 1 - distanceSquared / maxDistanceSquared;
          const activated = Math.max(nodes[first].activation, nodes[second].activation);
          const targetPositions = activated > 0.12 ? brightLinePositions : linePositions;
          const targetAlpha = activated > 0.12 ? brightLineAlpha : lineAlpha;
          const targetSizes = activated > 0.12 ? brightLineSizes : lineSizes;
          const opacity = proximity * (activated > 0.12 ? 0.78 : 0.42);

          targetPositions.push(
            nodes[first].x,
            nodes[first].y,
            nodes[second].x,
            nodes[second].y
          );
          targetAlpha.push(opacity, opacity);
          targetSizes.push(1, 1);
        }
      }
    }

    drawBatch(gl.LINES, linePositions, lineAlpha, lineSizes, [0.18, 0.98, 1.0]);
    drawBatch(gl.LINES, brightLinePositions, brightLineAlpha, brightLineSizes, [0.82, 1.0, 0.10]);

    const pointPositions = [];
    const pointAlpha = [];
    const pointSizes = [];
    const corePositions = [];
    const coreAlpha = [];
    const coreSizes = [];

    for (const node of nodes) {
      const pulse = 0.88 + Math.sin(timestamp * 0.0022 + node.phase) * 0.12;
      const activationBoost = node.activation * 0.58;
      pointPositions.push(node.x, node.y);
      pointAlpha.push(Math.min(0.88, pulse * 0.76 + activationBoost * 0.72));
      pointSizes.push((node.size * 1.08 + node.activation * 6.5) * pixelRatio);

      if (node.central || node.activation > 0.18) {
        corePositions.push(node.x, node.y);
        coreAlpha.push(Math.min(0.9, 0.68 + node.activation * 0.72));
        coreSizes.push((node.size * 0.42 + 2.2) * pixelRatio);
      }
    }

    drawBatch(gl.POINTS, pointPositions, pointAlpha, pointSizes, [0.12, 0.98, 1.0], true);
    drawBatch(gl.POINTS, corePositions, coreAlpha, coreSizes, [0.86, 1.0, 0.08], true);

    if (!reducedMotion && packets.length < 18 && Math.random() < 0.17) {
      spawnPacket(timestamp);
    }

    const packetPositions = [];
    const packetAlpha = [];
    const packetSizes = [];

    for (let index = packets.length - 1; index >= 0; index -= 1) {
      const packet = packets[index];
      packet.progress += elapsed * packet.speed;
      packet.life = 1 - packet.progress;

      if (packet.progress >= 1) {
        packets.splice(index, 1);
        continue;
      }

      const x = packet.start.x + (packet.end.x - packet.start.x) * packet.progress;
      const y = packet.start.y + (packet.end.y - packet.start.y) * packet.progress;
      packetPositions.push(x, y);
      packetAlpha.push(Math.sin(packet.progress * Math.PI));
      packetSizes.push(8.5 * pixelRatio);
    }

    drawBatch(gl.POINTS, packetPositions, packetAlpha, packetSizes, [0.92, 1.0, 0.08], true);

    for (let index = pulses.length - 1; index >= 0; index -= 1) {
      const pulse = pulses[index];
      pulse.radius += elapsed * 155 * pulse.strength;
      pulse.life -= elapsed * 0.72;

      if (pulse.life <= 0) {
        pulses.splice(index, 1);
        continue;
      }

      const ring = ringGeometry(pulse.x, pulse.y, pulse.radius);
      ring.alphas.fill(Math.max(0, pulse.life * 0.9));
      drawBatch(gl.LINES, ring.positions, ring.alphas, ring.sizes, [0.72, 1.0, 0.16]);

      if (pulse.radius > 34) {
        const inner = ringGeometry(pulse.x, pulse.y, pulse.radius * 0.58, 40);
        inner.alphas.fill(Math.max(0, pulse.life * 0.48));
        drawBatch(gl.LINES, inner.positions, inner.alphas, inner.sizes, [0.20, 0.92, 1.0]);
      }
    }

    if (pointer.active) {
      const reticlePositions = [
        pointer.x - 22, pointer.y, pointer.x - 7, pointer.y,
        pointer.x + 7, pointer.y, pointer.x + 22, pointer.y,
        pointer.x, pointer.y - 22, pointer.x, pointer.y - 7,
        pointer.x, pointer.y + 7, pointer.x, pointer.y + 22
      ];
      const reticleAlpha = new Array(reticlePositions.length / 2).fill(pointer.pressed ? 0.9 : 0.66);
      const reticleSizes = new Array(reticlePositions.length / 2).fill(1);
      drawBatch(gl.LINES, reticlePositions, reticleAlpha, reticleSizes, [0.72, 1.0, 0.16]);

      const ring = ringGeometry(pointer.x, pointer.y, pointer.pressed ? 19 : 14, 34);
      ring.alphas.fill(pointer.pressed ? 0.9 : 0.54);
      drawBatch(gl.LINES, ring.positions, ring.alphas, ring.sizes, [0.20, 0.92, 1.0]);
    }

    animationFrame = requestAnimationFrame(draw);
  };

  const updatePointer = (event) => {
    const bounds = container.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = true;
  };

  container.addEventListener("pointermove", updatePointer);

  container.addEventListener("pointerdown", (event) => {
    updatePointer(event);
    pointer.pressed = true;
    createPulse(pointer.x, pointer.y, 1.25);
  });

  container.addEventListener("pointerup", () => {
    pointer.pressed = false;
  });

  container.addEventListener("pointerleave", () => {
    pointer.active = false;
    pointer.pressed = false;
  });

  container.addEventListener("click", (event) => {
    updatePointer(event);
    createPulse(pointer.x, pointer.y, 1);
  });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();
  createPulse(width * 0.74, height * 0.42, 0.65);
  animationFrame = requestAnimationFrame(draw);

  window.addEventListener(
    "pagehide",
    () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    },
    { once: true }
  );
})();
