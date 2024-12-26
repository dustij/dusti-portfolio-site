export const HERO_CONTENT = {
    greeting: "Hey, I'm Dusti!",
    introduction: `I'm an aspiring full stack developer, passionate about building dynamic and engaging web applications.`,
    description: `As a CIS student, I'm sharpening my skills in TypeScript, Python, and Java, while exploring full stack development with Next.js.`,
    resume: "/Resume-Dusti-Johnson.pdf",
};

export const ABOUT_CONTENT = {
    paragraphs: [
        "I’m a CIS student and an aspiring full stack developer, constantly experimenting with tools and frameworks to create impactful software solutions. My journey began in 2020, driven by a curiosity to build and a desire to solve real-world problems. Since then, I’ve tackled personal projects that merge functionality with creativity, refining my approach with each iteration.",
        "I focus on leveraging technologies like Next.js, TypeScript, and Drizzle ORM to craft clean, scalable web applications. At the same time, I’m diving deeper into languages like Java and Python to broaden my backend capabilities and deepen my understanding of software design. For me, it’s all about continuous learning, refining systems, and delivering solutions that exceed expectations.",
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
        title: "Portfolio Website",
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        link: "https://github.com/dustij/dusti-portfolio-site",
    },
    {
        title: "ClumsyCat Website",
        description:
            "A Solana token project with a live website, showcasing a tradeable token and blockchain integration.",
        technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        link: "https://github.com/dustij/clumsycat-clawz",
    },
    {
        title: "CSV Combiner",
        description:
            "A tool to merge and validate CSV files while ensuring consistent data structure.",
        technologies: ["Java", "JavaFX"],
        link: "https://github.com/dustij/CSVCombiner",
    },
];

export const CONTACT_CONTENT = {
    headline: "LET'S WORK ON SOMETHING GREAT",
    description:
        "I'm excited to collaborate on projects that solve real problems and create meaningful impact. Let's build something exceptional together.",
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
