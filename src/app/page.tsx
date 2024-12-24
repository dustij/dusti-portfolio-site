import BlurBackground from "@/components/BlurBackground";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <BlurBackground />
            <Navbar />
            <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
                <Navbar />
                <Hero />
            </main>
        </>
    );
}
