import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutConference from "./AboutConference.jsx";
import AboutClg from "./AboutClg.jsx";
import AboutDept from "./AboutDept.jsx";
import Location from "./Location.jsx";
import Nearby from "./Nearby.jsx";

export default function Home() {
  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate min-h-[75dvh] rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url(/sec.jpg)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/sec.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-28">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.h1
              variants={item}
              className="text-white text-3xl sm:text-3xl lg:text-3xl font-semibold uppercase tracking-widest"
            >
              International Conference on Computing, Artificial Intelligence and Smart Systems - 2026
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-white text-md uppercase tracking-widest sm:text-md lg:text-md font-bold">
              Sri Sairam Engineering College
            </motion.p>
            <motion.p variants={item} className="text-gray-100/90 text-sm uppercase tracking-widest sm:text-sm lg:text-sm">
              Department of CSE(AIML)
            </motion.p>

            <motion.div variants={item} className="mt-8 flex items-center gap-3">
              <Link
                to="/call-for-papers"
                className="
                  inline-flex items-center rounded-full
                  bg-white text-black
                  px-5 py-2.5 text-sm font-semibold
                  border border-white
                  transition-all duration-300
                  hover:bg-black hover:text-white hover:border-black
                "
              >
                Call for Papers
              </Link>

              <Link
                to="/important-dates"
                className="
                  inline-flex items-center rounded-full
                  bg-transparent text-white
                  px-5 py-2.5 text-sm font-semibold
                  border border-white/70
                  transition-all duration-300
                  hover:bg-white/10 hover:text-white
                "
              >
                Important Dates
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
      </section>

      {/* About Conference section */}
      <AboutConference />
      <AboutClg />
      <AboutDept />
      <Location />
      <Nearby />
    </>
  );
}
