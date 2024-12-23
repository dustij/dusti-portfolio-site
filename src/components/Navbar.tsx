import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const links = [
        {
            href: "https://www.linkedin.com/in/dusti-johnson",
            label: "LinkedIn",
            children: <FaLinkedin />,
        },
        {
            href: "https://www.github.com/dustij",
            label: "GitHub",
            children: <FaGithub />,
        },
    ];

    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <Link href="/" aria-label="Home">
                    <Image
                        src="/assets/dj-logo.svg"
                        alt="logo"
                        className="mx-2"
                        width={50}
                        height={33}
                    />
                </Link>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                {links.map((link, key) => {
                    return (
                        <Link
                            href={link.href}
                            aria-label={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.children}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
