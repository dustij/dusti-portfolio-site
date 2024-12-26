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
            className="flex min-h-screen flex-col justify-center px-4 md:px-10"
            id="contact"
        >
            <h2 className="mb-10 text-4xl font-medium tracking-tight md:text-6xl">
                Contact
            </h2>
            <div className="mb-8 h-1 w-20 bg-white"></div>
            <motion.h3
                className="text-6xl leading-none md:text-8xl"
                initial="hidden"
                whileInView="visible"
                custom={0.4}
                variants={textVariants}
            >
                {CONTACT_CONTENT.headline}
            </motion.h3>
            <motion.p
                className="mt-6 max-w-3xl text-lg md:text-2xl"
                initial="hidden"
                whileInView="visible"
                custom={0.6}
                variants={textVariants}
            >
                {CONTACT_CONTENT.description}
            </motion.p>
            <motion.div
                className="mt-8 text-2xl font-medium md:text-3xl"
                initial="hidden"
                whileInView="visible"
                custom={0.8}
                variants={textVariants}
            >
                <Link href={`mailto:${CONTACT_CONTENT.email}`}>
                    {CONTACT_CONTENT.email}
                </Link>
            </motion.div>
            <div className="mt-8 flex space-x-6">
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
            <p className="mt-36 text-sm text-stone-400">
                {CONTACT_CONTENT.footerText}
            </p>
        </section>
    );
}
