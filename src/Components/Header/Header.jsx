import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Author Info", to: "/author-info" },
  { name: "Committee", to: "/committee" },
  { name: "Important Dates", to: "/important-dates" },
  { name: "Call for papers", to: "/call-for-papers" },
  { name: "Venue", to: "/venue" },
  { name: "Contact Us", to: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const baseLink =
    "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-gray-100";
  const activeLink =
    "bg-black text-white hover:bg-white hover:text-black hover:border border-black";

  // Variants respect prefers-reduced-motion
  const shellVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut", delay: 0.05 },
    },
  };

  return (
    <header className="relative">
      {/* Animated outer shell */}
      <motion.div
        key="header-shell"
        initial="hidden"
        animate="visible"
        variants={shellVariants}
        className="
          bg-white rounded-full border border-gray-100
          flex items-center justify-between
          px-4 sm:px-6 py-2
          shadow-sm md:shadow-md md:backdrop-blur-sm
          transition-shadow duration-300
        "
      >
        {/* Left: Logo with a tiny pop */}
        <motion.div
          variants={logoVariants}
          className="flex items-center gap-2"
        >
          <img
            src="/headerlogo.svg"
            alt="ICASS Logo"
            className="h-10 w-auto select-none"
          />
        </motion.div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav with extra spacing on large screens */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : "text-gray-700"}`
                }
                onClick={() => setOpen(false)}
              >
                {l.name}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown (already animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden absolute left-0 right-0 mt-2 z-50"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `block ${baseLink} ${
                      isActive ? activeLink : "text-gray-700"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
