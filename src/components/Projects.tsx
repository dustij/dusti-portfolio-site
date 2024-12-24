import { PROJECTS } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Projects() {
    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, key) => (
                    <div
                        key={key}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <div className="w-full lg:w-1/4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="mb-6 rounded"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="">
                            <div className="w-full max-w-xl lg:w-3/4">
                                <h3 className="mb-2 text-2xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-stone-400">
                                    {project.description}
                                </p>
                                {project.technologies.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Button variant="secondary" className="mt-6">View Code</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
