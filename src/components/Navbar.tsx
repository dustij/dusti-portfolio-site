"use client";

import { LINKS } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleLinkClick() {
        setMenuOpen(false);
    }

    return (
        <nav className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto flex max-w-6xl items-center justify-between bg-stone-950/30 p-4 backdrop-blur-lg md:my-2 md:rounded-xl">
                <div className="font-geist-mono text-lg font-semibold uppercase text-white">
                    <Link href="/">Dusti Johnson</Link>
                </div>
                <div className="hidden space-x-8 md:flex">
                    {LINKS.map((link, key) => (
                        <Link
                            key={key}
                            href={link.href}
                            className="text-white transition duration-300 hover:text-stone-400"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="text-primary-foreground md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "close menu" : "open menu"}
                    >
                        {menuOpen ? (
                            <RiCloseFill className="size-6" />
                        ) : (
                            <RiMenu3Fill className="size-6" />
                        )}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="mx-auto max-w-6xl flex flex-col space-y-4 rounded-xl bg-stone-950/30 p-2 backdrop-blur-lg md:hidden">
                    {LINKS.map((link, key) => (
                        <Link
                            key={key}
                            href={link.href}
                            className="text-white transition duration-300 hover:text-stone-400"
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
