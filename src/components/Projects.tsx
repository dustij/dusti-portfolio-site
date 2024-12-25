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
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
                Projects
            </h1>
            <div className="h-1 w-20 mb-8 bg-white"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, key) => (
                    <motion.div
                        key={key}
                        className="rounded-lg flex flex-col items-start bg-stone-950/60 p-6 backdrop-blur-lg md:rounded-xl border border-stone-900"
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
                                View Code
                            </Link>
                        </Button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}