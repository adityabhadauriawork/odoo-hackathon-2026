import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [

    {
        number: 1200,
        suffix: "+",
        title: "Assets Managed",
    },

    {
        number: 500,
        suffix: "+",
        title: "Organizations",
    },

    {
        number: 25000,
        suffix: "+",
        title: "Allocations",
    },

    {
        number: 99.9,
        suffix: "%",
        decimals: 1,
        title: "System Uptime",
    },

];

export default function Stats() {

    return (

        <section
            id="stats"
            className="py-32"
        >

            <div className="max-w-7xl mx-auto px-8">

                <motion.div

                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}

                >

                    <h2 className="text-5xl font-black text-center text-white">

                        Trusted Worldwide

                    </h2>

                    <p className="text-gray-400 text-center mt-5 text-xl">

                        Enterprise-grade asset management powering modern organizations.

                    </p>

                </motion.div>

                <div className="grid md:grid-cols-4 gap-8 mt-20">

                    {stats.map((item, index) => (

                        <motion.div

                            key={index}

                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}

                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}

                            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 text-center hover:border-cyan-400 duration-300"

                        >

                            <h1 className="text-6xl font-black text-cyan-400">

                                <CountUp
                                    end={item.number}
                                    duration={3}
                                    decimals={item.decimals || 0}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />

                                {item.suffix}

                            </h1>

                            <p className="text-gray-400 mt-5 text-lg">

                                {item.title}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}