import { motion } from "framer-motion";
import {
    MdDashboard,
    MdInventory,
    MdAnalytics
} from "react-icons/md";

const cards = [
    {
        icon: <MdDashboard size={45} />,
        title: "Smart Dashboard",
        desc: "Real-time KPIs, asset health, bookings and live analytics."
    },
    {
        icon: <MdInventory size={45} />,
        title: "Asset Tracking",
        desc: "Track every asset, owner, maintenance cycle and allocation."
    },
    {
        icon: <MdAnalytics size={45} />,
        title: "Business Reports",
        desc: "Generate reports instantly with visual analytics."
    }
];

export default function Showcase() {

    return (

        <section
            id="showcase"
            className="py-32 bg-[#070B14]"
        >

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-6xl font-black text-center text-white">
                    Built for Enterprise Teams
                </h2>

                <p className="text-center text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
                    Everything your organization needs inside one beautiful platform.
                </p>

                <div className="grid md:grid-cols-3 gap-10 mt-24">

                    {cards.map((card, index) => (

                        <motion.div

                            key={index}

                            whileHover={{
                                y: -12,
                                scale: 1.03
                            }}

                            className="rounded-3xl bg-white/5 border border-white/10 p-10 hover:border-cyan-400 transition"

                        >

                            <div className="text-cyan-400 mb-8">

                                {card.icon}

                            </div>

                            <h3 className="text-3xl font-bold text-white">

                                {card.title}

                            </h3>

                            <p className="text-gray-400 mt-6 leading-8">

                                {card.desc}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}