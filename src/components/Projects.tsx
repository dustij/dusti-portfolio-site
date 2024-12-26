"use client";

import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Projects() {
    const projectVariants = {
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

    return (
        <section className="px-6 py-10" id="projects">
            <h1 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
                Projects
            </h1>
            <div className="mb-8 h-1 w-20 bg-white"></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, key) => (
                    <motion.div
                        key={key}
                        className="flex flex-col items-start justify-between rounded-lg border border-stone-900 bg-stone-950/60 p-6 backdrop-blur-lg md:rounded-xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={projectVariants}
                    >
                        <div className="w-full max-w-xl">
                            <h3 className="mb-2 text-2xl font-semibold">
                                {project.title}
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Button
                            asChild
                            variant="secondary"
                            className="mt-6 rounded-xl font-geist-mono"
                        >
                            <Link
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </Link>
                        </Button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
