import About from "@/components/About";
import BlurBackground from "@/components/BlurBackground";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <>
            <BlurBackground />
            <Navbar />
            <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
                <Navbar />
                <Hero />
                <Projects />
                <Skills />
                <About />
            </main>
        </>
    );
}
