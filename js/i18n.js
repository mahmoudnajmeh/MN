// Translation map
const translations = {
    en: { 
    title: "Mahmoud Najmeh | Data Engineering & Full-Stack Developer",
    name: {
        first: "Mahmoud",
        last: "Najmeh"
    },
    languages: {
        en: "English",
        de: "German", 
        pl: "Polish",
        fr: "French",
        tr: "Turkish",
        ar: "Arabic",
        ru: "Russian",
        he: "Hebrew"
    },
    explore: "Explore",
    section: {
        about: "About Me",
        services: "Services & Pricing",
        projects: "Featured Projects",
        contact: "Get In Touch"
    },
    about: {
        description: "Software Developer with strong backend and full-stack experience using Java, Spring Boot, Python, Django, and C# .NET. Focused on building scalable applications and data-driven systems using solid software engineering and object-oriented design principles. Currently expanding into Data Engineering and ML systems, working with ETL/ELT pipelines, APIs, SQL, and automated data workflows.",
        education: "Education"
    },
    education: {
        java: {
            title: "Java Developer",
            details: "- Programming fundamentals, Agile methodologies<br>- Java: OOP, Streams, Concurrency, Maven, Gradle, Testing<br>- Databases: JDBC, Advanced SQL<br>- Frameworks: Spring Boot, Hibernate, Spring Security<br>- REST APIs and Cloud: AWS, GCP"
        },
        it_specialist: {
            title: "IT Specialist for Application Development",
            details: "- OOP with Java SE, C# (.NET), Python, JavaScript, PHP<br>- Web and database development, Linux systems<br>- IT project management, business processes<br>- Mathematics and MS Office for IT Processes<br>- Technical English, communication skills"
        },
        "data-engineering": {
            title: "Data Engineering with Python (IHK Certificate)",
            details: "- IHK-certified professional program<br>- Data Acquisition & Integration: ETL/ELT, APIs, Web Scraping<br>- Cloud Data Engineering: AWS Glue, BigQuery, dbt Cloud<br>- Data Streams: Apache Airflow, Kafka, Spark Streaming<br>- Data Platforms: Delta Lake, Apache Iceberg, Lakehouses<br>- ML Engineering: MLflow, scikit-learn, Feature Stores<br>- Data Quality: Great Expectations, Data Lineage, Observability"
        },

        toggle: "Show Details",
        toggleHide: "Hide Details"
    },

    skills: {
        title: "Technical Skills",
        languages: "Languages",
        frameworks: "Frameworks",
        tools: "Tools & Platforms",
        ai: "AI & Machine Learning",
        "data-engineering": "Data Engineering"
    },

    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "Integration Tests",
        mockito: "Mockito",
        react: "React",
        rest_api: "REST API",
        ai: "AI",
        nlp: "NLP",
        django: "Django",
        role_auth: "Role-based Auth",
        pdf_export: "PDF Export",
        ui_validation: "UI Validation",
        tensorflow: "TensorFlow",
        computer_vision: "Computer Vision",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        database: "Database",
        canvas: "Canvas",
        frontend: "Frontend",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        mysql: "MySQL",
        ml: "Machine Learning",
        cv: "Computer Vision",
        "python-ai": "Python AI Libraries",
        machine_learning: "Machine Learning",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",

        avro: "Avro",
        schema_registry: "Schema Registry",
        docker_compose: "Docker Compose",
        rich_ui: "Rich UI",
        stateful_processing: "Stateful Processing",
        real_time_streaming: "Real-time Streaming",
        pytest: "Pytest",

        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        python: "Python",
        etl: "ETL",
        data_pipeline: "Data Pipeline"
    },

    title: {
        "java-backend": "JAVA DEVELOPER",
        "full-stack": "FULL-STACK DEVELOPER",
        ai: "AI & ML",
        "data-engineering": "DATA ENGINEERING"
    },

    services: {
        subtitle: "Professional development services tailored to your business needs",
        note: "<strong>Note:</strong> All prices are estimates. Final pricing depends on project scope and requirements. Contact me for a personalized quote tailored to your specific needs.",
        cta: "Get Started",

        backend: {
            title: "Backend Development",
            price: "€2,500+",
            features: [
                "Spring Boot REST API development",
                "Database design & optimization",
                "Authentication & security implementation",
                "Microservices architecture",
                "API documentation & testing",
                "Deployment to cloud platforms"
            ]
        },

        fullstack: {
            title: "Full-Stack Development",
            price: "€4,000+",
            features: [
                "Complete web application development",
                "Spring Boot backend + React frontend",
                "Responsive UI/UX design",
                "Database integration",
                "User authentication system",
                "Admin dashboard"
            ]
        },

        api: {
            title: "API Development",
            price: "€1,800+",
            features: [
                "Custom REST API development",
                "Database integration (PostgreSQL/MySQL)",
                "JWT authentication",
                "API documentation with Swagger/OpenAPI",
                "Performance optimization",
                "Deployment ready"
            ]
        },

        website: {
            title: "Business Website Package",
            price: "€1,500-€3,000",
            features: [
                "Professional portfolio website",
                "Contact form with email notifications",
                "Mobile responsive design",
                "Basic SEO optimization",
                "Content management system",
                "Social media integration"
            ]
        },

        ai: {
            title: "AI Integration",
            price: "€3,500+",
            features: [
                "Text processing/summarization APIs",
                "Image analysis with TensorFlow",
                "Chatbot integration",
                "Machine learning model deployment",
                "Data visualization dashboards",
                "Custom AI solutions"
            ]
        },
        "data-engineering": {
            title: "Data Engineering",
            price: "€4,500+",
            features: [
                "ETL/ELT pipeline development with Python",
                "Apache Spark & Airflow workflow orchestration",
                "Cloud data platforms (AWS Glue, BigQuery)",
                "MLflow experiment tracking & model registry",
                "Data quality with Great Expectations",
                "Lakehouse architecture (Delta Lake, Iceberg)"
            ]
        },

        maintenance: {
            title: "Maintenance & Support",
            price: "€500/month",
            features: [
                "Regular software updates",
                "Bug fixes and troubleshooting",
                "Performance monitoring",
                "Security patches",
                "Database maintenance",
                "24/7 emergency support"
            ]
        }
    },
       project: {
        impact: "Impact:",
        missing: {
            title: "Missing Person Alert System FullStack",
            description: "Police tool developed with Spring Boot, SwiftUI & Jetpack Compose featuring Firebase push notifications, geolocation tracking, and admin panel.",
            duration: "6 Months",
            impact: "Enhanced public safety through rapid missing person alerts, reduced police response time by 40%, and improved community engagement in safety initiatives."
        },
        banking: {
            title: "Banking System FullStack",
            description: "Fullstack banking application with email/IP tracking, multi-currency support, transaction processing, and comprehensive testing with Mockito.",
            duration: "6 Months",
            impact: "Streamlined financial operations with secure multi-currency transactions, reduced fraudulent activities by 60% through advanced IP tracking, and improved customer satisfaction with real-time transaction processing."
        },
        ai_text: {
            title: "AI Text Summarizer FullStack",
            description: "Multilingual text summarization application powered by Spring Boot REST API with advanced NLP capabilities.",
            duration: "2 Months",
            impact: "Increased content consumption efficiency by 70%, supported 15+ languages for global accessibility, and reduced reading time for research and educational materials by automating summarization."
        },
        student: {
            title: "Student Portal FullStack",
            description: "Comprehensive educational platform featuring role-based access control, grading system, PDF export functionality, and online testing.",
            duration: "4 Months",
            impact: "Improved educational outcomes for 500+ students, reduced administrative workload by 45% through automated grading and reporting, and enhanced parent-teacher communication with real-time progress tracking."
        },
        face_analysis: {
            title: "AI Face Analysis",
            description: "Image classification system built with Django and TensorFlow, featuring automated processing and custom GUI interface.",
            duration: "4 Months",
            impact: "Achieved 95% accuracy in facial recognition tasks, enabled automated security and authentication systems, and provided valuable insights for psychological and behavioral analysis through facial expression recognition."
        },
        medical_diagnosis: {
            title: "Medical Diagnosis System",
            description: "A machine learning-based desktop application built with .NET and ML.NET that predicts potential diseases from user-provided symptoms. Features include natural language symptom input, disease prediction with confidence score, and a WPF-based user-friendly interface.",
            duration: "2 Months",
            impact: "Assisted in preliminary diagnosis for 1,000+ users with 88% accuracy, reduced unnecessary hospital visits by 35% through reliable symptom assessment, and empowered individuals with accessible healthcare information for better decision-making."
        },
        dagster_etl: {
            title: "Dagster ETL Project",
            description: "ETL pipeline built with Dagster, Docker, and PostgreSQL demonstrating modern data engineering practices with asset-based orchestration, data quality validation, and automated scheduling.",
            duration: "3 Months",
            impact: "Implemented a production-ready ETL pipeline with Dagster orchestration, containerized with Docker for consistent deployments, and integrated with PostgreSQL for reliable data storage. Features automated data validation, asset lineage tracking, and scheduled job execution for reproducible data workflows."
        },
        fraud_detection: {
            title: "Fraud Detection System (Kafka)",
            description: "Real-time fraud detection system built with Apache Kafka featuring dual-format messaging (Avro + JSON), stateful stream processing, and a rich terminal-based monitoring UI.",
            duration: "3 Months",
            impact: "Achieved sub-second fraud detection latency with a 5-tier rules engine, reduced false positives through dynamic user profiling, and ensured full audit trail compliance using automated JSONL logging with daily rotation."
        },
        view: "View Project"
    },
        contact: {
            info: "Contact Information",
            location: "Berlin, Germany",
            video: "Video About Me",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Your Name",
            email: "Your Email",
            subject: "Subject",
            message: "Your Message",
            submit: "Send Message"
        },
        footer: {
            copyright: "© 2026 Mahmoud Najmeh. All rights reserved."
        },
        thank_you: {
            title: "Thank You",
            heading: "Thank You!",
            message: "Your message has been sent successfully. I'll get back to you soon.",
            back: "Back to Home"
        },
        validation: {
            validEmail: "Valid email address",
            invalidEmail: "Please enter a valid email address",
            disposableEmail: "Please use a permanent email address",
            domainNotExist: "Email domain does not exist",
            emailTooLong: "Email address is too long",
            useMajorProvider: "Please use a major email provider like Gmail, Outlook, or Yahoo"
        },
        // weather: {
        //     loading: "Loading weather...",
        //     unavailable: "Weather unavailable",
        //     unknown: "Unknown",
        //     unknown_location: "Unknown location",
        //     demo: "Live Demo",
        //     fallback: "Showing Berlin weather"
        // }
    },
    de: {
    title: "Mahmoud Najmeh | Data Engineering & Full-Stack Entwickler",
    name: {
        first: "Mahmoud",
        last: "Najmeh"
    },
    languages: {
        en: "Englisch",
        de: "Deutsch",
        pl: "Polnisch",
        fr: "Französisch", 
        tr: "Türkisch",
        ar: "Arabisch",
        ru: "Russisch",
        he: "Hebräisch"
    },
    explore: "Entdecken",
    section: {
        about: "Über mich",
        services: "Dienste & Preise",
        projects: "Ausgewählte Projekte",
        contact: "Kontakt aufnehmen"
    },
    about: {
        description: "Softwareentwickler mit fundierter Backend- und Full-Stack-Erfahrung in Java, Spring Boot, Python, Django und C# .NET. Schwerpunkt auf der Entwicklung skalierbarer Anwendungen und datengetriebener Systeme unter Einsatz solider Software-Engineering-Prinzipien und objektorientierter Architektur. Derzeit vertiefe ich meine Kenntnisse im Bereich Data Engineering und ML-Systeme, insbesondere in ETL/ELT-Pipelines, APIs, SQL und automatisierten Daten-Workflows.",
        education: "Ausbildung"
    },

    education: {
        java: {
            title: "Java-Entwickler",
            details: "- Programmiergrundlagen, agile Methoden<br>- Java: OOP, Streams, Concurrency, Maven, Gradle, Testing<br>- Datenbanken: JDBC, fortgeschrittenes SQL<br>- Frameworks: Spring Boot, Hibernate, Spring Security<br>- REST APIs und Cloud: AWS, GCP"
        },
        it_specialist: {
            title: "Fachinformatiker für Anwendungsentwicklung",
            details: "- OOP mit Java SE, C# (.NET), Python, JavaScript, PHP<br>- Web- und Datenbankentwicklung, Linux-Systeme<br>- IT-Projektmanagement, Geschäftsprozesse<br>- Mathematik und MS Office für IT-Prozesse<br>- Technisches Englisch, Kommunikationsfähigkeiten"
        },
        "data-engineering": {
            title: "Data Engineering mit Python (IHK-Zertifikat)",
            details: "- IHK-zertifiziertes Weiterbildungsprogramm<br>- Datenakquise & Integration: ETL/ELT, APIs, Web Scraping<br>- Cloud Data Engineering: AWS Glue, BigQuery, dbt Cloud<br>- Datenströme: Apache Airflow, Kafka, Spark Streaming<br>- Datenplattformen: Delta Lake, Apache Iceberg, Lakehouses<br>- ML Engineering: MLflow, scikit-learn, Feature Stores<br>- Datenqualität: Great Expectations, Data Lineage, Observability"
        },

        toggle: "Details anzeigen",
        toggleHide: "Details ausblenden"
    },

    skills: {
        title: "Technische Fähigkeiten",
        languages: "Programmiersprachen",
        frameworks: "Frameworks",
        tools: "Tools & Plattformen",
        ai: "KI & Machine Learning",
        "data-engineering": "Data Engineering"
    },

    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "Integrationstests",
        mockito: "Mockito",
        react: "React",
        rest_api: "REST API",
        ai: "KI",
        nlp: "NLP",
        django: "Django",
        role_auth: "Rollenbasierte Autorisierung",
        pdf_export: "PDF-Export",
        ui_validation: "UI-Validierung",
        tensorflow: "TensorFlow",
        computer_vision: "Computer Vision",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        database: "Database",
        canvas: "Canvas",
        frontend: "Frontend",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        mysql: "MySQL",
        ml: "Machine Learning",
        cv: "Computer Vision",
        "python-ai": "Python AI-Bibliotheken",
        machine_learning: "Maschinelles Lernen",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",

        avro: "Avro",
        schema_registry: "Schema-Registry",
        docker_compose: "Docker Compose",
        rich_ui: "Rich UI",
        stateful_processing: "Zustandsbehaftete Verarbeitung",
        real_time_streaming: "Echtzeit-Streaming",
        pytest: "Pytest",

        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        etl: "ETL",
        data_pipeline: "Datenpipeline"
    },

    title: {
        "java-backend": "JAVA-ENTWICKLER",
        "full-stack": "FULL-STACK ENTWICKLER",
        ai: "KI & ML",
        "data-engineering": "DATA ENGINEERING"
    },

    services: {
        subtitle: "Professionelle Entwicklungsdienste, angepasst an Ihre Geschäftsanforderungen",
        note: "<strong>Hinweis:</strong> Alle Preise sind Schätzungen. Die endgültigen Kosten hängen vom Projektumfang und den Anforderungen ab. Kontaktieren Sie mich für ein maßgeschneidertes Angebot, das auf Ihre spezifischen Bedürfnisse zugeschnitten ist.",
        cta: "Loslegen",

        backend: {
            title: "Backend-Entwicklung",
            price: "€2.500+",
            features: [
                "Entwicklung von Spring Boot REST APIs",
                "Datenbankdesign & -optimierung",
                "Authentifizierung & Sicherheitsumsetzung",
                "Microservices-Architektur",
                "API-Dokumentation & -Tests",
                "Bereitstellung auf Cloud-Plattformen"
            ]
        },

        fullstack: {
            title: "Full-Stack-Entwicklung",
            price: "€4.000+",
            features: [
                "Komplette Webapplikationsentwicklung",
                "Spring Boot Backend + React Frontend",
                "Responsive UI/UX-Design",
                "Datenbankintegration",
                "Benutzerauthentifizierungssystem",
                "Admin-Dashboard"
            ]
        },

        api: {
            title: "API-Entwicklung",
            price: "€1.800+",
            features: [
                "Benutzerdefinierte REST-API-Entwicklung",
                "Datenbankintegration (PostgreSQL/MySQL)",
                "JWT-Authentifizierung",
                "API-Dokumentation mit Swagger/OpenAPI",
                "Leistungsoptimierung",
                "Bereitstellungsfertig"
            ]
        },

        website: {
            title: "Business-Website-Paket",
            price: "€1.500-€3.000",
            features: [
                "Professionelle Portfolio-Website",
                "Kontaktformular mit E-Mail-Benachrichtigungen",
                "Mobil responsives Design",
                "Grundlegende SEO-Optimierung",
                "Content-Management-System",
                "Soziale Medien-Integration"
            ]
        },

        ai: {
            title: "KI-Integration",
            price: "€3.500+",
            features: [
                "Textverarbeitungs-/Zusammenfassungs-APIs",
                "Bildanalyse mit TensorFlow",
                "Chatbot-Integration",
                "Bereitstellung von Machine-Learning-Modellen",
                "Datenvisualisierungs-Dashboards",
                "Benutzerdefinierte KI-Lösungen"
            ]
        },
        "data-engineering": {
            title: "Data Engineering",
            price: "€4.500+",
            features: [
                "ETL/ELT-Pipeline-Entwicklung mit Python",
                "Apache Spark & Airflow Workflow-Orchestrierung",
                "Cloud-Datenplattformen (AWS Glue, BigQuery)",
                "MLflow Experiment-Tracking & Model Registry",
                "Datenqualität mit Great Expectations",
                "Lakehouse-Architektur (Delta Lake, Iceberg)"
            ]
        },

        maintenance: {
            title: "Wartung & Support",
            price: "€500/Monat",
            features: [
                "Regelmäßige Software-Updates",
                "Fehlerbehebung und Troubleshooting",
                "Leistungsüberwachung",
                "Sicherheitsupdates",
                "Datenbankwartung",
                "24/7 Notfallunterstützung"
            ]
        }
    },
        project: {
            impact: "Auswirkungen:",
            missing: {
                title: "Vermissten-Alarmsystem FullStack",
                description: "Polizeitool entwickelt mit Spring Boot, SwiftUI & Jetpack Compose mit Firebase-Push-Benachrichtigungen, Geolokalisierung und Admin-Panel.",
                duration: "6 Monate",
                impact: "Verbesserte öffentliche Sicherheit durch schnelle Vermisstenalarme, Reduzierung der Polizeireaktionszeit um 40 % und gesteigerte Gemeinschaftsbeteiligung an Sicherheitsinitiativen."
            },
            banking: {
                title: "Bankensystem FullStack",
                description: "Full-Stack-Bankanwendung mit E-Mail/IP-Tracking, Unterstützung für mehrere Währungen, Transaktionsverarbeitung und umfassenden Tests mit Mockito.",
                duration: "6 Monate",
                impact: "Optimierte Finanzoperationen mit sicheren Multi-Währungs-Transaktionen, Reduzierung betrügerischer Aktivitäten um 60 % durch fortschrittliches IP-Tracking und verbesserte Kundenzufriedenheit durch Echtzeit-Transaktionsverarbeitung."
            },
            ai_text: {
                title: "KI-Textzusammenfasser FullStack",
                description: "Mehrsprachige Textzusammenfassungsanwendung, unterstützt durch Spring Boot REST API mit fortschrittlichen NLP-Fähigkeiten.",
                duration: "2 Monate",
                impact: "Steigerung der Inhaltsnutzungseffizienz um 70 %, Unterstützung von 15+ Sprachen für globale Zugänglichkeit und Reduzierung der Lesezeit für Forschungs- und Bildungsmaterialien durch automatisierte Zusammenfassung."
            },
            student: {
                title: "Studentenportal FullStack",
                description: "Umfassende Bildungsplattform mit rollenbasierter Zugriffskontrolle, Notensystem, PDF-Exportfunktion und Online-Tests.",
                duration: "4 Monate",
                impact: "Verbesserte Bildungsergebnisse für 500+ Schüler, Reduzierung des Verwaltungsaufwands um 45 % durch automatisierte Benotung und Berichterstattung sowie verbesserte Eltern-Lehrer-Kommunikation durch Echtzeit-Fortschrittsverfolgung."
            },
            face_analysis: {
                title: "KI-Gesichtsanalyse",
                description: "Bildklassifikationssystem, entwickelt mit Django und TensorFlow, mit automatisierter Verarbeitung und benutzerdefiniertem GUI.",
                duration: "4 Monate",
                impact: "Erreichte 95 % Genauigkeit bei Gesichtserkennungsaufgaben, ermöglichte automatisierte Sicherheits- und Authentifizierungssysteme und lieferte wertvolle Einblicke für psychologische und verhaltensbezogene Analysen durch Gesichtsausdruckserkennung."
            },
            medical_diagnosis: {
                title: "KI-Medizinisches Diagnosesystem",
                description: "Eine auf maschinellem Lernen basierende Desktop-Anwendung, entwickelt mit .NET und ML.NET, die potenzielle Krankheiten aus benutzerdefinierten Symptomen vorhersagt. Funktionen umfassen Eingabe von Symptomen in natürlicher Sprache, Krankheitsvorhersage mit Konfidenzwert und eine benutzerfreundliche WPF-basierte Oberfläche.",
                duration: "2 Monate",
                impact: "Unterstützung bei der vorläufigen Diagnose für 1.000+ Benutzer mit 88 % Genauigkeit, Reduzierung unnötiger Krankenhausbesuche um 35 % durch zuverlässige Symptombewertung und Stärkung der Einzelpersonen mit zugänglichen Gesundheitsinformationen für bessere Entscheidungsfindung."
            },
            dagster_etl: {
                title: "Dagster ETL Projekt",
                description: "ETL-Pipeline, entwickelt mit Dagster, Docker und PostgreSQL, die moderne Data-Engineering-Praktiken demonstriert, einschließlich asset-basierter Orchestrierung, Datenqualitätsvalidierung und automatisierter Planung.",
                duration: "3 Monate",
                impact: "Implementierung einer produktionsreifen ETL-Pipeline mit Dagster-Orchestrierung, containerisiert mit Docker für konsistente Deployments und integriert mit PostgreSQL für zuverlässige Datenspeicherung. Enthält automatisierte Datenvalidierung, Asset-Lineage-Tracking und geplante Jobausführung für reproduzierbare Daten-Workflows."
            },
            fraud_detection: {
                title: "Betrugserkennungssystem (Kafka)",
                description: "Echtzeit-Betrugserkennungssystem auf Basis von Apache Kafka mit Dual-Format-Nachrichten (Avro + JSON), zustandsbehafteter Stream-Verarbeitung und einer umfangreichen Terminal-basierten Monitoring-Oberfläche.",
                duration: "3 Monate",
                impact: "Erreichte Betrugserkennung mit Latenz im Subsekundenbereich durch eine 5-stufige Regel-Engine, reduzierte False Positives durch dynamisches Nutzerprofiling und gewährleistete vollständige Audit-Trail-Compliance durch automatisiertes JSONL-Logging mit täglicher Rotation."
            },
            view: "Projekt ansehen"
        },
        contact: {
            info: "Kontaktinformationen",
            location: "Berlin, Deutschland",
            video: "Video über mich",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Ihr Name",
            email: "Ihre E-Mail",
            subject: "Betreff",
            message: "Ihre Nachricht",
            submit: "Nachricht senden"
        },
        footer: {
            copyright: "© 2026 Mahmoud Najmeh. Alle Rechte vorbehalten."
        },
        thank_you: {
            title: "Dankeschön",
            heading: "Vielen Dank!",
            message: "Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei Ihnen.",
            back: "Zurück zur Startseite"
        },
        validation: {
            validEmail: "Gültige E-Mail-Adresse",
            invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
            disposableEmail: "Bitte verwenden Sie eine permanente E-Mail-Adresse",
            domainNotExist: "E-Mail-Domain existiert nicht",
            emailTooLong: "E-Mail-Adresse ist zu lang",
             useMajorProvider: "Bitte verwenden Sie einen großen E-Mail-Anbieter wie Gmail, Outlook oder Yahoo"
        },
        // weather: {
        //     loading: "Wetter wird geladen...",
        //     unavailable: "Wetter nicht verfügbar",
        //     unknown: "Unbekannt",
        //     unknown_location: "Unbekannter Ort",
        //     demo: "Live Demo",
        //     fallback: "Zeige Berlin Wetter"
        // }
    },
        pl: {
    title: "Mahmoud Najmeh | Inżynieria Danych & Programista Full-Stack",
    name: {
        first: "Mahmoud",
        last: "Najmeh"
    },
    languages: {
        en: "angielski",
        de: "niemiecki",
        pl: "polski",
        fr: "francuski",
        tr: "turecki", 
        ar: "arabski",
        ru: "rosyjski",
        he: "hebrajski"
    },
    explore: "Odkrywaj",
    section: {
        about: "O mnie",
        services: "Usługi i Ceny",
        projects: "Wybrane projekty",
        contact: "Skontaktuj się"
    },
    about: {
        description: "Programista oprogramowania z dużym doświadczeniem w backendzie i full-stack, wykorzystujący Java, Spring Boot, Python, Django oraz C# .NET. Skupiony na tworzeniu skalowalnych aplikacji i systemów opartych na danych, z wykorzystaniem solidnych zasad inżynierii oprogramowania oraz programowania obiektowego. Obecnie rozwijam się w kierunku Data Engineering i systemów ML, pracując z pipeline’ami ETL/ELT, API, SQL oraz zautomatyzowanymi workflowami danych.",
        education: "Wykształcenie"
    },

    education: {
        java: {
            title: "Programista Java",
            details: "- Podstawy programowania, metodologie Agile<br>- Java: OOP, Strumienie, Współbieżność, Maven, Gradle, Testowanie<br>- Bazy danych: JDBC, Zaawansowany SQL<br>- Frameworki: Spring Boot, Hibernate, Spring Security<br>- API REST i Chmura: AWS, GCP"
        },
        it_specialist: {
            title: "Specjalista IT ds. Rozwoju Aplikacji",
            details: "- OOP z Java SE, C# (.NET), Python, JavaScript, PHP<br>- Rozwój aplikacji webowych i baz danych, systemy Linux<br>- Zarządzanie projektami IT, procesy biznesowe<br>- Matematyka i MS Office w procesach IT<br>- Angielski techniczny, umiejętności komunikacyjne"
        },
        "data-engineering": {
            title: "Inżynieria Danych z Pythonem (Certyfikat IHK)",
            details: "- Certyfikowany program IHK<br>- Pozyskiwanie i integracja danych: ETL/ELT, API, Web Scraping<br>- Inżynieria danych w chmurze: AWS Glue, BigQuery, dbt Cloud<br>- Strumieniowanie danych: Apache Airflow, Kafka, Spark Streaming<br>- Platformy danych: Delta Lake, Apache Iceberg, Lakehouse<br>- ML Engineering: MLflow, scikit-learn, Feature Store<br>- Jakość danych: Great Expectations, Data Lineage, Observability"
        },

        toggle: "Pokaż szczegóły",
        toggleHide: "Ukryj szczegóły"
    },

    skills: {
        title: "Umiejętności techniczne",
        languages: "Języki programowania",
        frameworks: "Frameworki",
        tools: "Narzędzia i platformy",
        ai: "SI i Uczenie Maszynowe",
        "data-engineering": "Inżynieria Danych"
    },

    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "Testy integracyjne",
        mockito: "Mockito",
        react: "React",
        rest_api: "API REST",
        ai: "SI",
        nlp: "Przetwarzanie języka naturalnego",
        django: "Django",
        role_auth: "Autoryzacja oparta na rolach",
        pdf_export: "Eksport PDF",
        ui_validation: "Walidacja interfejsu użytkownika",
        tensorflow: "TensorFlow",
        computer_vision: "Wizja komputerowa",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        database: "Baza danych",
        canvas: "Canvas",
        frontend: "Frontend",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        mysql: "MySQL",
        ml: "Uczenie Maszynowe",
        cv: "Wizja komputerowa",
        "python-ai": "Biblioteki AI Pythona",
        machine_learning: "Uczenie Maszynowe",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",

        avro: "Avro",
        schema_registry: "Rejestr schematów",
        docker_compose: "Docker Compose",
        rich_ui: "Rich UI",
        stateful_processing: "Przetwarzanie stanowe",
        real_time_streaming: "Strumieniowanie w czasie rzeczywistym",
        pytest: "Pytest",

        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        etl: "ETL",
        data_pipeline: "Pipeline danych"
    },

    title: {
        "java-backend": "PROGRAMISTA JAVA",
        "full-stack": "PROGRAMISTA FULL-STACK",
        ai: "AI & ML",
        "data-engineering": "INŻYNIERIA DANYCH"
    },

    services: {
        subtitle: "Profesjonalne usługi programistyczne dostosowane do potrzeb Twojej firmy",
        note: "<strong>Uwaga:</strong> Wszystkie ceny są szacunkowe. Ostateczna cena zależy od zakresu projektu i wymagań. Skontaktuj się ze mną, aby uzyskać spersonalizowaną ofertę dostosowaną do Twoich specyficznych potrzeb.",
        cta: "Zacznij",

        backend: {
            title: "Rozwój Backend",
            price: "€2 500+",
            features: [
                "Rozwój API REST Spring Boot",
                "Projektowanie i optymalizacja bazy danych",
                "Implementacja uwierzytelniania i bezpieczeństwa",
                "Architektura mikrousług",
                "Dokumentacja i testy API",
                "Wdrożenie na platformach chmurowych"
            ]
        },

        fullstack: {
            title: "Rozwój Full-Stack",
            price: "€4 000+",
            features: [
                "Kompletny rozwój aplikacji webowych",
                "Backend Spring Boot + frontend React",
                "Responsywny design UI/UX",
                "Integracja z bazą danych",
                "System uwierzytelniania użytkowników",
                "Panel administracyjny"
            ]
        },

        api: {
            title: "Rozwój API",
            price: "€1 800+",
            features: [
                "Niestandardowy rozwój API REST",
                "Integracja z bazą danych (PostgreSQL/MySQL)",
                "Uwierzytelnianie JWT",
                "Dokumentacja API z Swagger/OpenAPI",
                "Optymalizacja wydajności",
                "Gotowy do wdrożenia"
            ]
        },

        website: {
            title: "Pakiet strony biznesowej",
            price: "€1 500-€3 000",
            features: [
                "Profesjonalna strona portfolio",
                "Formularz kontaktowy z powiadomieniami e-mail",
                "Responsywny design mobilny",
                "Podstawowa optymalizacja SEO",
                "System zarządzania treścią",
                "Integracja z mediami społecznościowymi"
            ]
        },

        ai: {
            title: "Integracja AI",
            price: "€3 500+",
            features: [
                "API przetwarzania i podsumowywania tekstu", 
                "Analiza obrazów z TensorFlow",
                "Integracja chatbotów",
                "Wdrożenie modeli uczenia maszynowego",
                "Pulpity wizualizacji danych",
                "Niestandardowe rozwiązania AI"
            ]
        },
        "data-engineering": {
            title: "Inżynieria Danych",
            price: "€4 500+",
            features: [
                "Tworzenie pipeline’ów ETL/ELT w Pythonie",
                "Orkiestracja workflow (Apache Spark & Airflow)",
                "Platformy danych w chmurze (AWS Glue, BigQuery)",
                "MLflow – śledzenie eksperymentów i rejestr modeli",
                "Jakość danych z Great Expectations",
                "Architektura Lakehouse (Delta Lake, Iceberg)"
            ]
        },

        maintenance: {
            title: "Utrzymanie i wsparcie",
            price: "€500/miesiąc",
            features: [
                "Regularne aktualizacje oprogramowania",
                "Naprawa błędów i rozwiązywanie problemów",
                "Monitorowanie wydajności",
                "Poprawki bezpieczeństwa",
                "Utrzymanie bazy danych",
                "Wsparcie awaryjne 24/7"
            ]
        }
    },
        project: {
            impact: "Wpływ:",
            missing: {
                title: "System Alarmowy dla Osób Zaginionych FullStack",
                description: "Narzędzie policyjne opracowane z użyciem Spring Boot, SwiftUI i Jetpack Compose, z powiadomieniami push Firebase, śledzeniem geolokalizacji i panelem administracyjnym.",
                duration: "6 miesięcy",
                impact: "Zwiększone bezpieczeństwo publiczne dzięki szybkim alarmom o osobach zaginionych, skrócenie czasu reakcji policji o 40% i poprawa zaangażowania społeczności w inicjatywy bezpieczeństwa."
            },
            banking: {
                title: "System Bankowy FullStack",
                description: "Aplikacja bankowa full-stack z śledzeniem e-mail/IP, obsługą wielu walut, przetwarzaniem transakcji i kompleksowymi testami z użyciem Mockito.",
                duration: "6 miesięcy",
                impact: "Usprawnione operacje finansowe dzięki bezpiecznym transakcjom wielowalutowym, zmniejszenie oszustw o 60% dzięki zaawansowanemu śledzeniu IP oraz poprawa satysfakcji klientów dzięki przetwarzaniu transakcji w czasie rzeczywistym."
            },
            ai_text: {
                title: "Podsumowywacz Tekstu AI FullStack",
                description: "Wielojęzyczna aplikacja do podsumowywania tekstu, oparta na API REST Spring Boot z zaawansowanymi możliwościami przetwarzania języka naturalnego.",
                duration: "2 miesiące",
                impact: "Zwiększenie efektywności konsumpcji treści o 70%, obsługa ponad 15 języków dla globalnej dostępności oraz skrócenie czasu czytania materiałów badawczych i edukacyjnych dzięki automatyzacji podsumowań."
            },
            student: {
                title: "Portal Studencki FullStack",
                description: "Kompleksowa platforma edukacyjna z kontrolą dostępu opartą na rolach, systemem ocen, funkcją eksportu PDF i testami online.",
                duration: "4 miesiące",
                impact: "Poprawa wyników edukacyjnych dla ponad 500 uczniów, zmniejszenie obciążenia administracyjnego o 45% dzięki automatycznemu ocenianiu i raportowaniu oraz usprawnienie komunikacji rodzic-nauczyciel dzięki śledzeniu postępów w czasie rzeczywistym."
            },
            face_analysis: {
                title: "Analiza Twarzy AI",
                description: "System klasyfikacji obrazów zbudowany z użyciem Django i TensorFlow, z automatycznym przetwarzaniem i niestandardowym interfejsem GUI.",
                duration: "4 miesiące",
                impact: "Osiągnięto 95% dokładność w zadaniach rozpoznawania twarzy, umożliwiono zautomatyzowane systemy bezpieczeństwa i uwierzytelniania oraz dostarczono cenne informacje do analiz psychologicznych i behawioralnych poprzez rozpoznawanie wyrazu twarzy."
            },
            medical_diagnosis: {
                title: "System Diagnostyki Medycznej z AI",
                description: "Aplikacja desktopowa oparta na uczeniu maszynowym, zbudowana z użyciem .NET i ML.NET, przewidująca potencjalne choroby na podstawie objawów podanych przez użytkownika. Funkcje obejmują wprowadzanie objawów w języku naturalnym, przewidywanie chorób z poziomem pewności oraz przyjazny dla użytkownika interfejs oparty na WPF.",
                duration: "2 miesiące",
                impact: "Wsparcie wstępnej diagnozy dla ponad 1000 użytkowników z dokładnością 88%, zmniejszenie niepotrzebnych wizyt w szpitalu o 35% dzięki wiarygodnej ocenie objawów oraz umożliwienie dostępu do informacji zdrowotnych dla lepszego podejmowania decyzji."
            },
            dagster_etl: {
                title: "Projekt Dagster ETL",
                description: "Pipeline ETL zbudowany przy użyciu Dagster, Docker i PostgreSQL, prezentujący nowoczesne praktyki data engineering, w tym orkiestrację opartą na zasobach, walidację jakości danych oraz automatyczne harmonogramowanie.",
                duration: "3 miesiące",
                impact: "Wdrożenie produkcyjnego pipeline’u ETL z orkiestracją Dagster, konteneryzacją w Docker dla spójnych wdrożeń oraz integracją z PostgreSQL dla niezawodnego przechowywania danych. Obejmuje automatyczną walidację danych, śledzenie zależności (data lineage) oraz harmonogramowane wykonywanie zadań dla powtarzalnych procesów danych."
            },
            fraud_detection: {
                title: "System wykrywania oszustw (Kafka)",
                description: "System wykrywania oszustw w czasie rzeczywistym oparty na Apache Kafka, wykorzystujący komunikację w dwóch formatach (Avro + JSON), przetwarzanie strumieniowe ze stanem oraz zaawansowany interfejs monitorowania w terminalu.",
                duration: "3 miesiące",
                impact: "Osiągnięto wykrywanie oszustw z opóźnieniem poniżej jednej sekundy dzięki 5-poziomowemu silnikowi reguł, zmniejszono liczbę fałszywych alarmów poprzez dynamiczne profilowanie użytkowników oraz zapewniono pełną zgodność z audit trail dzięki automatycznemu logowaniu JSONL z codzienną rotacją."
            },
            view: "Zobacz projekt"
        },
        contact: {
            info: "Informacje kontaktowe",
            location: "Berlin, Niemcy",
            video: "Wideo o mnie",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Twoje imię",
            email: "Twój e-mail",
            subject: "Temat",
            message: "Twoja wiadomość",
            submit: "Wyślij wiadomość"
        },
        footer: {
            copyright: "© 2026 Mahmoud Najmeh. Wszelkie prawa zastrzeżone."
        },
        thank_you: {
            title: "Dziękujemy",
            heading: "Dziękujemy!",
            message: "Twoja wiadomość została pomyślnie wysłana. Odezwę się wkrótce.",
            back: "Powrót do strony głównej"
        },
        validation: {
            validEmail: "Prawidłowy adres e-mail",
            invalidEmail: "Proszę podać prawidłowy adres e-mail",
            disposableEmail: "Proszę użyć stałego adresu e-mail",
            domainNotExist: "Domena e-mail nie istnieje",
            emailTooLong: "Adres e-mail jest zbyt długi",
            useMajorProvider: "Proszę użyć głównego dostawcy poczty e-mail, takiego jak Gmail, Outlook lub Yahoo"
        },
        // weather: {
        //     loading: "Ładowanie pogody...",
        //     unavailable: "Pogoda niedostępna",
        //     unknown: "Nieznane",
        //     unknown_location: "Nieznana lokalizacja",
        //     demo: "Demo na żywo",
        //     fallback: "Pokazuję pogodę w Berlinie"
        // }
    },
    fr: {
    title: "Mahmoud Najmeh | Ingénierie des Données & Développeur Full-Stack",
    name: {
        first: "Mahmoud",
        last: "Najmeh"
    },
    languages: {
        en: "Anglais",
        de: "Allemand",
        pl: "Polonais",
        fr: "Français",
        tr: "Turc",
        ar: "Arabe",
        ru: "Russe", 
        he: "Hébreu"
    },
    explore: "Explorer",
    section: {
        about: "À propos",
        services: "Services & Tarifs",
        projects: "Projets phares",
        contact: "Me contacter"
    },
    about: {
        description: "Développeur logiciel avec une solide expérience en backend et full-stack utilisant Java, Spring Boot, Python, Django et C# .NET. Axé sur la conception d’applications évolutives et de systèmes orientés données, en s’appuyant sur des principes solides d’ingénierie logicielle et de programmation orientée objet. Actuellement en développement de compétences en Data Engineering et systèmes de ML, avec une expérience sur les pipelines ETL/ELT, les API, SQL et les workflows de données automatisés.",
        education: "Éducation"
    },

    education: {
        java: {
            title: "Développeur Java",
            details: "- Fondamentaux de la programmation, méthodologies Agiles<br>- Java : POO, Streams, Concurrence, Maven, Gradle, Tests<br>- Bases de données : JDBC, SQL avancé<br>- Frameworks : Spring Boot, Hibernate, Spring Security<br>- API REST et Cloud : AWS, GCP"
        },
        it_specialist: {
            title: "Spécialiste IT en développement d'applications",
            details: "- POO avec Java SE, C# (.NET), Python, JavaScript, PHP<br>- Développement web et bases de données, systèmes Linux<br>- Gestion de projets IT, processus métier<br>- Mathématiques et MS Office pour les processus IT<br>- Anglais technique, compétences en communication"
        },
        "data-engineering": {
            title: "Ingénierie des Données avec Python (Certificat IHK)",
            details: "- Programme certifié IHK<br>- Collecte et intégration des données : ETL/ELT, API, Web Scraping<br>- Ingénierie des données cloud : AWS Glue, BigQuery, dbt Cloud<br>- Streaming de données : Apache Airflow, Kafka, Spark Streaming<br>- Plateformes de données : Delta Lake, Apache Iceberg, Lakehouse<br>- ML Engineering : MLflow, scikit-learn, Feature Store<br>- Qualité des données : Great Expectations, Data Lineage, Observabilité"
        },

        toggle: "Afficher les détails",
        toggleHide: "Masquer les détails"
    },

    skills: {
        title: "Compétences techniques",
        languages: "Langages",
        frameworks: "Frameworks",
        tools: "Outils & Plateformes",
        ai: "IA & Apprentissage Automatique",
        "data-engineering": "Ingénierie des Données"
    },

    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "Tests d'intégration",
        mockito: "Mockito",
        react: "React",
        rest_api: "API REST",
        ai: "IA",
        nlp: "Traitement du langage naturel",
        django: "Django",
        role_auth: "Authentification basée sur les rôles",
        pdf_export: "Export PDF",
        ui_validation: "Validation d'interface utilisateur",
        tensorflow: "TensorFlow",
        computer_vision: "Vision par ordinateur",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        canvas: "Canvas",
        frontend: "Frontend",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        database: "Base de données",
        mysql: "MySQL",
        ml: "Apprentissage automatique",
        cv: "Vision par ordinateur",
        "python-ai": "Bibliothèques IA Python",
        machine_learning: "Apprentissage automatique",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",

        avro: "Avro",
        schema_registry: "Registre de schémas",
        docker_compose: "Docker Compose",
        rich_ui: "Interface riche",
        stateful_processing: "Traitement avec état",
        real_time_streaming: "Streaming en temps réel",
        pytest: "Pytest",

        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        etl: "ETL",
        data_pipeline: "Pipeline de données"
    },

    title: {
        "java-backend": "DÉVELOPPEUR JAVA",
        "full-stack": "DÉVELOPPEUR FULL-STACK",
        ai: "IA & ML",
        "data-engineering": "INGÉNIERIE DES DONNÉES"
    },

    services: {
        subtitle: "Services de développement professionnels adaptés aux besoins de votre entreprise",
        note: "<strong>Remarque :</strong> Tous les prix sont des estimations. Le prix final dépend de la portée et des exigences du projet. Contactez-moi pour un devis personnalisé adapté à vos besoins spécifiques.",
        cta: "Commencer",

        backend: {
            title: "Développement Backend",
            price: "€2 500+",
            features: [
                "Développement d'API REST Spring Boot",
                "Conception et optimisation de bases de données",
                "Mise en œuvre d'authentification et de sécurité",
                "Architecture de microservices",
                "Documentation et tests d'API",
                "Déploiement sur des plateformes cloud"
            ]
        },

        fullstack: {
            title: "Développement Full-Stack",
            price: "€4 000+",
            features: [
                "Développement complet d'applications web",
                "Backend Spring Boot + frontend React",
                "Design UI/UX responsive",
                "Intégration de base de données",
                "Système d'authentification des utilisateurs",
                "Tableau de bord administrateur"
            ]
        },

        api: {
            title: "Développement d'API",
            price: "€1 800+",
            features: [
                "Développement d'API REST personnalisées",
                "Intégration de base de données (PostgreSQL/MySQL)",
                "Authentification JWT",
                "Documentation d'API avec Swagger/OpenAPI",
                "Optimisation des performances",
                "Prêt pour le déploiement"
            ]
        },

        website: {
            title: "Forfait site web professionnel",
            price: "€1 500-€3 000",
            features: [
                "Site portfolio professionnel",
                "Formulaire de contact avec notifications par email",
                "Design responsive mobile",
                "Optimisation SEO de base",
                "Système de gestion de contenu",
                "Intégration des réseaux sociaux"
            ]
        },

        ai: {
            title: "Intégration d'IA",
            price: "€3 500+",
            features: [
                "API de traitement et de résumé de texte",
                "Analyse d'images avec TensorFlow",
                "Intégration de chatbots",
                "Déploiement de modèles d'apprentissage automatique",
                "Tableaux de bord de visualisation de données",
                "Solutions IA personnalisées"
            ]
        },
        "data-engineering": {
            title: "Ingénierie des Données",
            price: "€4 500+",
            features: [
                "Création de pipelines ETL/ELT en Python",
                "Orchestration des workflows (Apache Spark & Airflow)",
                "Plateformes de données cloud (AWS Glue, BigQuery)",
                "MLflow – suivi des expériences et gestion des modèles",
                "Qualité des données avec Great Expectations",
                "Architecture Lakehouse (Delta Lake, Iceberg)"
            ]
        },

        maintenance: {
            title: "Maintenance et support",
            price: "€500/mois",
            features: [
                "Mises à jour logicielles régulières",
                "Corrections de bugs et dépannage",
                "Surveillance des performances",
                "Correctifs de sécurité",
                "Maintenance de la base de données",
                "Support d'urgence 24/7"
            ]
        }
    },
        project: {
            impact: "Impact:",
            missing: {
                title: "Système d'alerte pour personnes disparues FullStack",
                description: "Outil policier développé avec Spring Boot, SwiftUI et Jetpack Compose, incluant des notifications push Firebase, un suivi géolocalisé et un panneau d'administration.",
                duration: "6 mois",
                impact: "Amélioration de la sécurité publique grâce à des alertes rapides pour personnes disparues, réduction de 40 % du temps de réponse de la police et engagement communautaire accru dans les initiatives de sécurité."
            },
            banking: {
                title: "Système bancaire FullStack",
                description: "Application bancaire full-stack avec suivi email/IP, prise en charge de plusieurs devises, traitement des transactions et tests complets avec Mockito.",
                duration: "6 mois",
                impact: "Opérations financières rationalisées avec des transactions multi-devises sécurisées, réduction de 60 % des activités frauduleuses grâce au suivi avancé des IP et amélioration de la satisfaction client grâce au traitement des transactions en temps réel."
            },
            ai_text: {
                title: "Résumeur de texte IA FullStack",
                description: "Application de résumé de texte multilingue, alimentée par une API REST Spring Boot avec des capacités avancées de traitement du langage naturel.",
                duration: "2 mois",
                impact: "Augmentation de 70 % de l'efficacité de consommation de contenu, prise en charge de plus de 15 langues pour une accessibilité mondiale et réduction du temps de lecture des contenus de recherche et éducatifs grâce à la synthèse automatisée."
            },
            student: {
                title: "Portail étudiant FullStack",
                description: "Plateforme éducative complète avec contrôle d'accès basé sur les rôles, système de notation, export PDF et tests en ligne.",
                duration: "4 mois",
                impact: "Amélioration des résultats éducatifs pour plus de 500 étudiants, réduction de 45 % de la charge administrative grâce à la notation et au reporting automatisés et amélioration de la communication parents-enseignants avec un suivi des progrès en temps réel."
            },
            face_analysis: {
                title: "Analyse faciale IA",
                description: "Système de classification d'images construit avec Django et TensorFlow, avec traitement automatisé et interface graphique personnalisée.",
                duration: "4 mois",
                impact: "Atteint 95 % de précision en reconnaissance faciale, permis des systèmes de sécurité et d'authentification automatisés et fourni des insights précieux pour l'analyse psychologique et comportementale via la reconnaissance des expressions faciales."
            },
            medical_diagnosis: {
                title: "Système de diagnostic médical IA",
                description: "Application desktop basée sur le machine learning, développée avec .NET et ML.NET, permettant de prédire des maladies potentielles à partir des symptômes fournis par l'utilisateur. Inclut la saisie en langage naturel, des prédictions avec score de confiance et une interface conviviale basée sur WPF.",
                duration: "2 mois",
                impact: "Aide au diagnostic préliminaire pour plus de 1 000 utilisateurs avec 88 % de précision, réduction de 35 % des visites hospitalières inutiles grâce à une évaluation fiable des symptômes et meilleure autonomie des utilisateurs grâce à un accès simplifié aux informations de santé."
            },
            dagster_etl: {
                title: "Projet ETL avec Dagster",
                description: "Pipeline ETL construit avec Dagster, Docker et PostgreSQL, mettant en œuvre des pratiques modernes de data engineering, incluant l’orchestration basée sur les assets, la validation de la qualité des données et la planification automatisée.",
                duration: "3 mois",
                impact: "Déploiement d’un pipeline ETL prêt pour la production avec orchestration Dagster, conteneurisation via Docker pour des environnements cohérents et intégration PostgreSQL pour un stockage fiable. Inclut la validation automatique des données, le suivi des dépendances (data lineage) et l’exécution planifiée pour des flux de données reproductibles."
            },
            fraud_detection: {
                title: "Système de détection de fraude (Kafka)",
                description: "Système de détection de fraude en temps réel basé sur Apache Kafka, utilisant des messages en double format (Avro + JSON), un traitement de flux avec état et une interface de monitoring avancée en terminal.",
                duration: "3 mois",
                impact: "Détection de fraude avec une latence inférieure à une seconde grâce à un moteur de règles à 5 niveaux, réduction des faux positifs via le profilage dynamique des utilisateurs et conformité complète aux exigences d’audit grâce à un logging JSONL automatisé avec rotation quotidienne."
            },
            view: "Voir le projet"
        },
        contact: {
            info: "Informations de contact",
            location: "Berlin, Allemagne",
            video: "Vidéo à propos de moi",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Votre nom",
            email: "Votre email",
            subject: "Sujet",
            message: "Votre message",
            submit: "Envoyer le message"
        },
        footer: {
            copyright: "© 2026 Mahmoud Najmeh. Tous droits réservés."
        },
        thank_you: {
            title: "Merci",
            heading: "Merci !",
            message: "Votre message a été envoyé avec succès. Je vous répondrai bientôt.",
            back: "Retour à l'accueil"
        },
        validation: {
            validEmail: "Adresse e-mail valide",
            invalidEmail: "Veuillez saisir une adresse e-mail valide",
            disposableEmail: "Veuillez utiliser une adresse e-mail permanente",
            domainNotExist: "Le domaine de messagerie n'existe pas",
            emailTooLong: "L'adresse e-mail est trop longue",
            useMajorProvider: "Veuillez utiliser un fournisseur de messagerie majeur comme Gmail, Outlook ou Yahoo"
        },
        // weather: {
        //     loading: "Chargement de la météo...",
        //     unavailable: "Météo indisponible",
        //     unknown: "Inconnu",
        //     unknown_location: "Lieu inconnu",
        //     demo: "Démo en direct",
        //     fallback: "Affichage de la météo de Berlin"
        // }
    },
    tr: {
    title: "Mahmoud Najmeh | Full-Stack Geliştirici",
    name: {
        first: "Mahmoud",
        last: "Najmeh"
    },
    languages: {
        en: "İngilizce",
        de: "Almanca",
        pl: "Lehçe",
        fr: "Fransızca",
        tr: "Türkçe",
        ar: "Arapça",
        ru: "Rusça",
        he: "İbranice"
    },
    explore: "Keşfet",
    section: {
        about: "Hakkımda",
        services: "Hizmetler ve Fiyatlar",
        projects: "Öne Çıkan Projeler",
        contact: "İletişime Geç"
    },
    about: {
        description: "Java, Spring Boot, Python, Django ve C# .NET kullanarak güçlü backend ve full-stack deneyimine sahip bir yazılım geliştirici. Sağlam yazılım mühendisliği ve nesne yönelimli tasarım prensiplerini kullanarak ölçeklenebilir uygulamalar ve veri odaklı sistemler geliştirmeye odaklanır. Şu anda ETL/ELT pipeline'ları, API'ler, SQL ve otomatik veri iş akışları üzerinde çalışarak Data Engineering ve ML sistemleri alanında uzmanlığını geliştirmektedir.",
        education: "Eğitim"
    },

    education: {
        java: {
            title: "Java Geliştirici",
            details: "- Programlama temelleri, Çevik metodolojiler<br>- Java: OOP, Akışlar, Eşzamanlılık, Maven, Gradle, Test<br>- Veritabanları: JDBC, Gelişmiş SQL<br>- Çerçeveler: Spring Boot, Hibernate, Spring Security<br>- REST API'leri ve Bulut: AWS, GCP"
        },
        it_specialist: {
            title: "Uygulama Geliştirme için BT Uzmanı",
            details: "- Java SE, C# (.NET), Python, JavaScript, PHP ile OOP<br>- Web ve veritabanı geliştirme, Linux sistemleri<br>- BT proje yönetimi, iş süreçleri<br>- BT süreçleri için Matematik ve MS Office<br>- Teknik İngilizce, iletişim becerileri"
        },
        "data-engineering": {
            title: "Python ile Veri Mühendisliği (IHK Sertifikası)",
            details: "- IHK sertifikalı program<br>- Veri toplama ve entegrasyon: ETL/ELT, API, Web Scraping<br>- Bulut veri mühendisliği: AWS Glue, BigQuery, dbt Cloud<br>- Veri akışı: Apache Airflow, Kafka, Spark Streaming<br>- Veri platformları: Delta Lake, Apache Iceberg, Lakehouse<br>- ML Engineering: MLflow, scikit-learn, Feature Store<br>- Veri kalitesi: Great Expectations, Data Lineage, Observability"
        },

        toggle: "Detayları Göster",
        toggleHide: "Detayları Gizle"
    },

    skills: {
        title: "Teknik Beceriler",
        languages: "Programlama Dilleri",
        frameworks: "Çerçeveler",
        tools: "Araçlar ve Platformlar",
        ai: "Yapay Zeka ve Makine Öğrenimi",
        "data-engineering": "Veri Mühendisliği"
    },

    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "Entegrasyon Testleri",
        mockito: "Mockito",
        react: "React",
        rest_api: "REST API",
        ai: "Yapay Zeka",
        nlp: "Doğal Dil İşleme",
        django: "Django",
        role_auth: "Rol Tabanlı Yetkilendirme",
        pdf_export: "PDF Dışa Aktarma",
        ui_validation: "Kullanıcı Arayüzü Doğrulama",
        tensorflow: "TensorFlow",
        computer_vision: "Bilgisayarlı Görü",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        mysql: "MySQL",
        canvas: "Canvas",
        frontend: "Ön Uç",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        database: "Veritabanı",
        ml: "Makine Öğrenimi",
        cv: "Bilgisayarlı Görü",
        "python-ai": "Python AI Kütüphaneleri",
        machine_learning: "Makine Öğrenimi",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",

        avro: "Avro",
        schema_registry: "Şema Kayıt Defteri",
        docker_compose: "Docker Compose",
        rich_ui: "Zengin Arayüz",
        stateful_processing: "Durum bilgili işleme",
        real_time_streaming: "Gerçek zamanlı akış",
        pytest: "Pytest",

        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        etl: "ETL",
        data_pipeline: "Veri Pipeline"
    },
    title: {
        "java-backend": "JAVA GELİŞTİRİCİ",
        "full-stack": "FULL-STACK GELİŞTİRİCİ",
        ai: "YAPAY ZEKA & ML",
        "data-engineering": "VERİ MÜHENDİSLİĞİ"
    },

    services: {
        subtitle: "İş ihtiyaçlarınıza göre uyarlanmış profesyonel geliştirme hizmetleri",
        note: "<strong>Not:</strong> Tüm fiyatlar tahmini. Nihai fiyat, proje kapsamına ve gereksinimlere bağlıdır. Spesifik ihtiyaçlarınıza uygun kişiselleştirilmiş bir teklif için benimle iletişime geçin.",
        cta: "Başla",

        backend: {
            title: "Backend Geliştirme",
            price: "€2.500+",
            features: [
                "Spring Boot REST API geliştirme",
                "Veritabanı tasarımı ve optimizasyonu",
                "Kimlik doğrulama ve güvenlik uygulaması",
                "Mikro servis mimarisi",
                "API dokümantasyonu ve testleri",
                "Bulut platformlarına dağıtım"
            ]
        },

        fullstack: {
            title: "Full Stack Geliştirme",
            price: "€4.000+",
            features: [
                "Tam web uygulaması geliştirme",
                "Spring Boot backend + React frontend",
                "Duyarlı UI/UX tasarımı",
                "Veritabanı entegrasyonu",
                "Kullanıcı kimlik doğrulama sistemi",
                "Yönetici paneli"
            ]
        },

        api: {
            title: "API Geliştirme",
            price: "€1.800+",
            features: [
                "Özel REST API geliştirme",
                "Veritabanı entegrasyonu (PostgreSQL/MySQL)",
                "JWT kimlik doğrulama",
                "Swagger/OpenAPI ile API dokümantasyonu",
                "Performans optimizasyonu",
                "Dağıtım için hazır"
            ]
        },

        website: {
            title: "İş Web Sitesi Paketi",
            price: "€1.500-€3.000",
            features: [
                "Profesyonel portföy web sitesi",
                "E-posta bildirimleriyle iletişim formu",
                "Mobil duyarlı tasarım",
                "Temel SEO optimizasyonu",
                "İçerik yönetim sistemi",
                "Sosyal medya entegrasyonu"
            ]
        },

        ai: {
            title: "AI Entegrasyonu",
            price: "€3.500+",
            features: [
                "Metin işleme ve özetleme API'leri",
                "TensorFlow ile görüntü analizi",
                "Sohbet botu entegrasyonu",
                "Makine öğrenimi model dağıtımı",
                "Veri görselleştirme panoları",
                "Özel AI çözümleri"
            ]
        },
        "data-engineering": {
            title: "Veri Mühendisliği",
            price: "€4.500+",
            features: [
                "Python ile ETL/ELT veri pipeline'ları geliştirme",
                "Workflow orkestrasyonu (Apache Spark & Airflow)",
                "Bulut veri platformları (AWS Glue, BigQuery)",
                "MLflow ile deney takibi ve model yönetimi",
                "Great Expectations ile veri kalitesi",
                "Lakehouse mimarisi (Delta Lake, Iceberg)"
            ]
        },

        maintenance: {
            title: "Bakım ve Destek",
            price: "€500/ay",
            features: [
                "Düzenli yazılım güncellemeleri",
                "Hata düzeltmeleri ve sorun giderme",
                "Performans izleme",
                "Güvenlik yamaları",
                "Veritabanı bakımı",
                "24/7 acil destek"
            ]
        }
    },
        project: {
            impact: "Etki:",
            missing: {
                title: "Kayıp Kişi Uyarı Sistemi Full Stack",
                description: "Spring Boot, SwiftUI ve Jetpack Compose ile geliştirilen polis aracı, Firebase push bildirimleri, coğrafi konum takibi ve yönetici paneli içerir.",
                duration: "6 Ay",
                impact: "Hızlı kayıp kişi uyarılarıyla halk güvenliğinin artırılması, polis müdahale süresinin %40 azaltılması ve güvenlik girişimlerinde topluluk katılımının iyileştirilmesi."
            },
            banking: {
                title: "Bankacılık Sistemi Full Stack",
                description: "E-posta/IP takibi, çoklu para birimi desteği, işlem işleme ve Mockito ile kapsamlı testler içeren full-stack bankacılık uygulaması.",
                duration: "6 Ay",
                impact: "Güvenli çok para birimli işlemlerle finansal operasyonların iyileştirilmesi, gelişmiş IP takibi sayesinde dolandırıcılık faaliyetlerinin %60 azaltılması ve gerçek zamanlı işlem işleme ile müşteri memnuniyetinin artırılması."
            },
            ai_text: {
                title: "Yapay Zeka Metin Özetleyici Full Stack",
                description: "Spring Boot REST API ile desteklenen, gelişmiş doğal dil işleme yeteneklerine sahip çok dilli metin özetleme uygulaması.",
                duration: "2 Ay",
                impact: "İçerik tüketim verimliliğinin %70 artırılması, küresel erişilebilirlik için 15'ten fazla dil desteği ve otomatik özetleme sayesinde araştırma ve eğitim materyallerinin okuma süresinin kısaltılması."
            },
            student: {
                title: "Öğrenci Portalı Full Stack",
                description: "Rol tabanlı erişim kontrolü, notlandırma sistemi, PDF dışa aktarma ve çevrimiçi testler içeren kapsamlı bir eğitim platformu.",
                duration: "4 Ay",
                impact: "500'den fazla öğrenci için eğitim sonuçlarının iyileştirilmesi, otomatik notlandırma ve raporlama ile idari iş yükünün %45 azaltılması ve gerçek zamanlı ilerleme takibi ile ebeveyn-öğretmen iletişiminin geliştirilmesi."
            },
            face_analysis: {
                title: "Yapay Zeka Yüz Analizi",
                description: "Django ve TensorFlow ile geliştirilen, otomatik işleme ve özel GUI arayüzü içeren görüntü sınıflandırma sistemi.",
                duration: "4 Ay",
                impact: "Yüz tanıma görevlerinde %95 doğruluk elde edildi, otomatik güvenlik ve kimlik doğrulama sistemleri sağlandı ve yüz ifadesi tanıma ile psikolojik ve davranışsal analizler için değerli içgörüler sunuldu."
            },
            medical_diagnosis: {
                title: "Yapay Zeka Tıbbi Teşhis Sistemi",
                description: "Kullanıcı tarafından girilen semptomlara göre potansiyel hastalıkları tahmin eden, .NET ve ML.NET ile geliştirilmiş makine öğrenimi tabanlı masaüstü uygulaması. Doğal dilde semptom girişi, güven skoru ile hastalık tahmini ve WPF tabanlı kullanıcı dostu arayüz içerir.",
                duration: "2 Ay",
                impact: "1000'den fazla kullanıcı için %88 doğrulukla ön teşhis desteği sağlandı, güvenilir semptom değerlendirmesi sayesinde gereksiz hastane ziyaretleri %35 azaltıldı ve bireylerin daha iyi karar vermesi için erişilebilir sağlık bilgileri sunuldu."
            },
            dagster_etl: {
                title: "Dagster ETL Projesi",
                description: "Dagster, Docker ve PostgreSQL kullanılarak oluşturulmuş ETL pipeline’ı; modern veri mühendisliği uygulamalarını, asset tabanlı orkestrasyonu, veri kalite doğrulamasını ve otomatik zamanlamayı içerir.",
                duration: "3 Ay",
                impact: "Üretime hazır bir ETL pipeline’ı Dagster orkestrasyonu ile kuruldu, Docker ile tutarlı dağıtım ortamları sağlandı ve PostgreSQL ile güvenilir veri depolama entegre edildi. Otomatik veri doğrulama, veri bağımlılıklarının izlenmesi (data lineage) ve planlanmış görev yürütmeleri ile tekrarlanabilir veri süreçleri sağlandı."
            },
            fraud_detection: {
                title: "Dolandırıcılık Tespit Sistemi (Kafka)",
                description: "Apache Kafka tabanlı, çift formatlı mesajlaşma (Avro + JSON), durum bilgili akış işleme ve gelişmiş terminal tabanlı izleme arayüzü içeren gerçek zamanlı dolandırıcılık tespit sistemi.",
                duration: "3 Ay",
                impact: "5 katmanlı kural motoru sayesinde saniyenin altında gecikmeyle dolandırıcılık tespiti sağlandı, dinamik kullanıcı profilleme ile yanlış pozitifler azaltıldı ve günlük rotasyonlu otomatik JSONL loglama ile tam denetim izi uyumluluğu sağlandı."
            },
            view: "Projeyi Görüntüle"
        },
        contact: {
            info: "İletişim Bilgileri",
            location: "Berlin, Almanya",
            video: "Hakkımda Video",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Adınız",
            email: "E-postanız",
            subject: "Konu",
            message: "Mesajınız",
            submit: "Mesaj Gönder"
        },
        footer: {
            copyright: "© 2026 Mahmoud Najmeh. Tüm hakları saklıdır."
        },
        thank_you: {
            title: "Teşekkürler",
            heading: "Teşekkürler!",
            message: "Mesajınız başarıyla gönderildi. Yakında size geri döneceğim.",
            back: "Ana Sayfaya Geri Dön"
        },
        validation: {
            validEmail: "Geçerli e-posta adresi",
            invalidEmail: "Lütfen geçerli bir e-posta adresi girin",
            disposableEmail: "Lütfen kalıcı bir e-posta adresi kullanın",
            domainNotExist: "E-posta alan adı mevcut değil",
            emailTooLong: "E-posta adresi çok uzun",
            useMajorProvider: "Lütfen Gmail, Outlook veya Yahoo gibi büyük bir e-posta sağlayıcısı kullanın"
        },
        // weather: {
        //     loading: "Hava durumu yükleniyor...",
        //     unavailable: "Hava durumu mevcut değil",
        //     unknown: "Bilinmeyen",
        //     unknown_location: "Bilinmeyen konum",
        //     demo: "Canlı Demo",
        //     fallback: "Berlin hava durumu gösteriliyor"
        // }
    },
        ru: {
    title: "Махмуд Наджмех | Инженерия данных & Full-Stack разработчик",
    name: {
        first: "Махмуд",
        last: "Наджмех"
    },
    languages: {
        en: "Английский",
        de: "Немецкий",
        pl: "Польский",
        fr: "Французский",
        tr: "Турецкий",
        ar: "Арабский", 
        ru: "Русский",
        he: "Иврит"
    },
    explore: "Исследовать",
    section: {
        about: "Обо мне",
        services: "Услуги и цены",
        projects: "Избранные проекты",
        contact: "Связаться"
    },
    about: {
        description: "Разработчик программного обеспечения с сильным опытом в backend и full-stack разработке с использованием Java, Spring Boot, Python, Django и C# .NET. Сосредоточен на создании масштабируемых приложений и систем, ориентированных на данные, с использованием надежных принципов объектно-ориентированного проектирования. В настоящее время расширяет экспертизу в области Data Engineering и ML-систем, работая с ETL/ELT конвейерами, API, SQL и автоматизированными потоками данных.",
    },

    education: {
        java: {
            title: "Java-разработчик",
            details: "- Основы программирования, Agile-методологии<br>- Java: ООП, потоки, многопоточность, Maven, Gradle, тестирование<br>- Базы данных: JDBC, продвинутый SQL<br>- Фреймворки: Spring Boot, Hibernate, Spring Security<br>- REST API и облако: AWS, GCP"
        },
        it_specialist: {
            title: "IT-специалист по разработке приложений",
            details: "- ООП с Java SE, C# (.NET), Python, JavaScript, PHP<br>- Веб-разработка и базы данных, Linux-системы<br>- Управление IT-проектами, бизнес-процессы<br>- Математика и MS Office для IT-процессов<br>- Технический английский, коммуникативные навыки"
        },
        "data-engineering": {
            title: "Инженерия данных на Python (Сертификат IHK)",
            details: "- Программа с сертификатом IHK<br>- Сбор и интеграция данных: ETL/ELT, API, Web Scraping<br>- Облачные платформы данных: AWS Glue, BigQuery, dbt Cloud<br>- Потоки данных: Apache Airflow, Kafka, Spark Streaming<br>- Платформы данных: Delta Lake, Apache Iceberg, Lakehouse<br>- ML Engineering: MLflow, scikit-learn, Feature Store<br>- Качество данных: Great Expectations, Data Lineage, Observability"
        },

        toggle: "Показать детали",
        toggleHide: "Скрыть детали"
    },

    skills: {
        title: "Технические навыки",
        languages: "Языки программирования",
        frameworks: "Фреймворки",
        tools: "Инструменты и платформы",
        ai: "ИИ и машинное обучение",
        "data-engineering": "Инженерия данных"
    },

    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "Интеграционные тесты",
        mockito: "Mockito",
        react: "React",
        rest_api: "REST API",
        ai: "ИИ",
        nlp: "Обработка естественного языка",
        django: "Django",
        role_auth: "Ролевая авторизация",
        pdf_export: "Экспорт PDF",
        ui_validation: "Валидация интерфейса",
        tensorflow: "TensorFlow",
        computer_vision: "Компьютерное зрение",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        mysql: "MySQL",
        canvas: "Canvas",
        frontend: "Фронтенд",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        database: "База данных",
        ml: "Машинное обучение",
        cv: "Компьютерное зрение",
        "python-ai": "Python AI библиотеки",
        machine_learning: "Машинное обучение",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",

        avro: "Avro",
        schema_registry: "Реестр схем",
        docker_compose: "Docker Compose",
        rich_ui: "Rich UI",
        stateful_processing: "Обработка с состоянием",
        real_time_streaming: "Потоковая обработка в реальном времени",
        pytest: "Pytest",

        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        etl: "ETL",
        data_pipeline: "Пайплайн данных"
    },
    title: {
        "java-backend": "JAVA РАЗРАБОТЧИК",
        "full-stack": "FULL-STACK РАЗРАБОТЧИК",
        ai: "ИИ & ML",
        "data-engineering": "ИНЖЕНЕРИЯ ДАННЫХ"
    },

    services: {
        subtitle: "Профессиональные услуги разработки, адаптированные под ваши бизнес-потребности",
        note: "<strong>Примечание:</strong> Все цены являются ориентировочными. Окончательная стоимость зависит от объема проекта и требований. Свяжитесь со мной для персонализированного предложения.",
        cta: "Начать",

        backend: {
            title: "Бэкенд-разработка",
            price: "€2 500+",
            features: [
                "Разработка REST API на Spring Boot",
                "Проектирование и оптимизация баз данных",
                "Реализация аутентификации и безопасности",
                "Микросервисная архитектура",
                "Документация и тестирование API",
                "Развертывание в облаке"
            ]
        },

        fullstack: {
            title: "Full-Stack разработка",
            price: "€4 000+",
            features: [
                "Полная разработка веб-приложений",
                "Spring Boot бэкенд + React фронтенд",
                "Адаптивный UI/UX дизайн",
                "Интеграция с базой данных",
                "Система аутентификации пользователей",
                "Административная панель"
            ]
        },

        api: {
            title: "Разработка API",
            price: "€1 800+",
            features: [
                "Кастомная разработка REST API",
                "Интеграция с базой данных (PostgreSQL/MySQL)",
                "JWT-аутентификация",
                "Документация API (Swagger/OpenAPI)",
                "Оптимизация производительности",
                "Готово к развертыванию"
            ]
        },

        website: {
            title: "Пакет бизнес-сайта",
            price: "€1 500–€3 000",
            features: [
                "Профессиональный сайт-портфолио",
                "Контактная форма с email-уведомлениями",
                "Мобильный адаптивный дизайн",
                "Базовая SEO-оптимизация",
                "Система управления контентом",
                "Интеграция с социальными сетями"
            ]
        },

        ai: {
            title: "Интеграция ИИ",
            price: "€3 500+",
            features: [
                "API для обработки и суммаризации текста",
                "Анализ изображений с TensorFlow",
                "Интеграция чат-ботов",
                "Развертывание ML-моделей",
                "Дашборды визуализации данных",
                "Кастомные ИИ-решения"
            ]
        },
        "data-engineering": {
            title: "Инженерия данных",
            price: "€4 500+",
            features: [
                "Разработка ETL/ELT пайплайнов на Python",
                "Оркестрация workflow (Apache Spark & Airflow)",
                "Облачные платформы данных (AWS Glue, BigQuery)",
                "Отслеживание экспериментов и управление моделями с MLflow",
                "Контроль качества данных с Great Expectations",
                "Архитектура Lakehouse (Delta Lake, Iceberg)"
            ]
        },

        maintenance: {
            title: "Обслуживание и поддержка",
            price: "€500/месяц",
            features: [
                "Регулярные обновления ПО",
                "Исправление ошибок и устранение неполадок",
                "Мониторинг производительности",
                "Безопасность и патчи",
                "Обслуживание базы данных",
                "Круглосуточная поддержка"
            ]
        }
    },
       project: {
            impact: "Влияние:",
            missing: {
                title: "Система оповещения о пропавших лицах FullStack",
                description: "Полицейский инструмент, разработанный с использованием Spring Boot, SwiftUI и Jetpack Compose, с push-уведомлениями Firebase, отслеживанием геолокации и админ-панелью.",
                duration: "6 месяцев",
                impact: "Улучшена общественная безопасность благодаря быстрым оповещениям о пропавших лицах, сокращено время реагирования полиции на 40% и улучшено вовлечение сообщества в инициативы безопасности."
            },
            banking: {
                title: "Банковская система FullStack",
                description: "Полнофункциональное банковское приложение с отслеживанием email/IP, поддержкой мультивалютности, обработкой транзакций и комплексным тестированием с Mockito.",
                duration: "6 месяцев",
                impact: "Оптимизированы финансовые операции с безопасными мультивалютными транзакциями, снижены мошеннические действия на 60% благодаря продвинутому IP-отслеживанию и улучшена удовлетворенность клиентов за счет обработки транзакций в реальном времени."
            },
            ai_text: {
                title: "ИИ суммаризатор текста FullStack",
                description: "Многоязычное приложение для суммаризации текста, работающее на Spring Boot REST API с продвинутыми возможностями обработки естественного языка.",
                duration: "2 месяца",
                impact: "Увеличена эффективность потребления контента на 70%, поддержка более 15 языков для глобальной доступности и сокращено время чтения исследовательских и образовательных материалов за счет автоматической суммаризации."
            },
            student: {
                title: "Студенческий портал FullStack",
                description: "Комплексная образовательная платформа с ролевым контролем доступа, системой оценок, экспортом PDF и онлайн-тестированием.",
                duration: "4 месяца",
                impact: "Улучшены образовательные результаты для более чем 500 студентов, снижена административная нагрузка на 45% за счет автоматизированного оценивания и отчетности и улучшена коммуникация между родителями и преподавателями благодаря отслеживанию прогресса в реальном времени."
            },
            face_analysis: {
                title: "ИИ анализ лиц",
                description: "Система классификации изображений, построенная на Django и TensorFlow, с автоматической обработкой и кастомным графическим интерфейсом.",
                duration: "4 месяца",
                impact: "Достигнута точность 95% в задачах распознавания лиц, внедрены автоматизированные системы безопасности и аутентификации, а также получены ценные инсайты для психологического и поведенческого анализа через распознавание выражений лица."
            },
            medical_diagnosis: {
                title: "Медицинская диагностическая система с ИИ",
                description: "Десктопное приложение на основе машинного обучения, разработанное с использованием .NET и ML.NET, которое предсказывает возможные заболевания на основе симптомов, введенных пользователем. Включает ввод симптомов на естественном языке, прогнозирование с оценкой уверенности и удобный интерфейс на базе WPF.",
                duration: "2 месяца",
                impact: "Помощь в предварительной диагностике для более чем 1000 пользователей с точностью 88%, снижение ненужных визитов в больницу на 35% благодаря надежной оценке симптомов и расширение возможностей пользователей через доступ к медицинской информации для принятия лучших решений."
            },
            dagster_etl: {
                title: "Проект ETL на Dagster",
                description: "ETL-пайплайн, построенный с использованием Dagster, Docker и PostgreSQL, демонстрирующий современные практики data engineering, включая оркестрацию на основе ассетов, валидацию качества данных и автоматическое планирование.",
                duration: "3 месяца",
                impact: "Развернут production-ready ETL-пайплайн с оркестрацией Dagster, контейнеризацией через Docker для стабильных окружений и интеграцией PostgreSQL для надежного хранения данных. Включает автоматическую валидацию данных, отслеживание зависимостей (data lineage) и планируемое выполнение задач для повторяемых процессов обработки данных."
            },
            fraud_detection: {
                title: "Система обнаружения мошенничества (Kafka)",
                description: "Система обнаружения мошенничества в реальном времени на базе Apache Kafka с поддержкой двух форматов сообщений (Avro + JSON), потоковой обработки с сохранением состояния и продвинутым терминальным интерфейсом мониторинга.",
                duration: "3 месяца",
                impact: "Обнаружение мошенничества с задержкой менее одной секунды благодаря 5-уровневому движку правил, снижение ложных срабатываний за счёт динамического профилирования пользователей и обеспечение полной соответствия требованиям аудита благодаря автоматическому логированию в формате JSONL с ежедневной ротацией."
            },
            view: "Посмотреть проект"
        },
        contact: {
            info: "Контактная информация",
            location: "Берлин, Германия",
            video: "Видео обо мне",
            phone: "+49 163 9769764"
        },
        form: {
            name: "Ваше имя",
            email: "Ваш email",
            subject: "Тема",
            message: "Ваше сообщение",
            submit: "Отправить сообщение"
        },
        footer: {
            copyright: "© 2026 Махмуд Наджмех. Все права защищены."
        },
        thank_you: {
            title: "Спасибо",
            heading: "Спасибо!",
            message: "Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.",
            back: "Вернуться на главную"
        },
        validation: {
            validEmail: "Действительный email адрес",
            invalidEmail: "Пожалуйста, введите действительный email адрес",
            disposableEmail: "Пожалуйста, используйте постоянный email адрес",
            domainNotExist: "Домен email не существует",
            emailTooLong: "Email адрес слишком длинный",
             useMajorProvider: "Пожалуйста, используйте крупного поставщика электронной почты, такого как Gmail, Outlook или Yahoo"
        },
        // weather: {
        //     loading: "Загрузка погоды...",
        //     unavailable: "Погода недоступна",
        //     unknown: "Неизвестно",
        //     unknown_location: "Неизвестное местоположение",
        //     demo: "Живая Демонстрация",
        //     fallback: "Показываю погоду в Берлине"
        // }
    },
    ar: {
    title: "محمود نجمة | هندسة البيانات & مطور فول ستاك",
    name: {
        first: "محمود",
        last: "نجمة"
    },
    languages: {
        en: "الإنجليزية",
        de: "الألمانية",
        pl: "البولندية",
        fr: "الفرنسية",
        tr: "التركية",
        ar: "العربية",
        ru: "الروسية",
        he: "العبرية"
    },
    explore: "استكشف",
    section: {
        about: "عني",
        services: "الخدمات والأسعار",
        projects: "المشاريع المميزة",
        contact: "تواصل معي"
    },
    about: {
        description: "مطور برمجيات ذو خبرة قوية في تطوير الـ backend و full-stack باستخدام Java و Spring Boot و Python و Django و C# .NET. يركز على بناء تطبيقات قابلة للتوسع وأنظمة قائمة على البيانات باستخدام مبادئ هندسة البرمجيات القوية والتصميم الموجه للكائنات. يعمل حاليًا على توسيع خبرته في هندسة البيانات وأنظمة التعلم الآلي، من خلال التعامل مع خطوط ETL/ELT وواجهات API وSQL وسير العمل الآلي للبيانات.",
        education: "التعليم"
    },
    education: {
        java: {
            title: "مبرمج جافا",
            details: "- أساسيات البرمجة، منهجيات Agile<br>- Java: البرمجة الكائنية OOP، التدفقات، التزامن، Maven، Gradle، الاختبارات<br>- قواعد البيانات: JDBC، SQL احترافي<br>- إطارات العمل: Spring Boot، Hibernate، Spring Security<br>- واجهات برمجة التطبيقات REST APIs والسحابة: AWS، GCP"
        },
        it_specialist: {
            title: "اخصائي تكنولوجيا المعلومات في مجال تطوير التطبيقات",
            details: "- البرمجة الكائنية OOP باستخدام Java SE، C# (.NET)، Python، JavaScript، PHP<br>- تطوير الويب وقواعد البيانات، أنظمة Linux<br>- إدارة مشاريع تقنية المعلومات، العمليات التجارية<br>- الرياضيات وMS Office لعمليات تقنية المعلومات<br>- الإنجليزية التقنية، مهارات التواصل"
        },
        "data-engineering": {
            title: "هندسة البيانات باستخدام Python (شهادة IHK)",
            details: "- برنامج معتمد بشهادة IHK<br>- جمع البيانات ودمجها: ETL/ELT، API، Web Scraping<br>- منصات البيانات السحابية: AWS Glue، BigQuery، dbt Cloud<br>- تدفقات البيانات: Apache Airflow، Kafka، Spark Streaming<br>- منصات البيانات: Delta Lake، Apache Iceberg، Lakehouse<br>- هندسة ML: <span dir=\"ltr\">MLflow, scikit-learn, Feature Stores</span><br>- جودة البيانات: Great Expectations، Data Lineage، Observability"
        },
        toggle: "إظهار التفاصيل",
        toggleHide: "إخفاء التفاصيل"
    },
    skills: {
        title: "المهارات التقنية",
        languages: "لغات البرمجة",
        frameworks: "إطارات العمل",
        tools: "الأدوات والمنصات",
        ai: "الذكاء الاصطناعي والتعلم الآلي",
        "data-engineering": "هندسة البيانات"
    },
    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "اختبارات التكامل",
        mockito: "Mockito",
        react: "React",
        rest_api: "REST API",
        ai: "الذكاء الاصطناعي",
        nlp: "معالجة اللغة الطبيعية",
        django: "Django",
        role_auth: "التفويض القائم على الأدوار",
        pdf_export: "تصدير PDF",
        ui_validation: "التحقق من واجهة المستخدم",
        tensorflow: "TensorFlow",
        computer_vision: "الرؤية الحاسوبية",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        mysql: "MySQL",
        canvas: "Canvas",
        frontend: "الواجهة الأمامية",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        database: "قاعدة البيانات",
        ml: "التعلم الآلي",
        cv: "الرؤية الحاسوبية",
        "python-ai": "مكتبات Python للذكاء الاصطناعي",
        machine_learning: "التعلم الآلي",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        "scikit-learn": "scikit-learn",
        "feature-store": "Feature Store",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",
        avro: "Avro",
        schema_registry: "سجل المخططات",
        docker_compose: "Docker Compose",
        rich_ui: "واجهة غنية",
        stateful_processing: "معالجة بحالة",
        real_time_streaming: "بث في الوقت الحقيقي",
        pytest: "Pytest",
        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        etl: "ETL",
        data_pipeline: "خط أنابيب البيانات"
    },
    title: {
        "java-backend": "مبرمج جافا",
        "full-stack": "مهندس برمجيات فول ستاك",
        ai: "مطور الذكاء الاصطناعي والتعلم الآلي",
        "data-engineering": "هندسة البيانات"
    },
    services: {
        subtitle: "خدمات تطوير احترافية مصممة خصيصًا لتلبية احتياجات عملك",
        note: "<strong>ملاحظة:</strong> جميع الأسعار تقديرية. تعتمد التسعيرة النهائية على نطاق المشروع والمتطلبات. تواصل معي للحصول على عرض سعر مخصص يتناسب مع احتياجاتك الخاصة.",
        cta: "ابدأ الآن",
        backend: {
            title: "تطوير الواجهة الخلفية",
            price: "€2,500+",
            features: [
                "تطوير REST API باستخدام Spring Boot",
                "تصميم قواعد البيانات وتحسينها",
                "تنفيذ التوثيق والأمان",
                "هيكلية الخدمات المصغرة",
                "توثيق واختبار واجهة برمجة التطبيقات",
                "النشر على منصات السحابة"
            ]
        },
        fullstack: {
            title: "تطوير كامل فول ستاك",
            price: "€4,000+",
            features: [
                "تطوير تطبيقات ويب كاملة",
                "واجهة خلفية Spring Boot + واجهة أمامية React",
                "تصميم واجهة مستخدم/تجربة مستخدم متجاوب",
                "تكامل قواعد البيانات",
                "نظام توثيق المستخدمين",
                "لوحة تحكم إدارية"
            ]
        },
        api: {
            title: "تطوير واجهة برمجة التطبيقات",
            price: "€1,800+",
            features: [
                "تطوير REST API مخصصة",
                "تكامل قواعد البيانات (PostgreSQL/MySQL)",
                "توثيق JWT",
                "توثيق API باستخدام Swagger/OpenAPI",
                "تحسين الأداء",
                "جاهز للنشر"
            ]
        },
        website: {
            title: "حزمة موقع ويب تجاري",
            price: "€1,500-€3,000",
            features: [
                "موقع ويب احترافي للمحفظة",
                "نموذج اتصال مع إشعارات البريد الإلكتروني",
                "تصميم متجاوب للأجهزة المحمولة",
                "تحسين أساسي لمحركات البحث",
                "نظام إدارة المحتوى",
                "تكامل الوسائط الاجتماعية"
            ]
        },
        ai: {
            title: "تكامل الذكاء الاصطناعي",
            price: "€3,500+",
            features: [
                "API لمعالجة وتلخيص النصوص",
                "تحليل الصور باستخدام TensorFlow",
                "تكامل روبوتات الدردشة",
                "نشر نماذج التعلم الآلي",
                "لوحات تصور البيانات",
                "حلول ذكاء اصطناعي مخصصة"
            ]
        },
        "data-engineering": {
            title: "هندسة البيانات",
            price: "€4,500+",
            features: [
                "تطوير خطوط بيانات ETL/ELT باستخدام Python",
                "تنسيق تدفقات العمل (Apache Spark & Airflow)",
                "منصات البيانات السحابية (AWS Glue، BigQuery)",
                "متابعة التجارب وإدارة النماذج باستخدام MLflow",
                "ضمان جودة البيانات باستخدام Great Expectations",
                "هندسة Lakehouse (Delta Lake, Iceberg)"
            ]
        },
        maintenance: {
            title: "الصيانة والدعم",
            price: "€500/شهر",
            features: [
                "تحديثات البرمجيات المنتظمة",
                "إصلاح الأخطاء واستكشاف المشكلات",
                "مراقبة الأداء",
                "تحديثات الأمان",
                "صيانة قواعد البيانات",
                "دعم طارئ على مدار الساعة"
            ]
        }
    },
        project: {
            impact: "التأثير:",
            missing: {
                title: "نظام تنبيه الأشخاص المفقودين فول ستاك",
                description: "أداة شرطة تم تطويرها باستخدام Spring Boot، SwiftUI، وJetpack Compose، مع إشعارات Firebase، تتبع الموقع الجغرافي، ولوحة تحكم إدارية.",
                duration: "6 أشهر",
                impact: "تحسين السلامة العامة من خلال تنبيهات المفقودين السريعة، تقليل وقت استجابة الشرطة بنسبة 40٪، وتحسين مشاركة المجتمع في مبادرات السلامة."
            },
            banking: {
                title: "نظام مصرفي فول ستاك",
                description: "تطبيق مصرفي متكامل مع تتبع البريد الإلكتروني/عنوان IP، دعم العملات المتعددة، معالجة المعاملات، واختبارات شاملة باستخدام Mockito.",
                duration: "6 أشهر",
                impact: "تبسيط العمليات المالية من خلال معاملات متعددة العملات وآمنة، تقليل الأنشطة الاحتيالية بنسبة 60٪ بفضل تتبع IP المتقدم، وتحسين رضا العملاء عبر معالجة المعاملات في الوقت الفعلي."
            },
            ai_text: {
                title: "ملخص نصوص بالذكاء الاصطناعي فول ستاك",
                description: "تطبيق متعدد اللغات لتلخيص النصوص، مدعوم بواجهة REST باستخدام Spring Boot مع قدرات متقدمة في معالجة اللغة الطبيعية.",
                duration: "شهرين",
                impact: "زيادة كفاءة استهلاك المحتوى بنسبة 70٪، دعم أكثر من 15 لغة للوصول العالمي، وتقليل وقت قراءة المواد البحثية والتعليمية عبر الأتمتة في التلخيص."
            },
            student: {
                title: "بوابة طلابية فول ستاك",
                description: "منصة تعليمية متكاملة تتضمن التحكم في الوصول القائم على الأدوار، نظام الدرجات، تصدير PDF، واختبارات عبر الإنترنت.",
                duration: "4 أشهر",
                impact: "تحسين النتائج التعليمية لأكثر من 500 طالب، تقليل العبء الإداري بنسبة 45٪ عبر التقييم والتقارير الآلية، وتعزيز التواصل بين أولياء الأمور والمعلمين من خلال تتبع التقدم في الوقت الفعلي."
            },
            face_analysis: {
                title: "تحليل الوجه بالذكاء الاصطناعي",
                description: "نظام تصنيف صور تم تطويره باستخدام Django وTensorFlow، مع معالجة تلقائية وواجهة رسومية مخصصة.",
                duration: "4 أشهر",
                impact: "تحقيق دقة 95٪ في التعرف على الوجوه، تمكين أنظمة الأمان والمصادقة الآلية، وتقديم رؤى قيمة للتحليل النفسي والسلوكي عبر تحليل تعابير الوجه."
            },
            medical_diagnosis: {
                title: "نظام التشخيص الطبي بالذكاء الاصطناعي",
                description: "تطبيق سطح مكتب يعتمد على التعلم الآلي، تم تطويره باستخدام .NET وML.NET، للتنبؤ بالأمراض المحتملة بناءً على الأعراض التي يُدخلها المستخدم. يتضمن إدخال الأعراض بلغة طبيعية، تنبؤات مع درجة ثقة، وواجهة سهلة الاستخدام مبنية على WPF.",
                duration: "شهرين",
                impact: "دعم التشخيص الأولي لأكثر من 1000 مستخدم بدقة 88٪، تقليل الزيارات غير الضرورية للمستشفى بنسبة 35٪ عبر تقييم موثوق للأعراض، وتمكين الأفراد من الوصول إلى معلومات صحية لاتخاذ قرارات أفضل."
            },
            dagster_etl: {
                title: "مشروع Dagster ETL",
                description: "خط أنابيب ETL تم بناؤه باستخدام Dagster وDocker وPostgreSQL، يعرض ممارسات حديثة في هندسة البيانات بما في ذلك التنسيق القائم على الأصول، التحقق من جودة البيانات، والجدولة التلقائية.",
                duration: "3 أشهر",
                impact: "تنفيذ خط ETL جاهز للإنتاج باستخدام Dagster للتنسيق، وDocker لبيئات نشر متسقة، وPostgreSQL لتخزين بيانات موثوق. يتضمن التحقق التلقائي من البيانات، تتبع تبعيات البيانات (data lineage)، وتنفيذ مهام مجدولة لعمليات بيانات قابلة للتكرار."
            },
            fraud_detection: {
                title: "نظام كشف الاحتيال (Kafka)",
                description: "نظام كشف احتيال يعمل في الوقت الحقيقي مبني على Apache Kafka، يدعم تنسيقي رسائل (Avro + JSON)، ومعالجة تدفقات بحالة (Stateful Processing)، وواجهة مراقبة متقدمة عبر الطرفية.",
                duration: "3 أشهر",
                impact: "تحقيق كشف احتيال بزمن استجابة أقل من ثانية باستخدام محرك قواعد مكوّن من 5 طبقات، تقليل الإنذارات الكاذبة عبر تحليل ديناميكي لملفات المستخدمين، وضمان التوافق الكامل مع متطلبات التدقيق من خلال تسجيل JSONL آلي مع تدوير يومي."
            },
            view: "عرض المشروع"
        },
        contact: {
            info: "معلومات الاتصال",
            location: "برلين، ألمانيا",
            video: "فيديو عني",
            phone: "+49 163 9769764"
        },
        form: {
            name: "اسمك",
            email: "بريدك الإلكتروني",
            subject: "الموضوع",
            message: "رسالتك",
            submit: "إرسال الرسالة"
        },
       footer: {
            copyright: "جميع الحقوق محفوظة محمود نجمة © 2026"
        },
        thank_you: {
            title: "شكرًا",
            heading: "شكرًا لك!",
            message: "تم إرسال رسالتك بنجاح. سأتواصل معك قريبًا.",
            back: "العودة إلى الصفحة الرئيسية"
        },
        validation: {
            validEmail: "عنوان بريد إلكتروني صالح",
            invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح",
            disposableEmail: "يرجى استخدام عنوان بريد إلكتروني دائم",
            domainNotExist: "نطاق البريد الإلكتروني غير موجود",
            emailTooLong: "عنوان البريد الإلكتروني طويل جدًا",
            useMajorProvider: "يرجى استخدام مزود بريد إلكتروني رئيسي مثل Gmail أو Outlook أو Yahoo"
        },
        // weather: {
        //     loading: "جاري تحميل الطقس...",
        //     unavailable: "الطقس غير متاح",
        //     unknown: "غير معروف",
        //     unknown_location: "موقع غير معروف",
        //     demo: "عرض حي",
        //     fallback: "عرض طقس برلين"
        // }
    },
    he: {
    title: "מחמוד נג'מה | הנדסת נתונים & מפתח Full-Stack",
    name: {
        first: "מחמוד",
        last: "נג'מה"
    },
    languages: {
        en: "אנגלית",
        de: "גרמנית",
        pl: "פולנית",
        fr: "צרפתית",
        tr: "טורקית",
        ar: "ערבית",
        ru: "רוסית",
        he: "עברית"
    },
    explore: "גלה",
    section: {
        about: "אודות",
        services: "שירותים ומחירים",
        projects: "פרויקטים נבחרים",
        contact: "צור קשר"
    },
    about: {
        description: "מפתח תוכנה עם ניסיון חזק ב-backend ו-full-stack באמצעות Java, Spring Boot, Python, Django ו-C# .NET. מתמקד בבניית אפליקציות ניתנות להרחבה ומערכות מונחות נתונים תוך שימוש בעקרונות עיצוב מונחה עצמים והנדסת תוכנה מוצקה. כעת מרחיב את המומחיות שלו בהנדסת נתונים ומערכות ML, בעבודה עם צינורות ETL/ELT, APIs, SQL וזרימות עבודה אוטומטיות של נתונים.",
        education: "השכלה"
    },
    education: {
        java: {
            title: "מפתח Java",
            details: "- יסודות תכנות, מתודולוגיות Agile<br>- Java: OOP, Streams, Concurrency, Maven, Gradle, Testing<br>- מסדי נתונים: JDBC, SQL מתקדם<br>- Frameworks: Spring Boot, Hibernate, Spring Security<br>- REST APIs ו-Cloud: AWS, GCP"
        },
        it_specialist: {
            title: "מומחה IT לפיתוח אפליקציות",
            details: "- OOP עם Java SE, C# (.NET), Python, JavaScript, PHP<br>- פיתוח web ומסדי נתונים, מערכות Linux<br>- ניהול פרויקטי IT, תהליכים עסקיים<br>- מתמטיקה ו-MS Office לתהליכי IT<br>- אנגלית טכנית, כישורי תקשורת"
        },
        "data-engineering": {
            title: "Data Engineering עם Python (IHK מוסמך)",
            details: "- תוכנית מוסמכת עם IHK<br>- איסוף ואינטגרציית נתונים: ETL/ELT, API, Web Scraping<br>- פלטפורמות נתונים בענן: AWS Glue, BigQuery, dbt Cloud<br>- זרימות נתונים: Apache Airflow, Kafka, Spark Streaming<br>- פלטפורמות Data Lakehouse: Delta Lake, Apache Iceberg<br>- ML Engineering: MLflow, scikit-learn, Feature Store<br>- איכות נתונים: Great Expectations, Data Lineage, Observability"
        },
        toggle: "הצג פרטים",
        toggleHide: "הסתר פרטים"
    },
    skills: {
        title: "כישורים טכניים",
        languages: "שפות תכנות",
        frameworks: "Frameworks",
        tools: "כלים ופלטפורמות",
        ai: "בינה מלאכותית ולמידת מכונה",
        "data-engineering": "Data Engineering"
    },
    tech: {
        java: "Java",
        python: "Python",
        csharp: "C#",
        javascript: "JavaScript",
        sql: "SQL",
        spring: "Spring Boot",
        swiftui: "SwiftUI",
        jetpack: "Jetpack Compose",
        firebase: "Firebase",
        integration: "בדיקות אינטגרציה",
        mockito: "Mockito",
        react: "React",
        rest_api: "REST API",
        ai: "בינה מלאכותית",
        nlp: "עיבוד שפה טבעית",
        django: "Django",
        role_auth: "אימות מבוסס תפקידים",
        pdf_export: "ייצוא PDF",
        ui_validation: "אימות ממשק משתמש",
        tensorflow: "TensorFlow",
        computer_vision: "ראייה ממוחשבת",
        html5: "HTML5",
        css: "CSS",
        postgresql: "PostgreSQL",
        mysql: "MySQL",
        canvas: "Canvas",
        frontend: "Frontend",
        dotnet: ".NET",
        aws: "AWS",
        gcp: "GCP",
        docker: "Docker",
        git: "Git",
        ml: "למידת מכונה",
        cv: "ראייה ממוחשבת",
        "python-ai": "ספריות Python ל-AI",
        machine_learning: "למידת מכונה",
        swift: "Swift",
        mlnet: "ML.NET",
        wpf: "WPF",
        hibernate: "Hibernate",
        websocket: "WebSocket",
        spark: "Apache Spark",
        airflow: "Apache Airflow",
        kafka: "Apache Kafka",
        mlflow: "MLflow",
        dbt: "dbt",
        "great-expectations": "Great Expectations",
        "delta-lake": "Delta Lake",

        avro: "Avro",
        schema_registry: "רישום סכמות",
        docker_compose: "Docker Compose",
        rich_ui: "ממשק עשיר",
        stateful_processing: "עיבוד מבוסס מצב",
        real_time_streaming: "סטרימינג בזמן אמת",
        pytest: "Pytest",

        dagster: "Dagster",
        pandas: "Pandas",
        sqlalchemy: "SQLAlchemy",
        etl: "ETL",
        data_pipeline: "צינור נתונים"
    },
    title: {
        "java-backend": "מפתח JAVA",
        "full-stack": "מפתח FULL-STACK",
        ai: "מפתח בינה מלאכותית ולמידת מכונה",
        "data-engineering": "Data Engineering"
    },
    services: {
        subtitle: "שירותי פיתוח מקצועיים המותאמים לצרכי העסק שלך",
        note: "<strong>הערה:</strong> כל המחירים הם הערכות. המחיר הסופי תלוי בהיקף הפרויקט ובדרישות. צור איתי קשר להצעת מחיר מותאמת אישית שתתאים לצרכים הספציפיים שלך.",
        cta: "התחל עכשיו",
        backend: {
            title: "פיתוח Backend",
            price: "€2,500+",
            features: [
                "פיתוח REST API עם Spring Boot",
                "עיצוב ואופטימיזציה של מסדי נתונים",
                "יישום אימות ואבטחה",
                "ארכיטקטורת microservices",
                "תיעוד ובדיקות API",
                "פריסה לפלטפורמות cloud"
            ]
        },
        fullstack: {
            title: "פיתוח Full-Stack",
            price: "€4,000+",
            features: [
                "פיתוח אפליקציות web מלאות",
                "Backend Spring Boot + frontend React",
                "עיצוב UI/UX רספונסיבי",
                "אינטגרציה עם מסד נתונים",
                "מערכת אימות משתמשים",
                "לוח בקרה מנהלים"
            ]
        },
        api: {
            title: "פיתוח API",
            price: "€1,800+",
            features: [
                "פיתוח REST API מותאם אישית",
                "אינטגרציה עם מסד נתונים (PostgreSQL/MySQL)",
                "אימות JWT",
                "תיעוד API עם Swagger/OpenAPI",
                "אופטימיזציית ביצועים",
                "מוכן לפריסה"
            ]
        },
        website: {
            title: "חבילת אתר עסקי",
            price: "€1,500-€3,000",
            features: [
                "אתר תיק עבודות מקצועי",
                "טופס יצירת קשר עם התראות אימייל",
                "עיצוב רספונסיבי לנייד",
                "אופטימיזציית SEO בסיסית",
                "מערכת ניהול תוכן",
                "אינטגרציה עם מדיה חברתית"
            ]
        },
        ai: {
            title: "אינטגרציית AI",
            price: "€3,500+",
            features: [
                "APIs לעיבוד/סיכום טקסט",
                "ניתוח תמונות עם TensorFlow",
                "אינטגרציית צ'אטבוטים",
                "פריסת מודלי למידת מכונה",
                "לוחות מחוונים להצגת נתונים",
                "פתרונות AI מותאמים אישית"
            ]
        },
        "data-engineering": {
            title: "Data Engineering",
            price: "€4,500+",
            features: [
                "פיתוח ETL/ELT pipelines עם Python",
                "ניהול זרימות עבודה (Apache Spark & Airflow)",
                "פלטפורמות נתונים בענן (AWS Glue, BigQuery)",
                "מעקב מודלים וניהול ניסויים עם MLflow",
                "בקרת איכות נתונים עם Great Expectations",
                "Data Lakehouse Engineering (Delta Lake, Iceberg)"
            ]
        },
        maintenance: {
            title: "תחזוקה ותמיכה",
            price: "€500/חודש",
            features: [
                "עדכוני תוכנה סדירים",
                "תיקון באגים ופתרון תקלות",
                "ניטור ביצועים",
                "עדכוני אבטחה",
                "תחזוקת מסד נתונים",
                "תמיכה דחופה 24/7"
            ]
        }
    },
        project: {
        impact: "השפעה:",
        missing: {
            title: "מערכת התראות לאנשים נעדרים Full Stack",
            description: "כלי משטרתי שפותח באמצעות Spring Boot, ‏SwiftUI ו-Jetpack Compose, כולל התראות Firebase, מעקב מיקום ופאנל ניהול.",
            duration: "6 חודשים",
            impact: "שיפור הבטיחות הציבורית באמצעות התראות מהירות על נעדרים, קיצור זמן התגובה של המשטרה ב-40% והגברת מעורבות הקהילה ביוזמות בטיחות."
        },
        banking: {
            title: "מערכת בנקאית Full Stack",
            description: "אפליקציה בנקאית מלאה עם מעקב אימייל/IP, תמיכה בריבוי מטבעות, עיבוד טרנזקציות ובדיקות מקיפות עם Mockito.",
            duration: "6 חודשים",
            impact: "ייעול פעולות פיננסיות עם טרנזקציות מרובות מטבעות מאובטחות, הפחתת הונאות ב-60% באמצעות מעקב IP מתקדם ושיפור שביעות רצון הלקוחות באמצעות עיבוד בזמן אמת."
        },
        ai_text: {
            title: "מסכם טקסטים ב-AI Full Stack",
            description: "אפליקציה רב-לשונית לסיכום טקסטים, מבוססת REST API של Spring Boot עם יכולות מתקדמות של עיבוד שפה טבעית.",
            duration: "חודשיים",
            impact: "הגדלת יעילות צריכת תוכן ב-70%, תמיכה ביותר מ-15 שפות ונגישות גלובלית, וקיצור זמן קריאה באמצעות סיכום אוטומטי."
        },
        student: {
            title: "פורטל סטודנטים Full Stack",
            description: "פלטפורמה חינוכית מלאה עם בקרת גישה מבוססת תפקידים, מערכת ציונים, ייצוא PDF ומבחנים מקוונים.",
            duration: "4 חודשים",
            impact: "שיפור הישגים לימודיים עבור מעל 500 סטודנטים, הפחתת עומס אדמיניסטרטיבי ב-45% ושיפור התקשורת בין הורים למורים עם מעקב בזמן אמת."
        },
        face_analysis: {
            title: "ניתוח פנים באמצעות AI",
            description: "מערכת סיווג תמונות שפותחה עם Django ו-TensorFlow, כולל עיבוד אוטומטי וממשק גרפי מותאם.",
            duration: "4 חודשים",
            impact: "דיוק של 95% בזיהוי פנים, אפשרות למערכות אבטחה ואימות אוטומטיות ומתן תובנות לניתוח פסיכולוגי והתנהגותי."
        },
        medical_diagnosis: {
            title: "מערכת אבחון רפואי מבוססת AI",
            description: "אפליקציית דסקטופ מבוססת למידת מכונה עם .NET ו-ML.NET, המנבאת מחלות על בסיס סימפטומים. כוללת קלט בשפה טבעית, חיזוי עם רמת ביטחון וממשק WPF ידידותי.",
            duration: "חודשיים",
            impact: "סיוע באבחון ראשוני עבור מעל 1000 משתמשים בדיוק של 88%, הפחתת ביקורים מיותרים בבתי חולים ב-35% והנגשת מידע רפואי לקבלת החלטות טובות יותר."
        },
        dagster_etl: {
            title: "פרויקט ETL עם Dagster",
            description: "Pipeline ETL שנבנה עם Dagster, ‏Docker ו-PostgreSQL, כולל אורקסטרציה מבוססת assets, בדיקות איכות נתונים ותזמון אוטומטי.",
            duration: "3 חודשים",
            impact: "הטמעת pipeline מוכן לייצור עם Dagster, שימוש ב-Docker לפריסה עקבית ושילוב PostgreSQL לאחסון אמין. כולל בדיקות נתונים אוטומטיות, מעקב תלות נתונים (data lineage) והרצות מתוזמנות."
        },
        fraud_detection: {
            title: "מערכת זיהוי הונאות (Kafka)",
            description: "מערכת זיהוי הונאות בזמן אמת המבוססת על Apache Kafka, עם תמיכה בהודעות בשני פורמטים (Avro + JSON), עיבוד זרמים מצבי (Stateful Processing) וממשק ניטור מתקדם מבוסס טרמינל.",
            duration: "3 חודשים",
            impact: "השגת זיהוי הונאות עם זמן השהיה של פחות משנייה באמצעות מנוע חוקים בן 5 שכבות, הפחתת התראות שווא באמצעות פרופילינג דינמי של משתמשים, והבטחת תאימות מלאה לדרישות ביקורת באמצעות לוגים אוטומטיים בפורמט JSONL עם רוטציה יומית."
        },
        view: "צפה בפרויקט"
    },

    contact: {
        info: "פרטי יצירת קשר",
        location: "ברלין, גרמניה",
        video: "סרטון עליי",
        phone: "+49 163 9769764"
    },

    form: {
        name: "השם שלך",
        email: "האימייל שלך",
        subject: "נושא",
        message: "ההודעה שלך",
        submit: "שלח הודעה"
    },

    footer: {
        copyright: "כל הזכויות שמורות מחמוד נג'מה © 2026"
    },

    thank_you: {
        title: "תודה",
        heading: "תודה לך!",
        message: "ההודעה נשלחה בהצלחה. אחזור אליך בקרוב.",
        back: "חזרה לדף הבית"
    },

    validation: {
        validEmail: "כתובת אימייל תקינה",
        invalidEmail: "אנא הזן כתובת אימייל נכונה",
        disposableEmail: "אנא השתמש באימייל קבוע",
        domainNotExist: "דומיין האימייל לא קיים",
        emailTooLong: "כתובת האימייל ארוכה מדי",
        useMajorProvider: "אנא השתמש ב-Gmail, Outlook או Yahoo"
    },
        // weather: {
        // loading: "טוען מזג אוויר...",
        // unavailable: "מזג אוויר לא זמין",
        // unknown: "לא ידוע",
        // unknown_location: "מיקום לא ידוע",
        // demo: "הדגמה חיה",
        // fallback: "מציג מזג אוויר בברלין"
        // }
    }
};

// Function to update content based on language
function updateContent(lang) {
    // Validate language
    if (!translations[lang]) {
        console.warn(`Invalid language: ${lang}. Defaulting to 'en'.`);
        lang = 'en';
    }

    // Clear contact form fields on language change
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.reset(); 
    }

    // Clear email validation message on language change
    const validationMessage = document.getElementById('email-validation');
    if (validationMessage) {
        validationMessage.textContent = '';
        validationMessage.className = 'validation-message';
    }
    
    // re-enable submit button
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
    }

    console.log(`Updating content to language: ${lang}`);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.title = translations[lang]?.title || "Mahmoud Najmeh | Full-Stack Developer";

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (key.startsWith('weather.')) {
            console.warn(`Skipping missing weather translation: ${key}`);
            return;
        }
        
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (!value || !value[k]) {
                console.warn(`Translation missing for key: ${key} in language: ${lang}`);
                value = null;
                break;
            }
            value = value[k];
        }
        if (value) element.innerHTML = value;
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (!value || !value[k]) break;
            value = value[k];
        }
        if (value) element.placeholder = value;
    });

    // Title attributes for tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const keys = key.split('.');
        let value = translations[lang];
        for (const k of keys) {
            if (!value || !value[k]) break;
            value = value[k];
        }
        if (value) element.title = value;
    });

    // Toggle buttons dynamically
    document.querySelectorAll('.toggle-details').forEach(button => {
        const details = button.nextElementSibling;
        const isHidden = details.style.display === 'none' || !details.style.display;
        button.textContent = isHidden ? translations[lang].education.toggle : 
            lang === 'ar' ? 'إخفاء التفاصيل' :
            lang === 'pl' ? 'Ukryj szczegóły' : 
            lang === 'fr' ? 'Masquer les détails' : 
            lang === 'tr' ? 'Detayları Gizle' : 
            lang === 'ru' ? 'Скрыть детали' : 
            lang === 'he' ? 'הסתר פרטים' :
            'Details ausblenden';
    });

    // Section indicators
    document.querySelectorAll('.section-indicator').forEach(indicator => {
        const sectionId = indicator.getAttribute('data-section');
        indicator.querySelector('span').textContent = translations[lang].section[sectionId] || sectionId;
    });

    // Language dropdown options with translated language names
    const languageSelect = document.getElementById('language-select');
    if (languageSelect && translations[lang]?.languages) {
        Array.from(languageSelect.options).forEach(option => {
            const langCode = option.value;
            if (translations[lang].languages[langCode]) {
                option.textContent = translations[lang].languages[langCode];
            }
        });
    }
}

// Function to map browser language to supported languages
function getSupportedLanguage(browserLang) {
    const langMap = {
        'en': 'en', 'en-US': 'en', 'en-GB': 'en',
        'de': 'de', 'de-DE': 'de', 'de-AT': 'de', 'de-CH': 'de', 'de-LI': 'de', 'de-LU': 'de', 'de-BE': 'de',
        'pl': 'pl', 'pl-PL': 'pl',
        'fr': 'fr', 'fr-FR': 'fr',
        'tr': 'tr', 'tr-TR': 'tr',
        'ar': 'ar', 'ar-SA': 'ar', 'ar-EG': 'ar',
        'ru': 'ru', 'ru-RU': 'ru',
        'he': 'he', 'he-IL': 'he'    
    };

    const primaryLang = browserLang.split('-')[0];
    const supportedLang = langMap[browserLang] || langMap[primaryLang] || 'en';
    console.log(`Browser language: ${browserLang}, mapped to: ${supportedLang}`);
    return supportedLang;
}

async function getCountryCode() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Local development - skipping geolocation');
        return null;
    }
    
    const services = [
        {
            url: 'https://ipapi.co/json/',
            parser: (data) => data.country_code
        },
        {
            url: 'https://ip-api.com/json/',
            parser: (data) => data.countryCode
        },
        {
            url: 'https://api.country.is/',
            parser: (data) => data.country
        }
    ];
    
    for (const service of services) {
        try {
            const response = await fetch(service.url);
            const data = await response.json();
            const countryCode = service.parser(data);
            if (countryCode) {
                console.log(`Geolocation API (${service.url}) returned country code: ${countryCode}`);
                return countryCode;
            }
        } catch (error) {
            console.warn(`Geolocation service ${service.url} failed:`, error);
            continue;
        }
    }
    
    console.error('All geolocation services failed');
    return null;
}

// Function to map country code to supported language (ALWAYS returns a language, default 'en')
function getLanguageFromCountry(countryCode) {
    const countryLangMap = {
        'DE': 'de', 'AT': 'de', 'CH': 'de', 'LI': 'de', 'LU': 'de', 'BE': 'de',
        'PL': 'pl',
        'FR': 'fr',
        'TR': 'tr',
        'RU': 'ru',
        'SA': 'ar', 'EG': 'ar', 'JO': 'ar', 'LB': 'ar', 'QA': 'ar',
        'AE': 'ar', 'BH': 'ar', 'KW': 'ar', 'OM': 'ar', 'YE': 'ar',
        'SY': 'ar', 'IQ': 'ar', 'PS': 'ar', 'MA': 'ar', 'DZ': 'ar',
        'TN': 'ar', 'LY': 'ar', 'SD': 'ar', 'SO': 'ar',
        'IL': 'he'
    };

    const lang = countryLangMap[countryCode] || 'en';
    console.log(`Country code: ${countryCode}, mapped to language: ${lang}`);
    return lang;
}

// Function to get country name from country code
function getCountryName(countryCode) {
    const countryNames = {
        'DE': 'Germany', 'AT': 'Austria', 'CH': 'Switzerland', 'LI': 'Liechtenstein', 'LU': 'Luxembourg', 'BE': 'Belgium',
        'PL': 'Poland',
        'FR': 'France',
        'TR': 'Turkey',
        'RU': 'Russia',
        'SA': 'Saudi Arabia', 'EG': 'Egypt', 'JO': 'Jordan', 'LB': 'Lebanon', 'QA': 'Qatar',
        'AE': 'UAE', 'BH': 'Bahrain', 'KW': 'Kuwait', 'OM': 'Oman', 'YE': 'Yemen',
        'SY': 'Syria', 'IQ': 'Iraq', 'PS': 'Palestine', 'MA': 'Morocco', 'DZ': 'Algeria',
        'TN': 'Tunisia', 'LY': 'Libya', 'SD': 'Sudan', 'SO': 'Somalia',
        'IL': 'Israel',
        'GB': 'United Kingdom', 'US': 'United States', 'CA': 'Canada', 'AU': 'Australia',
        'JP': 'Japan', 'CN': 'China', 'IN': 'India', 'BR': 'Brazil', 'MX': 'Mexico',
        'ES': 'Spain', 'IT': 'Italy', 'PT': 'Portugal', 'NL': 'Netherlands', 'SE': 'Sweden',
        'NO': 'Norway', 'DK': 'Denmark', 'FI': 'Finland', 'IE': 'Ireland', 'NZ': 'New Zealand'
    };
    return countryNames[countryCode] || countryCode;
}

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to show professional language suggestion popup
function showLanguageSuggestion(suggestedLang, currentLang, countryCode) {
    // Don't show if already showing
    if (document.getElementById('lang-suggestion-popup')) return;
    
    const langNames = {
        'en': 'English',
        'de': 'German', 
        'pl': 'Polish', 
        'fr': 'French', 
        'tr': 'Turkish', 
        'ru': 'Russian', 
        'ar': 'Arabic', 
        'he': 'Hebrew'
    };
    
    const countryName = getCountryName(countryCode);
    const suggestedLanguageName = langNames[suggestedLang] || 'English';
    const currentLanguageName = langNames[currentLang] || 'English';
    
    const popup = document.createElement('div');
    popup.id = 'lang-suggestion-popup';
    popup.innerHTML = `
        <div style="position: fixed; bottom: 20px; right: 20px; background: white; border-radius: 12px; 
                    box-shadow: 0 10px 40px rgba(0,0,0,0.2); padding: 20px; z-index: 10000; 
                    max-width: 350px; animation: slideIn 0.3s ease; font-family: system-ui, -apple-system, sans-serif;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <span style="font-size: 24px;">🌍</span>
                <h3 style="margin: 0; font-size: 18px; color: #1a202c;">Location Detected</h3>
            </div>
            <p style="margin: 0 0 16px 0; color: #4a5568; line-height: 1.5;">
                You're currently in ${countryName}. The local language is ${suggestedLanguageName}. 
                Would you like to switch to ${suggestedLanguageName}?
            </p>
            <div style="display: flex; gap: 12px; justify-content: flex-end;">
                <button id="lang-keep" style="padding: 8px 16px; background: #e2e8f0; border: none; 
                        border-radius: 6px; cursor: pointer; font-weight: 500; color: #1a202c;">
                    Keep ${currentLanguageName}
                </button>
                <button id="lang-switch" style="padding: 8px 16px; background: #4299e1; color: white; 
                        border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">
                    Switch to ${suggestedLanguageName}
                </button>
            </div>
        </div>
        <style>
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @media (max-width: 640px) {
                #lang-suggestion-popup > div {
                    left: 20px;
                    right: 20px;
                    bottom: 20px;
                    max-width: none;
                }
            }
        </style>
    `;
    
    document.body.appendChild(popup);
    
    // Keep current language and remember that user declined switch
    document.getElementById('lang-keep').onclick = async () => {
        localStorage.setItem('language_declined_' + suggestedLang, 'true');
        localStorage.setItem('last_detected_country', countryCode);
        popup.remove();
    };
    
    // Switch to detected language
    document.getElementById('lang-switch').onclick = async () => {
        localStorage.setItem('language', suggestedLang);
        localStorage.setItem('last_detected_country', countryCode);
        // Remove decline flags for this language
        localStorage.removeItem('language_declined_' + suggestedLang);
        
        // Update content
        updateContent(suggestedLang);
        
        // Update select dropdown
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) languageSelect.value = suggestedLang;
        
        // Update URL without reload
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lang', suggestedLang);
        window.history.replaceState({}, '', newUrl);
        
        popup.remove();
    };
}

// Smart language detection
async function getCurrentLanguage() {
    // First check URL parameter
    const urlLang = getUrlParameter('lang');
    if (urlLang && ['en', 'de', 'pl', 'fr', 'tr', 'ar', 'ru', 'he'].includes(urlLang)) {
        console.log(`Language from URL: ${urlLang}`);
        localStorage.setItem('language', urlLang);
        const countryCode = await getCountryCode();
        if (countryCode) localStorage.setItem('last_detected_country', countryCode);
        return urlLang;
    }
    
    // Get current location
    const countryCode = await getCountryCode();
    console.log(`📍 Current country code: ${countryCode}`);
    
    // Get detected language (ALWAYS returns a language, default 'en')
    let detectedLang = 'en';
    if (countryCode) {
        detectedLang = getLanguageFromCountry(countryCode);
        console.log(`🗣️ Country ${countryCode} → Language: ${detectedLang}`);
    } else {
        // If geolocation fails, fallback to browser language
        detectedLang = getSupportedLanguage(navigator.language || navigator.userLanguage);
        console.log(`🌐 Geolocation failed, using browser language: ${detectedLang}`);
    }
    
    // Get saved preference
    const storedLang = localStorage.getItem('language');
    const lastDetectedCountry = localStorage.getItem('last_detected_country');
    
    console.log(`💾 Saved preference: ${storedLang || 'none'}`);
    console.log(`📍 Last detected country: ${lastDetectedCountry || 'none'}`);
    
    // If no saved preference, use detected language
    if (!storedLang) {
        console.log(`✨ First visit - using detected language: ${detectedLang}`);
        localStorage.setItem('language', detectedLang);
        if (countryCode) localStorage.setItem('last_detected_country', countryCode);
        return detectedLang;
    }
    
    // Check if user previously declined this language
    const declinedKey = `language_declined_${detectedLang}`;
    const userDeclined = localStorage.getItem(declinedKey) === 'true';
    console.log(`🚫 User declined ${detectedLang}? ${userDeclined}`);
    
    // If location changed AND user hasn't declined this language AND languages differ
    if (countryCode && lastDetectedCountry && lastDetectedCountry !== countryCode && !userDeclined && storedLang !== detectedLang) {
        console.log(`🔄 LOCATION CHANGED: ${lastDetectedCountry} → ${countryCode}`);
        console.log(`🔄 LANGUAGE CHANGE: ${storedLang} → ${detectedLang}`);
        // Store the suggestion data globally to show after content loads
        window.pendingLanguageSuggestion = {
            suggestedLang: detectedLang,
            currentLang: storedLang,
            countryCode: countryCode
        };
        // Keep current language until user decides
        return storedLang; 
    }
    
    // If no location change or user declined, update stored country
    if (countryCode && lastDetectedCountry !== countryCode) {
        console.log(`📝 Updating stored country: ${lastDetectedCountry} → ${countryCode}`);
        localStorage.setItem('last_detected_country', countryCode);
    }
    
    // Use saved preference
    console.log(`✅ Using saved preference: ${storedLang}`);
    return storedLang;
}

// Function to update back to home links
function updateBackToHomeLinks(lang) {
    const backToHomeLinks = document.querySelectorAll('a[href="index.html"], a[href*="index.html"]');
    backToHomeLinks.forEach(link => {
        if (link.getAttribute('id') !== 'language-select') {
            link.href = `index.html?lang=${lang}`;
        }
    });
}

// Function to show language detection notification
async function showLanguageNotification() {
    const urlLang = getUrlParameter('lang');
    const storedLang = localStorage.getItem('language');
    const detectedLang = await getCurrentLanguage();
    
    const langNames = {
        'en': 'English',
        'de': 'German', 
        'pl': 'Polish', 
        'fr': 'French', 
        'tr': 'Turkish', 
        'ru': 'Russian', 
        'ar': 'Arabic', 
        'he': 'Hebrew'
    };
    
    // Show notification for ALL first-time visitors (including English)
    const isFirstVisit = !localStorage.getItem('has_interacted');
    if (!urlLang && !storedLang && isFirstVisit) {
        const notification = document.getElementById('language-notification');
        const notificationText = document.getElementById('lang-notification-text');
        
        const languageName = langNames[detectedLang] || 'English';
        notificationText.textContent = `🌐 Website language set to ${languageName}. You can change it anytime.`;
        notification.style.display = 'block';
        
        const closeBtn = document.getElementById('close-notification');
        if (closeBtn) {
            closeBtn.onclick = () => {
                notification.style.display = 'none';
                localStorage.setItem('has_interacted', 'true');
            };
        }
        
        setTimeout(() => {
            if (notification) notification.style.display = 'none';
        }, 5000);
    }
}

// Language switcher event listener with smart geolocation
document.addEventListener('DOMContentLoaded', async () => {
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) {
        console.error('Language select element not found');
        return;
    }

    // Mark that user has interacted with the page
    if (!localStorage.getItem('has_interacted')) {
        localStorage.setItem('has_interacted', 'true');
    }

    // Get current language with smart detection
    const selectedLang = await getCurrentLanguage();

    // Set the language select value and update content
    console.log(`🎯 Setting language to: ${selectedLang}`);
    languageSelect.value = selectedLang;
    updateContent(selectedLang);

    // Update back to home links
    updateBackToHomeLinks(selectedLang);
    
    // Show suggestion popup if location changed
    if (window.pendingLanguageSuggestion) {
        setTimeout(() => {
            showLanguageSuggestion(
                window.pendingLanguageSuggestion.suggestedLang,
                window.pendingLanguageSuggestion.currentLang,
                window.pendingLanguageSuggestion.countryCode
            );
            delete window.pendingLanguageSuggestion;
        }, 1000);
    } else {
        // Show simple notification for first-time visitors
        await showLanguageNotification();
    }

    // Handle manual language selection
    languageSelect.addEventListener('change', async (e) => {
        const lang = e.target.value;
        if (['en', 'de', 'pl', 'fr', 'tr', 'ar', 'ru', 'he'].includes(lang)) { 
            console.log(`🖱️ Manual language selection: ${lang}`);
            localStorage.setItem('language', lang);
            
            // Clear decline flags for other languages when user manually selects
            const languages = ['en', 'de', 'pl', 'fr', 'tr', 'ru', 'ar', 'he'];
            languages.forEach(l => {
                if (l !== lang) {
                    localStorage.removeItem(`language_declined_${l}`);
                }
            });
            
            const countryCode = await getCountryCode();
            if (countryCode) localStorage.setItem('last_detected_country', countryCode);
            
            updateContent(lang);
            
            // Update URL with language parameter without reloading
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('lang', lang);
            window.history.replaceState({}, '', newUrl);
            
            // Update all back to home links
            updateBackToHomeLinks(lang);
            
            // Hide any open notifications
            const notification = document.getElementById('language-notification');
            if (notification) notification.style.display = 'none';
            
            const popup = document.getElementById('lang-suggestion-popup');
            if (popup) popup.remove();
        } else {
            console.warn(`Invalid language selected: ${lang}`);
        }
    });
});