"use client";

import { CONTACT_CONTENT } from "@/constants";
import {
    RemixiconComponentType,
    RiGithubFill,
    RiLinkedinFill,
} from "@remixicon/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay,
            },
        }),
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (delay = 0) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay,
            },
        }),
    };

    const iconMap: { [key: string]: RemixiconComponentType } = {
        RiGithubFill: RiGithubFill,
        RiLinkedinFill: RiLinkedinFill,
    };

    return (
        <section
            className="min-h-screen flex flex-col justify-center px-4 md:px-10"
            id="contact"
        >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
                Contact
            </h2>
            <div className="h-1 w-20 bg-white mb-8"></div>
            <motion.h3
                className="text-6xl md:text-8xl leading-none"
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                variants={textVariants}
            >
                {CONTACT_CONTENT.headline}
            </motion.h3>
            <motion.p
                className="text-lg md:text-2xl mt-6 max-w-3xl"
                initial="hidden"
                whileInView="visible"
                custom={0.6}
                variants={textVariants}
            >
                {CONTACT_CONTENT.description}
            </motion.p>
            <motion.div
                className="text-2xl md:text-3xl font-medium mt-8"
                initial="hidden"
                whileInView="visible"
                custom={0.8}
                variants={textVariants}
            >
                <Link href={`mailto:${CONTACT_CONTENT.email}`}>
                    {CONTACT_CONTENT.email}
                </Link>
            </motion.div>
            <div className="flex space-x-6 mt-8">
                {CONTACT_CONTENT.socialLinks.map((link, key) => {
                    const Icon: RemixiconComponentType = iconMap[link.icon];
                    return (
                        <motion.div
                            key={key}
                            initial="hidden"
                            whileInView="visible"
                            custom={1.0 + key * 0.2}
                            variants={iconVariants}
                        >
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.ariaLabel}
                            >
                                <Icon size={36} />
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
            <motion.p
                className="text-sm text-stone-400 mt-36"
                initial="hidden"
                whileInView="visible"
                custom={1.4}
                variants={textVariants}
            >
                {CONTACT_CONTENT.footerText}
            </motion.p>
        </section>
    );
}
