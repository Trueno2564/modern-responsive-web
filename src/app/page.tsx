import About from "@/components/about/About";
import Discount from "@/components/discount/Discount";
import Features from "@/components/features/Features";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview/Overview";
import Plans from "@/components/planes/Plans";
import Practice from "@/components/practice/Practice";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar/>
      <Overview/>
      <Features/>
      <div className="max-w-6xl mx-auto">
        <About/>
        <Practice/>
        <Plans/>
        <Discount/>
      </div>
    </main>
  )
}
