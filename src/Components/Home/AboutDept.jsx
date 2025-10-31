import { motion } from "framer-motion";
import HubIcon from "@mui/icons-material/Hub";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function AboutDept() {
  const highlights = [
    {
      icon: <HubIcon fontSize="large" className="text-indigo-600" />,
      title: "Future-Ready Curriculum",
      desc: "Covers AI, ML, DL, NLP, and Computer Vision along with Cloud, IoT, and Data Analytics, enabling students to design and deploy intelligent systems.",
    },
    {
      icon: <AutoAwesomeIcon fontSize="large" className="text-indigo-600" />,
      title: "Research & Industry Focus",
      desc: "Hands-on projects, hackathons, and collaborations with industry prepare students for innovation in real-world applications.",
    },
    {
      icon: <VerifiedIcon fontSize="large" className="text-indigo-600" />,
      title: "Outcome-Based Learning",
      desc: "Ensures both technical mastery and holistic growth, developing critical thinking, teamwork, and communication for career excellence.",
    },
  ];

  return (
    <section className="mx-4 my-10 relative">
      {/* Background tech-ring pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, #6366F1 0%, transparent 60%), radial-gradient(circle at 70% 80%, #9333EA 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 rounded-2xl border border-gray-100 bg-white/90 shadow-md overflow-hidden"
      >
        <div className="px-6 sm:px-8 py-8 text-center">
          {/* Small subtitle */}
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
            About the Department
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-widest text-gray-900">
            Department of Computer Science with AI & ML
          </h2>

          <p className="mt-3 max-w-3xl mx-auto text-gray-700 leading-relaxed text-sm sm:text-base">
            The Department of Artificial Intelligence and Machine Learning nurtures
            future-ready professionals through a balanced mix of theory, research, and
            practical innovation. Students are trained to build intelligent systems that
            address real-world challenges while fostering creativity and interdisciplinary thinking.
          </p>

          {/* Highlight cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center">{h.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{h.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <p className="mt-8 text-gray-600 text-sm sm:text-base italic">
            “Empowering innovators to shape the future of AI and Machine Learning.”
          </p>
        </div>
      </motion.div>
    </section>
  );
}
