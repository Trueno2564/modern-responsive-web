import About from "@/components/about/About";
import Features from "@/components/features/Features";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview/Overview";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar/>
      <Overview/>
      <Features/>
      <div className="max-w-6xl mx-auto">
        <About/>
      </div>
    </main>
  )
}
