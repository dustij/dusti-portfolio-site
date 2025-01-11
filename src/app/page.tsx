import Hero from "@/components/hero";
import Navbar from "@/components/nabar";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}
