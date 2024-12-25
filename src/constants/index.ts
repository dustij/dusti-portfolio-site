export const HERO_CONTENT = {
    greeting: "Hey, I'm Dusti!",
    introduction: `I'm an aspiring full stack developer, passionate about building dynamic and engaging web applications.`,
    description: `As a CIS student, I'm sharpening my skills in TypeScript, Python, and Java, while exploring full stack development with Next.js.`,
    resume: "/resume.pdf",
};

export const ABOUT_CONTENT = {
    paragraphs: [
        "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
        "I specialize in using technologies like React, Next.js, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
    ],
};

export const DUSTI_PICTURE = "/assets/dj-profile-2.png";

export const LINKS = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Senior Full Stack Developer",
        company: "Google Inc.",
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    },
    {
        year: "2022 - 2023",
        role: "Frontend Developer",
        company: "Adobe",
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    },
    {
        year: "2021 - 2022",
        role: "Full Stack Developer",
        company: "Facebook",
        description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
        technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    },
    {
        year: "2020 - 2021",
        role: "Software Engineer",
        company: "Paypal",
        description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
        technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    },
];

export const PROJECTS = [
    {
        title: "E-Commerce Website",
        image: "/assets/projects/projects1.webp",
        description:
            "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
        link: "https://www.github.com/dustij",
    },
    {
        title: "Task Management App",
        image: "/assets/projects/projects2.webp",
        description:
            "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        technologies: ["HTML", "CSS", "Angular", "Firebase"],
        link: "https://www.github.com/dustij",
    },
    {
        title: "Portfolio Website",
        image: "/assets/projects/projects3.webp",
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
        link: "https://www.github.com/dustij",
    },
    {
        title: "Blogging Platform",
        image: "/assets/projects/projects4.webp",
        description:
            "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
        link: "https://www.github.com/dustij",
    },
];

export const CONTACT_CONTENT = {
    headline: "LET'S WORK ON SOMETHING GREAT",
    description:
        "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
    email: "dustijohnson@outlook.com",
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/dustij",
            ariaLabel: "View my GitHub profile",
            icon: "RiGithubFill",
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/dusti-johnson",
            ariaLabel: "Connect with me on LinkedIn",
            icon: "RiLinkedinFill",
        },
    ],
    footerText: `© ${new Date().getFullYear()} Dusti Johnson. All rights reserved.`,
};
