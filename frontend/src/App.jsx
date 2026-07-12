import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import Features from "./landing/Features";
import Showcase from "./landing/Showcase";

export default function App() {
    return (
        <div className="bg-[#070B14]">
            <Navbar />
            <Hero />
            <Features />
            <Showcase />
        </div>
    );
}