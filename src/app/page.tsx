import Hero from "~/components/hero";
import Navbar from "~/components/nabar";

export default function Home() {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
}
