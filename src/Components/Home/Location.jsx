import { motion } from "framer-motion";
import PlaceIcon from "@mui/icons-material/Place";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

export default function Location() {
  const mapsUrl =
    "https://www.google.com/maps?q=Sri+Sairam+Engineering+College&ll=&z=15";
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Sri+Sairam+Engineering+College";

  const chipClasses =
    "inline-flex items-center gap-2 rounded-full bg-white/90 border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-800 shadow-sm";

  return (
    <section className="mx-4 my-10 relative">
      {/* soft background accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          background:
            "radial-gradient(600px 200px at 20% 20%, #6366F1 0%, transparent 60%), radial-gradient(600px 200px at 80% 80%, #22d3ee 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 rounded-2xl border border-gray-100 bg-white/90 shadow-md overflow-hidden"
      >

        {/* Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left: creative copy + chips + CTAs */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-gray-700 leading-relaxed text-sm justify"
            >
                <div className = "uppercase tracking-widest text-indigo-600"> 📍Location</div>
                <div className="text-2xl uppercase tracking-widest mb-2 mt-2">Arrive. Explore. Inspire.</div>
              <span className="font-semibold text-gray-900">
                Getting here is easy!
              </span>{" "}
              Ride the rhythm of the city and let Maps guide the way. Whether you roll in by
              metro and hop a bus, cruise on a bike with the wind at your back, or take a cab
              straight to the gates, follow the pin and you’ll find yourself at a campus that
              hums with ideas.
            </motion.p>

            {/* travel mode chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className={chipClasses}>
                <TrainIcon fontSize="small" /> Train / Metro + Shuttle
              </span>
              <span className={chipClasses}>
                <DirectionsBusIcon fontSize="small" /> City / College Buses
              </span>
              <span className={chipClasses}>
                <DirectionsCarIcon fontSize="small" /> Cab / Car
              </span>
              <span className={chipClasses}>
                <TwoWheelerIcon fontSize="small" /> Bike
              </span>
              <span className={chipClasses}>
                <LocalAirportIcon fontSize="small" /> From Airport (Cab)
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold border border-black hover:bg-transparent hover:text-black transition-all"
              >
                Open in Google Maps
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold border border-gray-300 hover:bg-gray-50 transition-all"
              >
                Get Directions
              </a>
            </div>

            {/* micro-notes */}
            <ul className="mt-4 space-y-1.5 text-xs text-gray-600">
              <li>Tip: Share the link with your driver or use the “Save” ★ option in Maps.</li>
              <li>Arriving in groups? Set the destination point to the main gate for easy pickup.</li>
            </ul>
          </div>

          {/* Right: creative map card */}
          <div className="lg:col-span-3 "> {/* <-- lifted up map */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              {/* decorative floating ring */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
              {/* map iframe */}
              <div className="aspect-[16/10] bg-gray-100">
                <iframe
                  title="Sri Sairam Engineering College Map"
                  src="https://www.google.com/maps?q=Sri+Sairam+Engineering+College&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>

              {/* bottom strip with a subtle note */}
              <div className="px-4 py-3 bg-white/90 border-t border-gray-200 text-sm text-gray-700 flex flex-wrap items-center justify-between gap-2">
                <span>
                  Pin set to{" "}
                  <span className="font-medium">Sri Sairam Engineering College</span>
                </span>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  Start navigation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
