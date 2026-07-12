import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070B14] text-white">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="relative max-w-5xl mx-auto px-8 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="uppercase tracking-[10px] text-cyan-400 text-sm mb-8"
                >
                    Enterprise Asset Management Platform
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-black leading-none"
                >
                    Manage Every
                    <br />
                    Asset
                    <span className="text-cyan-400"> Smarter.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    className="mt-10 text-2xl text-gray-400 leading-10 max-w-3xl mx-auto"
                >
                    The modern enterprise platform to manage assets,
                    allocations, maintenance, audits, reports and analytics
                    from one beautiful dashboard.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5 }}
                    className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
                >

                    <Link
                        to="/signup"
                        className="px-10 py-5 rounded-full bg-cyan-400 text-black font-bold text-lg hover:scale-105 duration-300 flex items-center justify-center gap-3"
                    >
                        Register
                        <ArrowRight size={20} />
                    </Link>

                    <Link
                        to="/"
                        className="px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/10 duration-300"
                    >
                        Login
                    </Link>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-24"
                >

                    <p className="text-gray-500 text-sm tracking-[6px] uppercase">
                        Scroll to Discover
                    </p>

                    <div className="w-[2px] h-20 bg-gradient-to-b from-cyan-400 to-transparent mx-auto mt-5 animate-pulse" />

                </motion.div>

            </div>

        </section>
    );
}