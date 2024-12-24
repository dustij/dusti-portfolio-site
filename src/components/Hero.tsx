"use client";

import { DUSTI_PICTURE, HERO_CONTENT } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 min-h-screen flex flex-wrap flex-col md:flex-row items-center justify-center text-white">
                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-2xl md:text-3xl lg:text-5xl my-14"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.greeting}
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-4xl mb-4"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.introduction}
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl lg:text-4xl mb-4"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.description}
                    </motion.p>
                    <motion.div
                        className="p-3 lg:p4 mt-8"
                        variants={textVariants}
                    >
                        <Button
                            asChild
                            variant={"secondary"}
                            size="lg"
                            className="rounded-xl font-geist-mono"
                        >
                            <Link
                                href={HERO_CONTENT.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                Download Resume
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <Image
                        src={DUSTI_PICTURE}
                        alt="Dusti Johnson"
                        width={650}
                        height={650}
                        className="rounded-3xl border border-stone-900"
                    />
                </motion.div>
            </div>
        </section>
    );
}
