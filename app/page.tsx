"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sliderImages = [
  "/epe-12.jpg",
  "/epe-13.jpg",
  "/epe-07.jpg",
  "/epe-08.jpg",
  "/epe-09.jpg",
  "/epe-10.jpg",
  "/epe-01.jpg",
];

const sponsors = [
  "/epe-01.jpg",
  "/epe-01.jpg",
  "/epe-01.jpg",
  "/epe-01.jpg",
  "/epe-01.jpg",
  "/epe-01.jpg",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      {/* Decorative floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400/10 to-amber-300/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20 relative z-10">
        <section className="relative w-full h-[600px] mt-5 overflow-hidden rounded-3xl shadow-2xl">
          {/* Gradient overlay for slider */}
          <div className="absolute inset-0 bg-gradient-to-r z-10"></div>

          <AnimatePresence>
            <motion.div
              key={sliderImages[index]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={sliderImages[index]}
                alt="Ojude Oba Image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center text-white px-6"
            >
              <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
                Welcome to Ojude Oba Epe
              </h1>
              <p className="text-2xl max-w-2xl mx-auto font-light text-white/90 backdrop-blur-sm bg-white/10 p-6 rounded-xl">
                An annual celebration of culture, royal heritage, and the unity
                of the Epe people
              </p>
              <motion.button
                className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Animated dots for slider navigation */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
            {sliderImages.map((_, i) => (
              <motion.button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.2 }}
                animate={{ scale: i === index ? 1.2 : 1 }}
              />
            ))}
          </div>
        </section>

        {/* About Section with Gradient Card */}
        <section className="grid md:grid-cols-2 gap-10 px-4">
          <motion.div
            className="bg-gradient-to-br from-amber-300 to-amber-500 p-8 rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Festival</h2>
            <p className="text-white/90 text-lg">
              Experience the vibrant colors, sounds, and traditions of Ojude
              Oba, a festival that brings together the community in celebration
              of our rich cultural heritage.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-yellow-400 to-amber-600 p-8 rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Join Us</h2>
            <p className="text-white/90 text-lg">
              Be part of this magnificent celebration that dates back
              generations. Immerse yourself in the music, dance, food, and
              traditions that make Ojude Oba special.
            </p>
          </motion.div>
        </section>

        {/* Our Sponsors Section */}
        <section className="overflow-hidden rounded-2xl bg-amber-100/60 backdrop-blur-md p-8 border border-amber-300/50 shadow-xl">
          <h2 className="text-center text-3xl font-bold mb-10 text-amber-700">
            Our Sponsors
          </h2>
          <motion.div
            className="flex space-x-20 px-4 w-max"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...sponsors, ...sponsors].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[120px] h-[80px] bg-white shadow rounded-xl"
              >
                <Image
                  src={logo}
                  alt={`Sponsor ${i + 1}`}
                  width={100}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </section>

        {/* Events section with amber/yellow cards */}
        <section className="px-4">
          <h2 className="text-center text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Opening Ceremony",
                date: "June 15, 2025",
                color: "from-amber-300 to-amber-500",
              },
              {
                title: "Cultural Parade",
                date: "June 16, 2025",
                color: "from-yellow-400 to-amber-500",
              },
              {
                title: "Grand Finale",
                date: "June 18, 2025",
                color: "from-amber-500 to-yellow-600",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                className={`bg-gradient-to-br ${event.color} p-6 rounded-2xl shadow-lg text-white hover:shadow-xl`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-white/90">{event.date}</p>
                <div className="mt-4 flex justify-end">
                  <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer with gradient */}
        {/* <footer className="mt-20 py-10 border-t border-amber-200/20 text-center text-amber-800">
          <p>© 2025 Ojude Oba Epe Festival. All rights reserved.</p>
        </footer> */}
      </main>
    </div>
  );
}
