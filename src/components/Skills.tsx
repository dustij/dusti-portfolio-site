"use client";

import { motion, Variants } from "framer-motion";
import { AiOutlinePython } from "react-icons/ai";
import { DiSqllite } from "react-icons/di";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { IoGitPullRequestOutline } from "react-icons/io5";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

export default function Skills() {
    const skills = [
        { name: "React", icon: <FaReact className="size-14" /> },
        { name: "Next.js", icon: <TbBrandNextjs className="size-14" /> },
        { name: "TypeScript", icon: <TbBrandTypescript className="size-14" /> },
        { name: "Node.js", icon: <FaNodeJs className="size-14" /> },
        { name: "Python", icon: <AiOutlinePython className="size-14" /> },
        { name: "Java", icon: <FaJava className="size-14" /> },
        { name: "Git", icon: <IoGitPullRequestOutline className="size-14" /> },
        { name: "SQL", icon: <DiSqllite className="size-14" /> },
    ];

    const skillsVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    const skillsCustomVariants: Variants = {
        hidden: { y: -6 },
        visible: (duration = 0) => ({
            y: [6, -6],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        }),
    };

    const durationMap: { [key: number]: number } = {
        0: 2.5,
        1: 3,
        2: 5,
        3: 3.5,
        4: 6,
        5: 4,
    };

    return (
        <section className="px-6 py-10" id="skills">
            <h1 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
                Skills
            </h1>
            <div className="mb-8 h-1 w-20 bg-white"></div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill, key) => (
                    <motion.div
                        key={key}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={skillsVariants}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={durationMap[key % 5]}
                            variants={skillsCustomVariants}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{skill.icon}</div>
                            <h3 className="mb-2 text-lg font-medium lg:text-xl">
                                {skill.name}
                            </h3>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
