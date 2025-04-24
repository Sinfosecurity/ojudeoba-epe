"use client";
import { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

// Royal lineage data
const royalLineage = [
  {
    id: 1,
    name: "Oba Shefiu Olatunji Adewale",
    reign: "1985 - Present",
    title: "Oluepe of Epe",
    image: "/epe-02.jpg",
    bio: "His Royal Majesty Oba Adewale Adesanya has led Epe with wisdom and compassion. Under his reign, the community has seen tremendous cultural revival and modernization while maintaining its rich traditions.",
    achievements: [
      "Established the annual Ojude Oba festival as a national cultural event",
      "Modernized traditional governance structures",
      "Promoted education through royal scholarships",
    ],
  },
  {
    id: 2,
    name: "Oba Kazeem Olatunji",
    reign: "1952 - 1985",
    title: "Oloja of Epe",
    image: "/epe-01.jpg",
    bio: "Oba Kazeem Olatunji guided Epe through the post-independence era with firm leadership. His reign saw major infrastructure development while preserving the cultural integrity of the kingdom.",
    achievements: [
      "Navigated the transition from colonial rule to independence",
      "Established the Royal Museum of Epe",
      "Founded the Council of Epe Kingmakers",
    ],
  },
  {
    id: 3,
    name: "Oba Suleiman Bamgbade",
    reign: "1918 - 1952",
    title: "Oloja of Epe",
    image: "/epe-01.jpg",
    bio: "During his long reign, Oba Suleiman Bamgbade preserved Epe traditions against colonial pressures while adapting to changing times. His diplomatic skills helped maintain Epe's semi-autonomous status.",
    achievements: [
      "Protected traditional land rights during colonial period",
      "Formalized royal ceremonies and protocols",
      "Established trade relations with neighboring kingdoms",
    ],
  },
];

// Royal artifacts data
const royalArtifacts = [
  {
    id: 1,
    name: "Royal Crown (Ade)",
    image: "/epe-01.jpg",
    description:
      "The sacred crown of the Oloja, adorned with coral beads and gold emblems representing authority and divine connection.",
    age: "Over 200 years old",
  },
  {
    id: 2,
    name: "Royal Staff (Opa Ase)",
    image: "/epe-01.jpg",
    description:
      "Symbol of the king's authority and judicial power, this ceremonial staff is used during important proclamations.",
    age: "Approximately 185 years old",
  },
  {
    id: 3,
    name: "Ceremonial Sword",
    image: "/epe-01.jpg",
    description:
      "Used during royal installations, this sword represents the king's role as protector and defender of the kingdom.",
    age: "Early 19th century",
  },
  {
    id: 4,
    name: "Royal Drums (Gbedu)",
    image: "/epe-01.jpg",
    description:
      "These sacred drums are played only during royal ceremonies and are believed to communicate with ancestral spirits.",
    age: "Over 150 years old",
  },
];

// Custom ScrollReveal component
const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

export default function RoyalHeritagePage() {
  const [selectedMonarch, setSelectedMonarch] = useState(royalLineage[0]);
  // const [isPlaying, setIsPlaying] = useState(false);

  // Animation variants for staggered children
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
      <header className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-100/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/royal-palace.jpg')] bg-cover bg-center"></div>

        <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Image
                src="/royal-emblem.svg"
                alt="Royal Emblem"
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
              Royal Heritage
            </h1>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Discover the majestic lineage and cultural legacy of Epe&apos;s
              royal dynasty, guardians of tradition and embodiment of our
              cultural identity
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Royal Lineage Section */}
        <ScrollReveal>
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Royal Lineage
              </h2>
              <p className="text-amber-800 max-w-2xl mx-auto">
                The unbroken line of monarchs who have guided Epe through
                generations, preserving our traditions while adapting to
                changing times
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Monarch Selection */}
              <div className="md:col-span-4 bg-amber-100/60 backdrop-blur-md rounded-2xl p-6 border border-amber-300/50 shadow-xl">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">
                  Monarchs of Epe
                </h3>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {royalLineage.map((monarch) => (
                    <motion.li key={monarch.id} variants={itemVariants}>
                      <button
                        onClick={() => setSelectedMonarch(monarch)}
                        className={`w-full text-left p-4 rounded-xl transition-all ${
                          selectedMonarch.id === monarch.id
                            ? "bg-gradient-to-r from-amber-200/80 to-amber-300/80 border-l-4 border-amber-500"
                            : "hover:bg-amber-200/50"
                        }`}
                      >
                        <div className="font-bold text-amber-800">
                          {monarch.name}
                        </div>
                        <div className="text-amber-600 text-sm">
                          {monarch.reign}
                        </div>
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Monarch Details */}
              <motion.div
                key={selectedMonarch.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-8 bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-300/50 shadow-xl"
              >
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto relative">
                    <Image
                      src={selectedMonarch.image}
                      alt={selectedMonarch.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-800/60 to-transparent flex items-end p-4">
                      <div>
                        <h3 className="text-2xl font-bold text-amber-50">
                          {selectedMonarch.name}
                        </h3>
                        <p className="text-amber-200">
                          {selectedMonarch.title} | {selectedMonarch.reign}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-amber-900">{selectedMonarch.bio}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-amber-700 mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {selectedMonarch.achievements.map(
                          (achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-amber-600 mt-1">•</span>
                              <span className="text-amber-800">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        {/* Royal Artifacts Section */}
        <ScrollReveal delay={0.2}>
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Royal Artifacts
              </h2>
              <p className="text-amber-800 max-w-2xl mx-auto">
                Sacred objects that embody the spiritual and political authority
                of Epe&apos;s monarchy, preserved through generations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {royalArtifacts.map((artifact, index) => (
                <motion.div
                  key={artifact.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-sm rounded-xl overflow-hidden border border-amber-300/50 shadow-lg"
                >
                  <div className="relative h-52">
                    <Image
                      src={artifact.image}
                      alt={artifact.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-amber-700 mb-1">
                      {artifact.name}
                    </h3>
                    <p className="text-sm text-amber-600 mb-3">
                      {artifact.age}
                    </p>
                    <p className="text-amber-800 text-sm">
                      {artifact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Royal Ceremonies Section */}
        <ScrollReveal delay={0.4}>
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Royal Ceremonies
              </h2>
              <p className="text-amber-800 max-w-2xl mx-auto">
                Sacred rituals that connect the monarchy to the spiritual realm
                and reinforce the traditional governance of the kingdom
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src="/epe-01.jpg"
                  alt="Royal Coronation Ceremony"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-amber-200 mb-2">
                    Royal Coronation
                  </h3>
                  <p className="text-amber-50">
                    The sacred ceremony where a new monarch is installed with
                    ancient rituals that connect them to ancestors and deity
                    protectors of the land.
                  </p>
                </div>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50"
                >
                  <h3 className="text-xl font-bold text-amber-700 mb-3">
                    Ipebi Seclusion
                  </h3>
                  <p className="text-amber-800">
                    Before coronation, the king-elect undergoes a period of
                    seclusion called &quot;Ipebi where they learn royal customs,
                    spiritual practices, and receive wisdom from ancestors. This
                    period can last up to three months and is essential for
                    preparing the new monarch for their sacred duties.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50"
                >
                  <h3 className="text-xl font-bold text-amber-700 mb-3">
                    Annual Royal Blessing
                  </h3>
                  <p className="text-amber-800">
                    Each year, the monarch performs rituals to bless the land
                    and ensure prosperity for the kingdom. Citizens gather to
                    receive royal blessings and reaffirm their connection to the
                    traditional governance structure.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50"
                >
                  <h3 className="text-xl font-bold text-amber-700 mb-3">
                    Royal Court Proceedings
                  </h3>
                  <p className="text-amber-800">
                    Weekly court sessions where the king and royal council hear
                    disputes, make proclamations, and discuss matters affecting
                    the kingdom. These sessions maintain the traditional
                    judicial role of the monarchy.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Visit the Palace Section */}
        <ScrollReveal delay={0.6}>
          <section className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/palace.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200/90 to-amber-100/90"></div>

            <div className="relative z-10 py-16 px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                  Visit the Royal Palace
                </h2>
                <p className="text-amber-800 mb-8">
                  Experience the majestic royal palace of Epe, where centuries
                  of history come alive through guided tours, royal exhibitions,
                  and special ceremonies open to the public during the Ojude Oba
                  festival.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-500 rounded-full p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-amber-50"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-amber-800">
                      Guided tours available Tuesday to Sunday, 10am - 4pm
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-500 rounded-full p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-amber-50"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-amber-800">
                      Royal artifact exhibitions in the Palace Museum
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-500 rounded-full p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-amber-50"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-amber-800">
                      Special access to royal courtyards during Ojude Oba
                      festival
                    </span>
                  </div>
                </div>

                <motion.button
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Palace Tour
                </motion.button>
              </div>

              <motion.div
                className="bg-amber-100/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-amber-700 mb-4">
                  Opening Hours
                </h3>
                <div className="space-y-3 text-amber-800">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span>Closed (Royal Court Day)</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-300/30 pb-2">
                    <span>Tuesday - Friday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-300/30 pb-2">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-amber-300/30 pb-2">
                    <span>Sunday</span>
                    <span>12:00 PM - 4:00 PM</span>
                  </div>
                  <p className="pt-2 text-sm italic">
                    * Special hours apply during festival periods and royal
                    ceremonies
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
}
