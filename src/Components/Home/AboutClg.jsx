import { motion } from "framer-motion";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import PublicIcon from "@mui/icons-material/Public";

export default function AboutClg() {
  const chips = [
    { label: "NAAC A+ Accredited", icon: <VerifiedIcon fontSize="small" /> },
    { label: "NBA Accredited (All Depts.)", icon: <WorkspacePremiumIcon fontSize="small" /> },
    { label: "ISO 9001:2015", icon: <MilitaryTechIcon fontSize="small" /> },
    { label: "Affiliated to Anna University", icon: <SchoolIcon fontSize="small" /> },
    { label: "AICTE Approved", icon: <VerifiedIcon fontSize="small" /> },
  ];

  const glance = [
    { k: "Founded", v: "1995" },
    { k: "Campus", v: "300+ Acres" },
    { k: "Location", v: "Chennai, TN" },
    { k: "Programs", v: "UG • PG • MBA" },
  ];

  const timeline = [
    {
      year: "1995",
      title: "Institution Established",
      body:
        "Founded by MJF. Ln. Leo Muthu under Sapthagiri Educational Trust; non-profit, non-minority institution with a clear vision and committed leadership.",
    },
    {
      year: "1997",
      title: "Sri Sairam Institute of Management",
      body:
        "MBA programme launched as a unit of Sri Sairam Engineering College to expand professional education offerings.",
    },
    {
      year: "2000–2010",
      title: "Rapid Infrastructure Growth",
      body:
        "State-of-the-art labs, digital library, internet centers, auditoriums, hostels, sports complexes, each a landmark across the sprawling campus.",
    },
    {
      year: "Recent Years",
      title: "Quality & Rankings",
      body:
        "NAAC A+ grade, NBA accreditation for all disciplines, ISO 9001:2015 certification, and consistent presence in NIRF rankings.",
    },
    {
      year: "Community Impact",
      title: "Societal Initiatives",
      body:
        "Institutions for Siddha, Ayurveda & Homeopathy; The Academy for Blind; Home for the Aged, reflecting strong social commitment.",
    },
  ];

  return (
    <section className="mx-4 my-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl border border-gray-100 bg-white/90 shadow-md overflow-hidden"
      >
        {/* Top ribbon */}


        {/* Body */}
        <div className="p-6 sm:p-8">
          {/* Chips */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            className="flex flex-wrap gap-2"
          >
            {chips.map((c) => (
              <motion.span
                key={c.label}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-800"
              >
                {c.icon}
                {c.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Two-column unique layout */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: narrative + glance */}
            <div className="lg:col-span-2">
              <p className="text-sm uppercase tracking-widest text-indigo-600">
                About The Institution
              </p>
              <h3 className="mt-1 text-xl font-bold uppercase tracking-widest text-gray-900">
                Sri Sairam Engineering College
              </h3>

              {/* College image under heading */}
              <div className="mt-4 rounded-xl overflow-hidden border border-gray-200">
                <img
                  src="/college.jpg"               /* put your image in public/sairam.jpg */
                  alt="Sri Sairam Engineering College campus"
                  className="w-full h-full object-cover aspect-[16/9]"
                  loading="lazy"
                />
              </div>

              {/* Condensed single paragraph */}
              <p className="mt-4 text-gray-700 leading-relaxed text-sm">
                Established in 1995 by MJF. Ln. Leo Muthu (Sapthagiri Educational Trust), Sri
                Sairam Engineering College is a premier non-profit institution affiliated to Anna
                University and approved by AICTE. Set on a 300+ acre campus with world-class
                laboratories, digital libraries, auditoriums, hostels, and sports facilities, the
                college sustains top-tier quality benchmarks (NAAC A+, NBA across departments, ISO
                9001:2015) and maintains a consistent presence in national rankings, reflecting a
                strong leadership ethos and commitment to societal impact.
              </p>

              {/* glance grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {glance.map((g) => (
                  <div key={g.k} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                    <div className="text-xs uppercase tracking-widest text-gray-500">{g.k}</div>
                    <div className="text-base font-semibold text-gray-900">{g.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: vertical timeline */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 text-gray-800">
                <TimelineIcon fontSize="small" />
                <h4 className="text-lg font-semibold uppercase tracking-widest">Milestones</h4>
              </div>

              <ol className="mt-4 relative border-l border-gray-200">
                {timeline.map((t, idx) => (
                  <motion.li
                    key={t.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.04 }}
                    className="mb-8 ml-4"
                  >
                    <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border-2 border-indigo-500 bg-white" />
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                        {t.year}
                      </span>
                      <h5 className="text-base sm:text-lg font-semibold text-gray-900">
                        {t.title}
                      </h5>
                    </div>
                    <p className="mt-2 text-gray-700 leading-relaxed text-sm">{t.body}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
