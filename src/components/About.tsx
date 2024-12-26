"use client";

import { ABOUT_CONTENT } from "@/constants";
import { motion } from "framer-motion";

export default function About() {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="px-6 py-10" id="about">
            <h1 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
                About
            </h1>
            <div className="mb-8 h-1 w-20 bg-white"></div>
            <div className="mx-auto max-w-4xl">
                {ABOUT_CONTENT.paragraphs.map((paragraph, key) => (
                    <motion.p
                        key={key}
                        className="mb-10 text-xl leading-relaxed md:text-2xl lg:text-4xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={textVariants}
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}
