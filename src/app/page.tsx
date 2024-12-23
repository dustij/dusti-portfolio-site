import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="overflow-x-hidden text-stone-300">
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                <div className="container mx-auto px-8">
                  <Navbar />
                  <Hero />
                </div>
            </div>
        </div>
    );
}
