import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">

            <div className="backdrop-blur-2xl bg-black/20 border-b border-white/10">

                <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

                    <h1 className="text-5xl font-black tracking-tight">
                        <span className="text-white">Asset</span>
                        <span className="text-cyan-400">Flow</span>
                    </h1>

                    <nav className="hidden md:flex items-center gap-12 text-lg">

                        <a href="#features" className="text-gray-300 hover:text-cyan-400 transition">
                            Features
                        </a>

                        <a href="#showcase" className="text-gray-300 hover:text-cyan-400 transition">
                            Dashboard
                        </a>

                        <a href="#stats" className="text-gray-300 hover:text-cyan-400 transition">
                            Statistics
                        </a>

                        <a href="#footer" className="text-gray-300 hover:text-cyan-400 transition">
                            Contact
                        </a>

                    </nav>

                    <Link
                        to="/"
                        className="px-7 py-3 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </header>
    );
}