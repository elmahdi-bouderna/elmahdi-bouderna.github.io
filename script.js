// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Animated Text Rotation
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    // Initialize text rotation function
    function initTextRotation() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
    }

    // Initialize text rotation on page load
    initTextRotation();

    // Navigation Active State
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.floating-nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Translations
    const translations = {
        en: {
            // Name
            'full-name': 'EL MAHDI BOUDERNA',
            
            // Navigation
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-education': 'Education',
            'nav-projects': 'Projects',
            'nav-skills': 'Skills',
            'nav-contact': 'Contact',
            
            // Hero section
            'hero-description': 'Transforming ideas into digital reality',
            'cta-contact': 'Get in Touch',
            'cta-projects': 'View My Work',
            'scroll-text': 'Scroll',
            
            // About section
            'section-about': 'About Me',
            'about-description': "I'm a student pursuing a degree in Information Systems and Digital Transformation at the Faculty of Sciences and Technologies in Settat. I'm passionate about digital innovation, particularly Web 3.0 and blockchain technologies. Currently seeking an internship starting April 2025 to apply my skills and gain enriching professional experience.",
            'download-cv': 'Download CV',
            
            // Education section
            'section-education': 'Education',
            'education-lst-title': 'LST - Information Systems and Digital Transformation',
            'education-lst-date': '2024 - Present',
            'education-lst-school': 'University Hassan I, Faculty of Sciences and Technologies of Settat (FSTS)',
            'education-deust-title': 'Diploma of Scientific and Technical University Studies',
            'education-deust-date': '2021 - 2024',
            'education-deust-school': 'University Hassan I, Faculty of Sciences and Technologies of Settat (FSTS)',
            
            // Projects section
            'section-projects': 'Academic Projects',
            'project-ecommerce-title': 'E-commerce Website',
            'project-ecommerce-desc': 'Development of a platform with user management, order processing, and payment simulation.',
            'project-employee-title': 'Employee Management System',
            'project-employee-desc': 'Desktop application for tracking productivity and managing employees.',
            'project-iot-title': 'IoT RFID Attendance Management',
            'project-iot-desc': 'Comprehensive IoT-based attendance tracking system that uses RFID technology to automate and streamline classroom attendance recording.',
            
            // Skills section
            'section-skills': 'Skills & Expertise',
            'skills-languages': 'Programming Languages',
            'skills-frameworks': 'Frameworks & Libraries',
            'skills-tools': 'Tools & Environments',
            'skills-languages-human': 'Languages',
            'skills-soft': 'Soft Skills',
            
            // Stats
            'stat-years': 'Years Experience',
            'stat-projects': 'Projects',
            'stat-languages': 'Languages',
            
            // Language levels
            'lang-native': 'Native',
            'lang-intermediate': 'intermediate',
            'lang-arabic': 'Arabic',
            'lang-french': 'French',
            'lang-english': 'English',
            
            // Soft skills
            'soft-problem-solving': 'Problem Solving',
            'soft-teamwork': 'Teamwork',
            'soft-adaptability': 'Adaptability',
            'soft-learning': 'Fast Learning',
            'soft-analytical': 'Analytical Thinking',
            
            // Contact section
            'section-contact': 'Get In Touch',
            'contact-header': "Let's Connect",
            'contact-description': 'Feel free to reach out for collaboration opportunities or just to say hello!',
            'contact-email': 'Email',
            'contact-phone': 'Phone',
            'contact-linkedin': 'LinkedIn',
            'form-name': 'Name',
            'form-email': 'Email',
            'form-subject': 'Subject',
            'form-message': 'Message',
            'form-submit': 'Send Message',
            
            // Footer
            'footer-links': 'Quick Links',
            'footer-social': 'Social Media',
            'footer-copyright': '© 2025 El Mahdi Bouderna. All rights reserved.'
        },
        fr: {
            // Name
            'full-name': 'EL MAHDI BOUDERNA',
            
            // Navigation
            'nav-home': 'Accueil',
            'nav-about': 'À propos',
            'nav-education': 'Formation',
            'nav-projects': 'Projets',
            'nav-skills': 'Compétences',
            'nav-contact': 'Contact',
            
            // Hero section
            'hero-description': 'Transformer des idées en réalité numérique',
            'cta-contact': 'Me contacter',
            'cta-projects': 'Voir mes projets',
            'scroll-text': 'Défiler',
            
            // About section
            'section-about': 'À propos de moi',
            'about-description': "Je suis étudiant en Licence de Systèmes d'Information et Transformation Digitale à la Faculté des Sciences et Technologies de Settat. Je suis passionné par l'innovation digitale, en particulier par le Web 3.0 et les technologies blockchain. Je suis actuellement à la recherche d'un stage à partir d'avril 2025 pour mettre en pratique mes compétences et acquérir une expérience professionnelle enrichissante.",
            'download-cv': 'Télécharger CV',
            
            // Education section
            'section-education': 'Formation',
            'education-lst-title': "LST - Systèmes d'Information et Transformation Digitale",
            'education-lst-date': '2024 - Présent',
            'education-lst-school': 'Université Hassan I, Faculté des Sciences et Techniques de Settat (FSTS)',
            'education-deust-title': "Diplôme d'Études Universitaires Scientifiques et Techniques",
            'education-deust-date': '2021 - 2024',
            'education-deust-school': 'Université Hassan I, Faculté des Sciences et Techniques de Settat (FSTS)',
            
            // Projects section
            'section-projects': 'Projets Académiques',
            'project-ecommerce-title': 'Site Web E-commerce',
            'project-ecommerce-desc': "Développement d'une plateforme avec gestion des utilisateurs, commandes et paiements (simulation).",
            'project-employee-title': 'Application de Gestion des Employés',
            'project-employee-desc': 'Application desktop pour le suivi de la productivité et la gestion des employés.',
            'project-iot-title': 'Gestion de présence avec RFID et IoT',
            'project-iot-desc': 'Système complet de suivi de présence basé sur l’IoT, utilisant la technologie RFID pour automatiser et simplifier l’enregistrement des présences en classe.',

            // Skills section
            'section-skills': 'Compétences & Expertise',
            'skills-languages': 'Langages de Programmation',
            'skills-frameworks': 'Frameworks & Bibliothèques',
            'skills-tools': 'Outils & Environnements',
            'skills-languages-human': 'Langues',
            'skills-soft': 'Soft Skills',
            
            // Stats
            'stat-years': "Années d'expérience",
            'stat-projects': 'Projets',
            'stat-languages': 'Langues',
            
            // Language levels
            'lang-native': 'Maternelle',
            'lang-intermediate': 'intermédiaire',
            'lang-arabic': 'Arabe',
            'lang-french': 'Français',
            'lang-english': 'Anglais',
            
            // Soft skills
            'soft-problem-solving': 'Résolution de problèmes',
            'soft-teamwork': "Esprit d'équipe",
            'soft-adaptability': 'Adaptabilité',
            'soft-learning': 'Apprentissage rapide',
            'soft-analytical': 'Esprit analytique',
            
            // Contact section
            'section-contact': 'Me Contacter',
            'contact-header': 'Restons en Contact',
            'contact-description': "N'hésitez pas à me contacter pour des opportunités de collaboration ou simplement pour dire bonjour !",
            'contact-email': 'Email',
            'contact-phone': 'Téléphone',
            'contact-linkedin': 'LinkedIn',
            'form-name': 'Nom',
            'form-email': 'Email',
            'form-subject': 'Sujet',
            'form-message': 'Message',
            'form-submit': 'Envoyer',
            
            // Footer
            'footer-links': 'Liens Rapides',
            'footer-social': 'Réseaux Sociaux',
            'footer-copyright': '© 2025 El Mahdi Bouderna. Tous droits réservés.'
        },
        ar: {
            // Name
            'full-name': 'المهدي بودرنا',
            
            // Navigation
            'nav-home': 'الرئيسية',
            'nav-about': 'نبذة عني',
            'nav-education': 'التعليم',
            'nav-projects': 'المشاريع',
            'nav-skills': 'المهارات',
            'nav-contact': 'اتصل بي',
            
            // Hero section
            'hero-description': 'تحويل الأفكار إلى واقع رقمي',
            'cta-contact': 'تواصل معي',
            'cta-projects': 'عرض أعمالي',
            'scroll-text': 'اسحب للأسفل',
            
            // About section
            'section-about': 'نبذة عني',
            'about-description': "أنا طالب في تخصص نظم المعلومات والتحول الرقمي في كلية العلوم والتقنيات بسطات. أنا شغوف بالابتكار الرقمي، وخاصة تقنيات ويب 3.0 وبلوكتشين. أبحث حاليًا عن تدريب ابتداءً من أبريل 2025 لتطبيق مهاراتي واكتساب خبرة مهنية مثرية.",
            'download-cv': 'تحميل السيرة الذاتية',
            
            // Education section
            'section-education': 'التعليم',
            'education-lst-title': 'الإجازة - نظم المعلومات والتحول الرقمي',
            'education-lst-date': '2024 - الحالي',
            'education-lst-school': 'جامعة الحسن الأول، كلية العلوم والتقنيات بسطات',
            'education-deust-title': 'دبلوم الدراسات الجامعية العلمية والتقنية',
            'education-deust-date': '2021 - 2024',
            'education-deust-school': 'جامعة الحسن الأول، كلية العلوم والتقنيات بسطات',
            
            // Projects section
            'section-projects': 'المشاريع الأكاديمية',
            'project-ecommerce-title': 'موقع للتجارة الإلكترونية',
            'project-ecommerce-desc': 'تطوير منصة مع إدارة المستخدمين، ومعالجة الطلبات، ومحاكاة الدفع.',
            'project-employee-title': 'نظام إدارة الموظفين',
            'project-employee-desc': 'تطبيق سطح المكتب لتتبع الإنتاجية وإدارة الموظفين.',
            'project-iot-title': 'نظام إدارة الحضور باستخدام تقنية RFID وإنترنت الأشياء (IoT)',
            'project-iot-desc': 'نظام شامل لتتبع الحضور يعتمد على إنترنت الأشياء وتقنية RFID لأتمتة وتسهيل عملية تسجيل الحضور في الفصول الدراسية.',            
            // Skills section
            'section-skills': 'المهارات والخبرات',
            'skills-languages': 'لغات البرمجة',
            'skills-frameworks': 'أطر العمل والمكتبات',
            'skills-tools': 'الأدوات والبيئات',
            'skills-languages-human': 'اللغات',
            'skills-soft': 'المهارات الشخصية',
            
            // Stats
            'stat-years': 'سنوات الخبرة',
            'stat-projects': 'المشاريع',
            'stat-languages': 'اللغات',
            
            // Language levels
            'lang-native': 'اللغة الأم',
            'lang-intermediate': 'متوسط',
            'lang-arabic': 'العربية',
            'lang-french': 'الفرنسية',
            'lang-english': 'الإنجليزية',
            
            // Soft skills
            'soft-problem-solving': 'حل المشكلات',
            'soft-teamwork': 'العمل الجماعي',
            'soft-adaptability': 'التكيف',
            'soft-learning': 'سرعة التعلم',
            'soft-analytical': 'التفكير التحليلي',
            
            // Contact section
            'section-contact': 'اتصل بي',
            'contact-header': 'لنتواصل',
            'contact-description': 'لا تتردد في التواصل معي لفرص التعاون أو لمجرد إلقاء التحية!',
            'contact-email': 'البريد الإلكتروني',
            'contact-phone': 'الهاتف',
            'contact-linkedin': 'لينكد إن',
            'form-name': 'الاسم',
            'form-email': 'البريد الإلكتروني',
            'form-subject': 'الموضوع',
            'form-message': 'الرسالة',
            'form-submit': 'إرسال الرسالة',
            
            // Footer
            'footer-links': 'روابط سريعة',
            'footer-social': 'وسائل التواصل الاجتماعي',
            'footer-copyright': '© 2025 المهدي بودرنة. جميع الحقوق محفوظة.'
        }
    };

    // Function to manually add data-translate attributes to all elements that need translation
    function setupTranslationElements() {
        // Name in header
        document.querySelector('.name-block h1').setAttribute('data-translate', 'full-name');
        
        // Navigation tooltips
        const tooltips = document.querySelectorAll('.floating-nav .tooltip');
        const tooltipKeys = ['nav-home', 'nav-about', 'nav-education', 'nav-projects', 'nav-skills', 'nav-contact'];
        tooltips.forEach((tooltip, index) => {
            if (index < tooltipKeys.length) {
                tooltip.setAttribute('data-translate', tooltipKeys[index]);
            }
        });
        
        // Section titles
        document.querySelector('#about .section-title').setAttribute('data-translate', 'section-about');
        document.querySelector('#education .section-title').setAttribute('data-translate', 'section-education');
        document.querySelector('#projects .section-title').setAttribute('data-translate', 'section-projects');
        document.querySelector('#skills .section-title').setAttribute('data-translate', 'section-skills');
        document.querySelector('#contact .section-title').setAttribute('data-translate', 'section-contact');
        
        // Hero section
        document.querySelector('.hero-description').setAttribute('data-translate', 'hero-description');
        document.querySelector('.primary-btn').setAttribute('data-translate', 'cta-contact');
        document.querySelector('.secondary-btn').setAttribute('data-translate', 'cta-projects');
        document.querySelector('.scroll-indicator span').setAttribute('data-translate', 'scroll-text');
        
        // About section
        document.querySelector('.about-description').setAttribute('data-translate', 'about-description');
        document.querySelector('.download-btn').setAttribute('data-translate', 'download-cv');
        
        // Education timeline
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems.length >= 2) {
            timelineItems[0].querySelector('h3').setAttribute('data-translate', 'education-lst-title');
            timelineItems[0].querySelector('.date').setAttribute('data-translate', 'education-lst-date');
            timelineItems[0].querySelector('p').setAttribute('data-translate', 'education-lst-school');
            
            timelineItems[1].querySelector('h3').setAttribute('data-translate', 'education-deust-title');
            timelineItems[1].querySelector('.date').setAttribute('data-translate', 'education-deust-date');
            timelineItems[1].querySelector('p').setAttribute('data-translate', 'education-deust-school');
        }
        
        // Projects
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length >= 2) {
            projectCards[0].querySelector('h3').setAttribute('data-translate', 'project-ecommerce-title');
            projectCards[0].querySelector('.project-description').setAttribute('data-translate', 'project-ecommerce-desc');
            
            projectCards[1].querySelector('h3').setAttribute('data-translate', 'project-employee-title');
            projectCards[1].querySelector('.project-description').setAttribute('data-translate', 'project-employee-desc');

            projectCards[2].querySelector('h3').setAttribute('data-translate', 'project-iot-title');
            projectCards[2].querySelector('.project-description').setAttribute('data-translate', 'project-iot-desc');
        }
        
        // Skills categories
        const skillsCategories = document.querySelectorAll('.skills-category h3');
        if (skillsCategories.length >= 5) {
            skillsCategories[0].setAttribute('data-translate', 'skills-languages');
            skillsCategories[1].setAttribute('data-translate', 'skills-frameworks');
            skillsCategories[2].setAttribute('data-translate', 'skills-tools');
            skillsCategories[3].setAttribute('data-translate', 'skills-languages-human');
            skillsCategories[4].setAttribute('data-translate', 'skills-soft');
        }
        
        // Stats
        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].setAttribute('data-translate', 'stat-years');
            statLabels[1].setAttribute('data-translate', 'stat-projects');
            statLabels[2].setAttribute('data-translate', 'stat-languages');
        }
        
        // Languages
        const languageItems = document.querySelectorAll('.language-item');
        if (languageItems.length >= 3) {
            languageItems[0].querySelector('.language-name').setAttribute('data-translate', 'lang-arabic');
            languageItems[0].querySelector('.language-level').setAttribute('data-translate', 'lang-native');
            
            languageItems[1].querySelector('.language-name').setAttribute('data-translate', 'lang-french');
            languageItems[1].querySelector('.language-level').setAttribute('data-translate', 'lang-intermediate');
            
            languageItems[2].querySelector('.language-name').setAttribute('data-translate', 'lang-english');
            languageItems[2].querySelector('.language-level').setAttribute('data-translate', 'lang-intermediate');
        }
        
        // Soft skills
        const softSkills = document.querySelectorAll('.soft-skill span');
        if (softSkills.length >= 5) {
            softSkills[0].setAttribute('data-translate', 'soft-problem-solving');
            softSkills[1].setAttribute('data-translate', 'soft-teamwork');
            softSkills[2].setAttribute('data-translate', 'soft-adaptability');
            softSkills[3].setAttribute('data-translate', 'soft-learning');
            softSkills[4].setAttribute('data-translate', 'soft-analytical');
        }
        
        // Contact form labels
        const formLabels = document.querySelectorAll('.form-group label');
        if (formLabels.length >= 4) {
            formLabels[0].setAttribute('data-translate', 'form-name');
            formLabels[1].setAttribute('data-translate', 'form-email');
            formLabels[2].setAttribute('data-translate', 'form-subject');
            formLabels[3].setAttribute('data-translate', 'form-message');
        }
        
        // Contact section
        document.querySelector('#contact .contact-info h3').setAttribute('data-translate', 'contact-header');
        document.querySelector('#contact .contact-info > p').setAttribute('data-translate', 'contact-description');
        document.querySelector('.submit-btn').setAttribute('data-translate', 'form-submit');
        
        // Contact details
        const contactHeadings = document.querySelectorAll('.contact-details h4');
        if (contactHeadings.length >= 3) {
            contactHeadings[0].setAttribute('data-translate', 'contact-email');
            contactHeadings[1].setAttribute('data-translate', 'contact-phone');
            contactHeadings[2].setAttribute('data-translate', 'contact-linkedin');
        }
        
        // Footer
        document.querySelector('.copyright p').setAttribute('data-translate', 'footer-copyright');
    }

    // Function to switch languages
    function switchLanguage(lang) {
        console.log(`Switching to ${lang} language`);
        
        // Set direction for Arabic (RTL)
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.classList.add('rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.classList.remove('rtl');
        }
        
        // Translate all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
                
                // Special handling for glitch effect
                if (element.classList.contains('glitch')) {
                    element.setAttribute('data-text', translations[lang][key]);
                }
            }
        });
        
        // Update rotating text - completely replace the element to avoid glitches
        updateRotatingText(lang);
        
        // Store the selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);
    }
    
    // Function to update rotating text based on language
    function updateRotatingText(lang) {
        const container = document.querySelector('.title-animation');
        if (!container) return;
        
        // Remove existing rotate element
        const oldElement = container.querySelector('.txt-rotate');
        if (oldElement) {
            container.removeChild(oldElement);
        }
        
        // Create new element with appropriate text for the language
        const newElement = document.createElement('span');
        newElement.className = 'txt-rotate';
        newElement.setAttribute('data-period', '2000');
        
        let rotateContent;
        if (lang === 'fr') {
            rotateContent = '["Développeur Web", "Ingénieur Logiciel", "Étudiant en Informatique"]';
        } else if (lang === 'ar') {
            rotateContent = '["مطور ويب", "مهندس برمجيات", "طالب تقنية معلومات"]';
        } else {
            rotateContent = '["Web Developer", "Software Engineer", "IT Student"]';
        }
        
        newElement.setAttribute('data-rotate', rotateContent);
        container.appendChild(newElement);
        
        // Initialize the new rotation
        const toRotate = JSON.parse(rotateContent);
        const period = 2000;
        new TxtRotate(newElement, toRotate, period);
    }

    // Setup all translation elements
    setupTranslationElements();
    
    // Language Selector
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === savedLanguage) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
        switchLanguage(savedLanguage);
    }
    
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            const lang = option.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Get current language for validation message
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            const validationMessages = {
                en: 'Please fill in all fields',
                fr: 'Veuillez remplir tous les champs',
                ar: 'يرجى ملء جميع الحقول'
            };
            
            const successMessages = {
                en: 'Message sent successfully!',
                fr: 'Message envoyé avec succès !',
                ar: 'تم إرسال الرسالة بنجاح!'
            };
            
            // Validate form (simple validation)
            if (!name || !email || !subject || !message) {
                alert(validationMessages[currentLang]);
                return;
            }
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert(successMessages[currentLang]);
        });
    }

    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        
        // Parallax for geometric elements
        document.querySelectorAll('.geometric-elements .geo-element').forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

    // Initialize any animation observers
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-item, .project-card, .timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    };
    
    // Initialize the scroll animations
    animateOnScroll();

    // Update progress bars for skills based on data-progress attribute
    const skillItems = document.querySelectorAll('.skill-item[data-progress]');
    skillItems.forEach(item => {
        const progressValue = item.getAttribute('data-progress');
        const progressBar = item.querySelector('.skill-level');
        
        if (progressBar) {
            // Initial state before animation
            progressBar.style.width = '0%';
            
            // Create observer for skill progress bars
            const progressObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate progress bar when visible
                        setTimeout(() => {
                            progressBar.style.width = progressValue + '%';
                        }, 300);
                        progressObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            progressObserver.observe(item);
        }
    });

    // Add current year to copyright if needed
    const copyrightYear = document.querySelector('.copyright p');
    if (copyrightYear) {
        const currentYear = new Date().getFullYear();
        copyrightYear.textContent = copyrightYear.textContent.replace('2025', currentYear);
    }

    // Add hover effect for projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(26, 35, 50, 0.9)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--light-bg)';
        });
    });

    // Handle mobile navigation
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isMobile) {
        // Adjust navigation for mobile devices
        document.querySelectorAll('.floating-nav a').forEach(item => {
            item.addEventListener('click', function() {
                // Add active class to clicked nav item
                document.querySelectorAll('.floating-nav a').forEach(navItem => {
                    navItem.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }

    // Initialize portfolio with user info
    const userInfo = {
        username: 'elmahdi-bouderna',
        lastUpdated: '2025-04-06 16:31:58' // Using the timestamp you provided
    };
    
    // Update GitHub links with actual username
    document.querySelectorAll('a[href*="github.com"]').forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.setAttribute('href', `https://github.com/${userInfo.username}`);
        }
    });
});

const profilePhoto = document.querySelector('.profile-photo');
if (profilePhoto) {
    // You would replace this URL with your actual profile photo
    // For now using a placeholder
    profilePhoto.style.backgroundImage = 'url("mehdi.jpeg")';
}

// Update timestamp in the footer
const timestampEl = document.querySelector('.timestamp');
if (timestampEl) {
    timestampEl.textContent = 'Last updated: ' + userInfo.lastUpdated + ' UTC';
}

// Add login info
const footerInfo = document.querySelector('.footer-info');
if (footerInfo) {
    footerInfo.innerHTML = '<span>Login: ' + userInfo.login + '</span>';
}

function adjustFontSizesForMobile() {
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    const nameElement = document.querySelector('.name-block h1.glitch');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isVerySmallScreen = window.matchMedia('(max-width: 480px)').matches;
    
    if (!nameElement) return;
    
    // Reset to default first
    nameElement.style.fontSize = '';
    
    // Then adjust based on language and screen size
    if (isMobile) {
        if (currentLang === 'ar') {
            // Arabic might need slightly smaller text on mobile
            nameElement.style.fontSize = isVerySmallScreen ? '1.6rem' : '2rem';
        } else if (currentLang === 'fr') {
            // French text might be longer
            nameElement.style.fontSize = isVerySmallScreen ? '1.7rem' : '2.1rem';
        } else {
            // English
            nameElement.style.fontSize = isVerySmallScreen ? '1.8rem' : '2.2rem';
        }
    }
}

// Run on page load and window resize
window.addEventListener('resize', adjustFontSizesForMobile);
document.addEventListener('DOMContentLoaded', adjustFontSizesForMobile);

// Update the switchLanguage function to call adjustFontSizesForMobile
const originalSwitchLanguage = switchLanguage;
switchLanguage = function(lang) {
    originalSwitchLanguage(lang);
    adjustFontSizesForMobile();
};

// Fix for mobile navigation on scroll
if (window.matchMedia('(max-width: 768px)').matches) {
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY > 100;
        const nav = document.querySelector('.floating-nav');
        
        if (nav) {
            if (scrolled) {
                nav.style.opacity = '0.9';
            } else {
                nav.style.opacity = '1';
            }
        }
    });
}

// CV download functionality - Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Get the download button
    const downloadBtn = document.getElementById('cv-download-btn');
    
    if (downloadBtn) {
        // Update CV link based on selected language
        function updateCVLink() {
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            downloadBtn.setAttribute('href', `cv_${currentLang}.pdf`);
        }
        
        // Initial update
        updateCVLink();
        
        // Update when language changes
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function() {
                // Wait a bit for the language to be updated in localStorage
                setTimeout(updateCVLink, 100);
            });
        });
        
        // Track CV downloads
        downloadBtn.addEventListener('click', function(e) {
            // Log download event (this could be replaced with analytics code if needed)
            console.log('CV Downloaded in ' + (localStorage.getItem('selectedLanguage') || 'en'));
            
            // If you want to delay the download to show a message:
            /*
            e.preventDefault();
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            const messages = {
                en: 'Downloading your CV...',
                fr: 'Téléchargement de votre CV...',
                ar: 'جاري تحميل سيرتك الذاتية...'
            };
            
            alert(messages[currentLang]);
            
            // Then trigger download after a short delay
            setTimeout(() => {
                window.location.href = downloadBtn.getAttribute('href');
            }, 500);
            */
        });
    }
});