import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const socials = [
    { name: "Facebook", icon: <FacebookIcon fontSize="small" />, href: "#" },
    { name: "Instagram", icon: <InstagramIcon fontSize="small" />, href: "#" },
    { name: "LinkedIn", icon: <LinkedInIcon fontSize="small" />, href: "#" },
    { name: "X", icon: <XIcon fontSize="small" />, href: "#" },
    { name: "YouTube", icon: <YouTubeIcon fontSize="small" />, href: "#" },
  ];

  return (
    <footer className="relative bg-black text-white w-full mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 sm:px-10 py-8"
      >
        {/* top accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-400 mb-6"></div>

        {/* Footer main content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {/* Left side - College info */}
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Sri Sairam Engineering College
            </p>
            <h3 className="mt-1 text-lg sm:text-xl font-semibold">
              Dept. of CSE — AI &amp; ML
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              Sai Leo Nagar, West Tambaram,<br />
              Chennai - 600044, Tamil Nadu, India.
            </p>

            {/* Social icons below */}
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="text-left md:text-right text-sm text-gray-300 leading-relaxed">
            <p className="text-gray-400 font-semibold">Phone :</p>
            <p>+91-44-22512111 / 2251 2333</p>
            <p>+91-44-22512444</p>

            <p className="mt-3 text-gray-400 font-semibold">Fax :</p>
            <p>+91-44-22512323</p>

            <p className="mt-3 text-gray-400 font-semibold">Mail :</p>
            <p>sairam@sairam.edu.in</p>
            <p>career@sairam.edu.in</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom copyright strip */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3">
          <p className="text-center text-xs text-gray-400">
            © 2026 <span className="font-semibold text-white">ICCASS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
