"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Profile data structure
const profiles = [
  // Obas (Kings)
  {
    id: "oba-1",
    name: "Oba Shefiu Olatunji Adewale",
    title: "Oluepe of Epe",
    category: "Oba",
    period: "Current",
    image: "/epe-12.jpg",
    description:
      "The current Oluepe of Epe, His Royal Majesty Oba Shefiu Olatunji Adewale, is the traditional ruler who has overseen significant cultural renaissance and development in the region.",
    achievements: [
      "Revitalization of the Ojude Oba festival",
      "Establishment of the Epe Heritage Foundation",
      "Promotion of tourism and cultural preservation initiatives",
    ],
  },
  {
    id: "oloye-01",
    name: "High Chief Musiliu Adeniyi Kadri",
    title: "Balogun of Epe Kingdom",
    category: "Ijoye",
    period: "1985-2019",
    image: "/epe-07.jpg",
    description:
      "His Royal Majesty Oba Adewale Adedoyin was known for his wisdom and efforts to modernize Epe while preserving its rich cultural heritage.",
    achievements: [
      "Expansion of the Epe traditional council",
      "Promotion of education through royal scholarships",
      "Strengthening of traditional institutions during his tenure",
    ],
  },
  {
    id: "imam-01",
    name: "Imam Sa'dallah Abiola Abdur-Rahman, members of league of Imam, and Ulamah of 1st Epe Central Mosque",
    title: "League of Imama of Epe Kingdom",
    category: "Imam",
    period: "1965-1984",
    image: "/epe-08.jpg",
    description:
      "His Royal Majesty Oba Adekunle Oyekan led Epe through a period of transition and modernization while maintaining traditional governance structures.",
    achievements: [
      "Post-independence stabilization of traditional institutions",
      "Integration of traditional governance with modern administrative systems",
      "Advancement of cultural awareness among youth",
    ],
  },

  // Ijoyes (Chiefs)
  {
    id: "ijoye-02",
    name: "Members of Olu-Epe Council",
    title: "Members of Council of Epe Kingdom",
    category: "Council Members",
    period: "Current",
    image: "/epe-13.jpg",
    description:
      "As the Balogun (War Chief) of Epe, Chief Mustapha Ibrahim serves as the head of traditional security and ceremonial military affairs in the kingdom.",
    responsibilities: [
      "Advisor to the Oba on security matters",
      "Leadership of the palace guard during ceremonies",
      "Organization of traditional militia during festivals",
    ],
  },
  {
    id: "ijoye-2",
    name: "Members of the Young Brothers Club",
    title: "Young Brothers Club",
    category: "Club Members",
    period: "Current",
    image: "/epe-09.jpg",
    description:
      "Chief Adebisi Omotayo holds the title of Otun Olori Ebi, serving as a principal advisor to the Oba and representative of family lineages in the kingdom.",
    responsibilities: [
      "Mediation of family disputes",
      "Preservation of genealogical records",
      "Organization of family representations at royal events",
    ],
  },
  {
    id: "ijoye-3",
    name: "Members of Royal Bundles Club",
    title: "Royal Bundles Club",
    category: "Club Members",
    period: "Current",
    image: "/epe-10.jpg",
    description:
      "Chief Rasheedat Adu serves as the Iyalode, representing women's interests in the traditional council and overseeing women's affairs in the kingdom.",
    responsibilities: [
      "Advocacy for women's development",
      "Organization of women's participation in cultural events",
      "Supervision of market affairs and trade regulations",
    ],
  },

  // Notable figures
  {
    id: "notable-1",
    name: "Dr. Lateef Olayinka",
    title: "Cultural Historian",
    category: "Notable Figure",
    period: "Contemporary",
    image: "/epe-01.jpg",
    description:
      "Dr. Lateef Olayinka has documented and preserved the oral histories and cultural practices of Epe through extensive research and publications.",
    contributions: [
      "Author of 'Epe Kingdom: A Cultural Heritage'",
      "Founder of the Epe Historical Society",
      "Developer of educational materials on Epe's history",
    ],
  },
  {
    id: "notable-2",
    name: "Chief Folashade Olatunji",
    title: "Festival Custodian",
    category: "Notable Figure",
    period: "Contemporary",
    image: "/epe-01.jpg",
    description:
      "Chief Folashade Olatunji has been instrumental in preserving the traditional practices and ceremonies of the Ojude Oba festival.",
    contributions: [
      "Documentation of festival rituals and protocols",
      "Training of younger generations in ceremonial practices",
      "Advocacy for international recognition of the festival",
    ],
  },
];

// Filter options for the gallery
const filters = [
  { value: "all", label: "All Profiles" },
  { value: "Oba", label: "Obas (Kings)" },
  { value: "Ijoye", label: "Ijoyes (Chiefs)" },
  { value: "Imam", label: "Imams" },
  { value: "Notable Figure", label: "Notable Figures" },
];

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Filter profiles based on selected category
  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredProfiles(profiles);
    } else {
      setFilteredProfiles(
        profiles.filter((profile) => profile.category === selectedFilter)
      );
    }
  }, [selectedFilter]);

  // Set page as loaded after initial render
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400/10 to-amber-300/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-700/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/gallery-hero.jpg')] bg-cover bg-center"></div>

        <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
              Royal Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the faces and stories of the traditional rulers, chiefs,
              religious leaders, and notable figures who have shaped Epe&apos;s
              rich cultural heritage
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Filter Controls */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedFilter === filter.value
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isPageLoaded ? "show" : "hidden"}
        >
          {filteredProfiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href={`/gallery/profile/${profile.id}`}>
                <div className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl overflow-hidden border border-amber-300/50 shadow-xl h-full">
                  <div className="h-60 relative overflow-hidden">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-800/80 via-amber-700/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <div className="inline-block px-3 py-1 mb-2 bg-amber-500/70 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                        {profile.category}
                      </div>
                      <h3 className="text-lg font-bold text-white truncate">
                        {profile.name}
                      </h3>
                      <p className="text-amber-200 text-sm">{profile.title}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-amber-800 text-sm line-clamp-3">
                      {profile.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-amber-700 text-xs">
                        {profile.period}
                      </span>
                      <span className="text-amber-700 text-sm flex items-center gap-1 group-hover:text-amber-500 transition-colors">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state when no results */}
        {filteredProfiles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block p-4 rounded-full bg-amber-500/20 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-amber-700 mb-2">
              No profiles found
            </h3>
            <p className="text-amber-800">
              Try selecting a different category or check back later for
              updates.
            </p>
          </motion.div>
        )}
      </main>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-700/60 to-amber-600/60 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-amber-50">
              Join Us in Preserving Our Heritage
            </h2>
            <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
              Help us document and preserve the rich history and cultural
              heritage of Epe by contributing historical photos, stories, or
              information about our traditional rulers and notable figures.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-white font-bold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contribute to Our Archives
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
