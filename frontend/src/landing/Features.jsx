import { motion } from "framer-motion";

const sections = [
  {
    title: "Centralized Asset Tracking",
    description:
      "Track every company asset from purchase to retirement. Know exactly who is using what, where it is located, and its complete lifecycle.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  },
  {
    title: "Smart Allocation & Returns",
    description:
      "Allocate assets in seconds, maintain complete history, and eliminate manual spreadsheets with automated workflows.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
  },
  {
    title: "Maintenance & Analytics",
    description:
      "Schedule maintenance, monitor health, and generate powerful reports from a single enterprise dashboard.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-[#0B1020] py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-6xl font-black text-center text-white">
          Why Choose AssetFlow?
        </h2>

        <p className="text-center text-gray-400 text-xl mt-6 mb-24">
          Designed for modern organizations that need speed, visibility and control.
        </p>

        {sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className={`grid lg:grid-cols-2 gap-20 items-center mb-32 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-3xl shadow-2xl"
                />

                <div>
                  <h3 className="text-5xl font-bold text-white mb-8">
                    {item.title}
                  </h3>

                  <p className="text-xl text-gray-400 leading-10">
                    {item.description}
                  </p>

                  <ul className="mt-10 space-y-4 text-lg text-gray-300">
                    <li>✔ Real-time visibility</li>
                    <li>✔ Enterprise security</li>
                    <li>✔ Automated workflows</li>
                    <li>✔ Easy integrations</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-5xl font-bold text-white mb-8">
                    {item.title}
                  </h3>

                  <p className="text-xl text-gray-400 leading-10">
                    {item.description}
                  </p>

                  <ul className="mt-10 space-y-4 text-lg text-gray-300">
                    <li>✔ Faster operations</li>
                    <li>✔ Complete audit logs</li>
                    <li>✔ Better productivity</li>
                    <li>✔ Cloud ready</li>
                  </ul>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-3xl shadow-2xl"
                />
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}