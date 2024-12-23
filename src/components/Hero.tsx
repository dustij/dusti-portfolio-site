import { HERO_CONTENT } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <Image
                            src="/assets/dj-profile.png"
                            alt="Dusti Johnson"
                            className="rounded-3xl border border-stone-900"
                            width={650}
                            height={650}
                        />
                    </div>
                </div>
                <div className="font-geist-sans w-full lg:w-1/2">
                    <div className="mt-10 flex flex-col items-center lg:items-start">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
                            Dusti Johnson
                        </h2>
                        <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl">
                            Software Developer/CIS Student
                        </span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight">
                            {HERO_CONTENT}
                        </p>
                        <Button asChild variant={"secondary"}>
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                Download Resume
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
