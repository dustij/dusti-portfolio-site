"use client";

import { DUSTI_PICTURE, HERO_CONTENT } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "./ui/button";

export default function Hero() {
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

    const pathname = usePathname();

    useEffect(() => {
        /*
        There is an undesirable effect when the page is refreshed at the root route.
        The window scrolls down slightly to the hero section. This creates alters the
        layout and appearance of the hero section, pushing it closer to the navbar and
        cluttering the top margin area. This useEffect call ellimnates this problem.
        */
        const hash = window.location.hash;
        if (pathname === "/" && !hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return (
        <section>
            <div className="relative z-10 flex min-h-[calc(100vh+78px)] flex-col flex-wrap items-center justify-center text-white md:flex-row">
                <motion.div
                    className="w-full p-8 md:w-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="mb-8 mt-14 text-2xl md:my-14 md:text-3xl lg:text-5xl"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.greeting}
                    </motion.h1>
                    <motion.p
                        className="mb-4 text-xl md:text-2xl lg:text-4xl"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.introduction}
                    </motion.p>
                    <motion.p
                        className="mb-4 text-xl md:text-2xl lg:text-4xl"
                        variants={textVariants}
                    >
                        {HERO_CONTENT.description}
                    </motion.p>
                    <motion.div
                        className="lg:p4 mt-8 p-3"
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
                    className="w-full p-8 md:w-1/2"
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
