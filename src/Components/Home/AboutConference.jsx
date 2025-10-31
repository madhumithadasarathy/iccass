import { motion } from "framer-motion";

export default function AboutConference() {
  return (
    <section className="mx-4 my-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl shadow-md border border-gray-100 bg-white/90 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm uppercase tracking-widest text-indigo-600 mb-2">
              About the Conference
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Advancing Computing, AI & Smart Systems
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              The International Conference on Computing, Artificial Intelligence
              and Smart Systems (ICASS) brings together researchers, practitioners,
              and industry leaders to share breakthroughs in machine learning,
              intelligent systems, cloud/edge computing, and human-centered AI.
              Expect peer-reviewed papers, workshops, keynote addresses, and vibrant
              networking that foster collaboration between academia and industry.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              Join us to explore state-of-the-art research, real-world deployments,
              and future directions shaping the next decade of intelligent systems.
            </p>
          </div>

          {/* Right: Video */}
          <div className="relative bg-black">
            <video
              className="w-full h-full aspect-video lg:aspect-auto object-cover"
              src="/about.mp4"            /* Place your video at public/about.mp4 */
              poster="/about-poster.jpg"  /* Optional: use public/about-poster.jpg */
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
