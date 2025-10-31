import { motion } from "framer-motion";
import MapIcon from "@mui/icons-material/Map";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TempleBuddhistIcon from "@mui/icons-material/TempleBuddhist";
import MuseumIcon from "@mui/icons-material/Museum";
import ParkIcon from "@mui/icons-material/Park";

export default function Nearby() {
  const places = [
    {
      title: "Marina Beach",
      img: "/marina.jpg",
      distance: "22 km",
      time: "~50 min",
      tag: "Seafront",
      icon: <BeachAccessIcon fontSize="small" />,
      maps: "https://www.google.com/maps?q=Marina+Beach+Chennai",
      blurb:
        "Golden sands, breezy evenings, hot bajjis—perfect sunset stroll after sessions.",
    },
    {
      title: "Mahabalipuram",
      img: "/mahabalipuram.jpg",
      distance: "46 km",
      time: "~1 hr 15 min",
      tag: "UNESCO Heritage",
      icon: <TempleBuddhistIcon fontSize="small" />,
      maps: "https://www.google.com/maps?q=Mahabalipuram+Shore+Temple",
      blurb:
        "Rock-cut temples & shore shrines—classic weekend detour on ECR.",
    },
    {
      title: "Kapaleeshwarar Temple",
      img: "/kapaleeshwarar.jpg",
      distance: "23 km",
      time: "~55 min",
      tag: "Heritage",
      icon: <TempleBuddhistIcon fontSize="small" />,
      maps: "https://www.google.com/maps?q=Kapaleeshwarar+Temple+Chennai",
      blurb:
        "Dravidian gopuram, Mylapore’s spiritual heart—culture & coffee nearby.",
    },
    {
      title: "Santhome Basilica",
      img: "/santhome.jpg",
      distance: "23 km",
      time: "~55 min",
      tag: "Cathedral",
      icon: <MuseumIcon fontSize="small" />,
      maps: "https://www.google.com/maps?q=Santhome+Basilica+Chennai",
      blurb:
        "Neo-Gothic white spire by the sea—calm, historic, photogenic.",
    },
    {
      title: "Guindy National Park",
      img: "/guindy.jpg",
      distance: "18 km",
      time: "~40 min",
      tag: "Nature",
      icon: <ParkIcon fontSize="small" />,
      maps: "https://www.google.com/maps?q=Guindy+National+Park",
      blurb:
        "A green pocket in the city—blackbucks, birds & quiet trails.",
    },
    {
      title: "Government Museum",
      img: "/museum.jpg",
      distance: "27 km",
      time: "~1 hr",
      tag: "Museum",
      icon: <MuseumIcon fontSize="small" />,
      maps: "https://www.google.com/maps?q=Government+Museum+Chennai",
      blurb:
        "Sculptures, bronzes, and a deep dive into South Indian art & history.",
    },
  ];

  return (
    <section className="mx-4 my-12 relative">
      {/* Soft background accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          background:
            "radial-gradient(500px 200px at 15% 30%, #22d3ee 0%, transparent 60%), radial-gradient(600px 220px at 85% 70%, #6366F1 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Explore Nearby
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-widest uppercase text-gray-900">
            📍 Weekend-worthy Spots
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Swipe → to browse postcards. Perfect for out-of-state visitors.
          </p>
        </div>

        {/* Pure horizontal scroll area */}
        <div
          className="
            overflow-x-auto 
            overflow-y-hidden 
            snap-x snap-mandatory 
            no-scrollbar 
            pb-2 
            -mx-2 
            px-2 
            scroll-smooth
          "
        >
          <div className="flex gap-6">
            {places.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: i * 0.04,
                }}
                whileHover={{ y: -6 }}
                className="
                  snap-start
                  relative rounded-2xl overflow-hidden
                  border border-gray-200 shadow-sm
                  min-w-[85vw] sm:min-w-[70vw] md:min-w-[55vw] lg:min-w-[40vw]
                  aspect-[16/10] bg-gray-100
                  select-none
                "
              >
                {/* Background image */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Overlay content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 text-gray-900 px-3 py-1 text-xs font-medium">
                    {p.icon}
                    {p.tag}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold drop-shadow">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-white/90 text-sm max-w-[60ch]">
                    {p.blurb}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 text-gray-900 px-3 py-1">
                      <DirectionsCarIcon fontSize="inherit" /> {p.time}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 text-gray-900 px-3 py-1">
                      <DirectionsWalkIcon fontSize="inherit" /> {p.distance}
                    </span>
                    <a
                      href={p.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-black text-white px-3 py-1 font-medium hover:bg-white hover:text-black hover:border hover:border-black transition-colors"
                    >
                      <MapIcon fontSize="inherit" /> Open Map
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Pro tip: Save your favorites in Google Maps ★ and plan a day trip!
        </p>
      </div>
    </section>
  );
}
