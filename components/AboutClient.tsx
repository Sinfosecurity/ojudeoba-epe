"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Festival highlights data
const festivalHighlights = [
  {
    title: "Royal Procession",
    description:
      "Witness the majestic entrance of the Oba and royal families in traditional regalia",
    icon: "👑",
    color: "from-amber-500 to-yellow-600",
  },
  {
    title: "Horse Parade",
    description:
      "Elaborate horse riding display showcasing skilled horsemanship and colorful decorations",
    icon: "🐎",
    color: "from-amber-600 to-amber-700",
  },
  {
    title: "Cultural Performances",
    description:
      "Traditional dances, music and theatrical displays celebrating Epe's rich cultural heritage",
    icon: "🥁",
    color: "from-yellow-500 to-amber-600",
  },
  {
    title: "Family Reunions",
    description:
      "A time for families to gather, reconnect and celebrate their shared heritage together",
    icon: "👨‍👩‍👧‍👦",
    color: "from-amber-400 to-yellow-500",
  },
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 py-10">
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

      <main className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600">
            About Ojude Oba Epe
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Discover the rich cultural heritage and significance of one of
            Nigeria&apos;s most vibrant traditional festivals
          </p>
        </motion.div>

        {/* Navigation tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {["about", "highlights", "faq"].map((section, index) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeSection === section
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index + 0.4 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* About section */}
        {activeSection === "about" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/epe-01.jpg"
                    alt="Ojude Oba Festival celebration"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-amber-700">
                  The Festival of Colors and Culture
                </h2>
                <p className="text-amber-800">
                  What today is known globally as Ojude-Oba Fetival started in
                  Epe in 1853 by the early Muslims in appreciation to Balogun
                  Ajeniya, the man that donated land for the building of the
                  first mosque (Atinin) in the entire Epe Division and beyond in
                  1853. As a sign of respect, Balogun Ajeniya from his house
                  would lead the Muslim faithfuls to Oba Kosoko being the
                  paramount ruler at that time. When Oba Kosoko went back to
                  Lagos Island, the succeeding Baales continue to host the
                  Muslims on the third day of Eid-Il-Kabir thereby giving the
                  day a special name Ojo Iki Baale the special day of paying
                  homage to the Baale.
                </p>
                <p className="text-amber-800">
                  Today, it is now known as Ojude-Oba with the upgrading of
                  Baale to Oba. Ordinary people today believe that Ojude-Oba
                  festival originated from Ijebu-Ode, the home of Ijebu
                  civilization because of the pomp and pageantry of this
                  festival and the colourful appearance of Ijebu sons and
                  daughters at the Ojude-Oba Arena whereas, Ijebu-Ode embraced
                  Islam in 1879 as a result of the spread of Islam from Epe.
                  Just the way it started in Epe, Ojude-Oba started there in
                  Ijebu-Ode in 1892 as homage paying to Awujale Adesunmbo
                  Tunwase, the man that offered the Muslims land where the first
                  mosque in Ijebu-Ode was built.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-2xl p-8 border border-amber-300/50 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-3 bg-gradient-to-r from-amber-400 to-yellow-600 text-transparent bg-clip-text">
                    🎭
                  </div>
                  <h3 className="text-xl font-bold text-amber-700 mb-2">
                    Cultural Preservation
                  </h3>
                  <p className="text-amber-800">
                    Keeping alive traditions and customs that have been passed
                    down through generations
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-transparent bg-clip-text">
                    🤝
                  </div>
                  <h3 className="text-xl font-bold text-amber-700 mb-2">
                    Community Unity
                  </h3>
                  <p className="text-amber-800">
                    Bringing together families, age groups, and visitors to
                    foster social bonds
                  </p>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-transparent bg-clip-text">
                    🌍
                  </div>
                  <h3 className="text-xl font-bold text-amber-700 mb-2">
                    Tourism
                  </h3>
                  <p className="text-amber-800">
                    Attracting visitors from around the world to experience
                    authentic Yoruba culture
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="rounded-2xl overflow-hidden relative h-72"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/epe-01.jpg"
                alt="Panoramic view of Epe during the festival"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-800/80 to-transparent flex items-end">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-amber-50 mb-2">
                    Experience the Magic of Epe
                  </h3>
                  <p className="text-amber-100">
                    Join us for the next Ojude Oba festival and immerse yourself
                    in a celebration of heritage, color, and community
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Highlights Section */}
        {activeSection === "highlights" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {festivalHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-2xl p-6 border border-amber-300/50 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`text-5xl mb-4 bg-gradient-to-r ${highlight.color} text-transparent bg-clip-text`}
                  >
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-700 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-amber-800">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="rounded-xl overflow-hidden h-64 relative shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/epe-01.jpg"
                  alt="Colorful attire at Ojude Oba"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-amber-50 font-bold">Vibrant Attire</h4>
                </div>
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden h-64 relative shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/epe-01.jpg"
                  alt="Traditional dancers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-amber-50 font-bold">
                    Dance Performances
                  </h4>
                </div>
              </motion.div>
              <motion.div
                className="rounded-xl overflow-hidden h-64 relative shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/epe-01.jpg"
                  alt="Traditional drummers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-800/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-amber-50 font-bold">Drumming & Music</h4>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-amber-700/60 to-amber-600/60 backdrop-blur-md rounded-3xl p-8 border border-amber-300/50 shadow-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-amber-50 mb-4">
                Experience the Festival
              </h3>
              <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
                Join us at the next Ojude Oba festival to witness these
                highlights in person and immerse yourself in the rich cultural
                traditions of Epe.
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-white font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register for Updates
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {/* FAQ Section */}
        {activeSection === "faq" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-2xl p-8 border border-amber-300/50 shadow-xl">
              <h2 className="text-3xl font-bold text-amber-700 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {[
                  {
                    question: "When is the Ojude Oba festival celebrated?",
                    answer:
                      "The Ojude Oba festival is traditionally celebrated on the third day after Eid-el-Kabir (Ileya festival). The exact date varies each year according to the Islamic calendar.",
                  },
                  {
                    question: "Who can attend the Ojude Oba festival?",
                    answer:
                      "The festival is open to everyone! Locals, tourists, cultural enthusiasts, and anyone interested in experiencing Yoruba culture are welcome to attend and participate in the celebrations.",
                  },
                  {
                    question: "What should I wear to the festival?",
                    answer:
                      "While there's no strict dress code for visitors, many attendees choose to wear colorful traditional attire. You're welcome to wear comfortable clothing appropriate for the weather, but many find that wearing traditional Nigerian clothing enhances the experience.",
                  },
                  {
                    question:
                      "Are there accommodation options in Epe for visitors?",
                    answer:
                      "Yes, Epe offers a range of accommodation options from hotels to guest houses. During the festival period, it's advisable to book your accommodation well in advance as availability becomes limited.",
                  },
                  {
                    question: "Is photography allowed at the festival?",
                    answer:
                      "Photography is generally allowed and encouraged throughout most of the festival. However, there might be specific ceremonies where photography is restricted out of respect for traditional practices. Always ask for permission when photographing individuals.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-amber-50/50 backdrop-blur-sm rounded-xl p-6 border border-amber-200/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <h3 className="text-xl font-bold text-amber-700 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-amber-800">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-amber-700/60 to-amber-600/60 backdrop-blur-md rounded-3xl p-8 border border-amber-300/30 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-amber-50 mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-amber-100 mb-6">
                    We&apos;re here to help you plan your visit and make the
                    most of your Ojude Oba experience. Reach out to our team for
                    any additional information you might need.
                  </p>
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-white font-bold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-amber-500/20 rounded-full h-32 w-32 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-amber-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Newsletter signup */}
        {/* <motion.div
          className="mt-20 bg-gradient-to-r from-amber-700/60 to-amber-600/60 backdrop-blur-md rounded-3xl p-8 border border-amber-300/30 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-50 mb-4">
              Stay Updated
            </h2>
            <p className="text-amber-100 mb-8">
              Subscribe to our newsletter to receive the latest news, dates, and
              special events related to the Ojude Oba festival in Epe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 border-0 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white/90 backdrop-blur-sm text-amber-900 placeholder-amber-400"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-white font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </main>
    </div>
  );
}
