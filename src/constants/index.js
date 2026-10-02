const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    //{
      //  id: "safari",
    // name: "Articles", // was "Safari"
    // icon: "safari.png",
// canOpen: true,
// }->,
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "May 2025",
        title: "Building Einstein Classes: A Full-Stack EdTech Platform with Laravel",
        image: "/images/blog1.png",
        link: "/blog/einstein-classes",
    },
    {
        id: 2,
        date: "November 2025",
        title: "Building HelioSynth: A Research-Focused AI & Healthcare Platform",
        image: "/images/blog2.png",
        link: "/blog/heliosynth",
    },
    {
        id: 3,
        date: "July 2026",
        title: "Creating a macOS-Inspired Portfolio Experience with React & GSAP",
        image: "/images/blog3.png",
        link: "/blog/portfolio",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "JavaScript", "CSS"],
    },
    {
        category: "Backend",
        items: ["Laravel", "PHP", "REST APIs"],
    },
    {
        category: "AI & ML",
        items: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
        category: "Design",
        items: ["Figma", "Canva", "AdobeIllustrator"],
    },
    {
        category: "Tools & Cloud",
        items: ["Git", "GitHub", "AWS"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/PriyaSaha1234",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/priyasahaggsipu/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Internships",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Hackathons",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Leadership",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "Events",
    },
];

const gallery = {
    Internships: [
        {
            id: 1,
            name: "Data Analyst Internship",
            img: "/images/gal2.png",
        },
        {
            id: 2,
            name: "ML Internship",
            img: "/images/gal1.png",
        },
    ],

    Hackathons: [
        {
            id: 1,
            name: "Hackathon Participation",
            img: "/images/hack1.png",
        },
    ],

    Leadership: [
        {
            id: 1,
            name: "Fine Art's Team Coordinator",
            img: "/images/por1.png",
        },
        {
            id: 2,
            name: "GDGSC Design Team Member",
            img: "/images/por2.png",
        },
    ],

    Events: [
        {
            id: 1,
            name: "Hackathon Organizer",
            img: "/images/event1.png",
        },
        {
            id: 2,
            name: "Technical Event",
            img: "/images/event2.png",
        },
        {
            id: 3,
            name: "Certificate",
            img: "/images/event3.png",
        },
        {
            id: 4,
            name: "Hackathon Organizer",
            img: "/images/event4.png",
        },
    ],
};

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 2
        {
            id: 6,
            name: "Einstein Classes Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Einstein Classes.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "The Einstein Classes website is a production-level educational platform built to streamline course discovery, student engagement, and online learning services for competitive exam aspirants.",
                        "I contributed to both frontend and backend development, implementing feature enhancements, UI improvements, database-driven functionality, and resolving issues across the live platform.",
                        "A complete cart and checkout system was developed to simplify course purchases, alongside Razorpay payment gateway integration for secure real-time transactions and seamless enrollment workflows.",
                        "Built using PHP and Laravel, the platform focuses on scalability, reliability, and performance while serving a growing community of JEE and NEET aspirants.",
                    ]
                },
                {
                    id: 2,
                    name: "Einstein Classes.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://einsteinclasses.com/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "einsteinclasses.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/3HmjuPPqUoYbj9rks6Fef3/Moodboard?t=IvfyWLbGscFA8NpJ-1",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Portfolio Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Portfolio.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A fully interactive macOS-inspired portfolio experience that I designed and developed to showcase my projects, skills, and professional journey through a familiar desktop environment.",
                        "Rather than a traditional portfolio website, I recreated the look and feel of macOS with a dynamic desktop, interactive dock, window management system, and immersive user interactions.",
                        "Built using JavaScript and GSAP, I implemented smooth animations, fluid transitions, and responsive micro-interactions to deliver a polished and engaging user experience.",
                        "This project reflects my passion for creative UI engineering, combining modern web development with thoughtful design to transform a portfolio into an operating-system-style experience.",
                    ],
                },
                {
                    id: 2,
                    name: "portfolio.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://priyasahaportfolio.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "portfolio.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/Xit3gwYOnQvFwze9GyBZJX/MacOS-Portfolio--Copy-?node-id=0-1&t=aYoIylKrDMmJMSTZ-1",
                    position: "top-60 right-20",
                },
            ],
        },
        // ▶ Project 4
        {
            id: 8,
            name: "Flipkart Data Analytics",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-5",
            windowPosition: "top-[45vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Flipkart Analytics.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "An end-to-end data analytics project focused on analyzing Flipkart customer service call data to identify the key factors influencing Customer Satisfaction (CSAT).",

                        "The project involved cleaning and preprocessing 30,000 customer service records, handling missing values, standardizing categorical data, and preparing the dataset for exploratory analysis.",

                        "Using Excel and Pivot Tables, I analyzed customer sentiment, response time, communication channels, call duration, gender, and CSAT scores to identify meaningful patterns and trends.",

                        "The analysis revealed that customer sentiment was one of the strongest factors associated with CSAT, with Very Positive customers showing the highest satisfaction while Very Negative customers had the lowest scores.",

                        "The insights can help customer service teams identify areas for improvement, optimize response times, and improve overall customer experience and satisfaction."
                    ],
                },
                {
                    id: 2,
                    name: "Flipkart Dashboard",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-20",
                    imageUrl: "/images/project-4.png",
                },
            ],
        },
        // ▶ Project 5
        {
            id: 9,
            name: "HelioSynth Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5",
            windowPosition: "top-[8vh] left-7",
            children: [
                {
                    id: 1,
                    name: "HelioSynth.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "HelioSynth Research is an AI-focused research initiative exploring technology-driven solutions in healthcare.",
                        "As Founder & CTO, I contribute to technical planning, product development, website development, and early-stage product execution.",
                        "Built the official website using React.js, TypeScript, and Tailwind CSS, with reusable components and responsive layouts.",
                    ],
                },
                {
                    id: 2,
                    name: "HelioSynth Website",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://heliosynthresearch.ai/",
                    position: "top-20 right-10",
                },
                {
                    id: 3,
                    name: "HelioSynth.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-40",
                    imageUrl: "/images/project-1.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-30 left-5",
            subtitle: "About me",
            image: "/images/priya.jpeg",
            description: [
                "Hey! I'm Priya 👋, a final-year Artificial Intelligence & Data Science student passionate about building technology that creates real-world impact.",
                "My interests span Web Development, Machine Learning, Data Analytics, and AI-driven solutions, with a focus on creating practical and user-friendly experiences.",
                "Through internships, hackathons, and leadership roles, I've developed strong problem-solving, teamwork, and communication skills.",
                "I'm always eager to learn, take on new challenges, and grow as both a developer and a leader 🚀",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };