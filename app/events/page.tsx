"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Add these type definitions at the top of the file
type EventCategory =
  | "Main Event"
  | "Performance"
  | "Exclusive"
  | "Family"
  | "Sports";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  category: EventCategory;
  isFeatured: boolean;
}

// Update the categoryColors object with the correct type
const categoryColors: Record<EventCategory, string> = {
  "Main Event": "from-purple-600 to-indigo-700",
  Performance: "from-pink-500 to-rose-600",
  Exclusive: "from-amber-500 to-orange-600",
  Family: "from-teal-500 to-emerald-600",
  Sports: "from-blue-500 to-cyan-600",
};

// Event data
const events: Event[] = [
  {
    id: 1,
    title: "Opening Ceremony",
    date: "June 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Epe Town Square",
    image: "/epe-01.jpg",
    description:
      "The grand opening ceremony featuring royal processions, cultural performances, and the official declaration of the festival by His Royal Majesty.",
    category: "Main Event",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Traditional Dance Competition",
    date: "June 16, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Epe Cultural Center",
    image: "/epe-02.jpg",
    description:
      "Witness spectacular performances as dance troupes compete to showcase the best of Epe's traditional dances. Special prizes for winners.",
    category: "Performance",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Royal Banquet Dinner",
    date: "June 16, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Royal Palace Gardens",
    image: "/epe-01.jpg",
    description:
      "An exclusive dinner with the royal family featuring traditional cuisine and entertainment. Limited tickets available.",
    category: "Exclusive",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Children's Day Cultural Activities",
    date: "June 17, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Epe Community Park",
    image: "/epe-02.jpg",
    description:
      "Fun activities for children including traditional games, storytelling, and arts & crafts that teach about Epe's rich heritage.",
    category: "Family",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Traditional Sports Tournament",
    date: "June 17, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Epe Sports Complex",
    image: "/epe-01.jpg",
    description:
      "Exciting competitions featuring traditional sports like ayo, kokowa wrestling, and more, with community teams competing for honors.",
    category: "Sports",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Grand Parade of Regalia",
    date: "June 18, 2025",
    time: "12:00 PM - 4:00 PM",
    location: "Epe Main Boulevard",
    image: "/epe-02.jpg",
    description:
      "The festival highlight featuring a magnificent parade of royal regalia, horsemen, cultural troupes, and community groups in their finest attire.",
    category: "Main Event",
    isFeatured: true,
  },
  {
    id: 7,
    title: "Music & Cultural Night",
    date: "June 18, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Epe Waterfront Arena",
    image: "/epe-01.jpg",
    description:
      "An enchanting evening of traditional and contemporary musical performances celebrating the cultural heritage of Epe.",
    category: "Performance",
    isFeatured: false,
  },
  {
    id: 8,
    title: "Closing Ceremony & Fireworks",
    date: "June 19, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Epe Town Square",
    image: "/epe-02.jpg",
    description:
      "The grand finale of the festival with special performances, royal blessings, and a spectacular fireworks display over Epe lagoon.",
    category: "Main Event",
    isFeatured: true,
  },
];

// Date grouping for calendar view
const eventDates = [
  {
    date: "June 15, 2025",
    day: "Sunday",
    events: events.filter((e) => e.date === "June 15, 2025"),
  },
  {
    date: "June 16, 2025",
    day: "Monday",
    events: events.filter((e) => e.date === "June 16, 2025"),
  },
  {
    date: "June 17, 2025",
    day: "Tuesday",
    events: events.filter((e) => e.date === "June 17, 2025"),
  },
  {
    date: "June 18, 2025",
    day: "Wednesday",
    events: events.filter((e) => e.date === "June 18, 2025"),
  },
  {
    date: "June 19, 2025",
    day: "Thursday",
    events: events.filter((e) => e.date === "June 19, 2025"),
  },
];

export default function EventsPage() {
  const [activeView, setActiveView] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDate, setSelectedDate] = useState("All");
  // Update the state declarations
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Add proper typing to the event handlers

  const categories = [
    "All",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  const filteredEvents = events.filter(
    (event) =>
      (selectedCategory === "All" || event.category === selectedCategory) &&
      (selectedDate === "All" || event.date === selectedDate) &&
      (activeView !== "featured" || event.isFeatured)
  );
  const openEventModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // const closeEventModal = () => {
  //   setIsModalOpen(false);
  // };

  // Container and item variants for staggered animations
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
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-pink-600">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-700/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/events-banner.jpg')] bg-cover bg-center"></div>

        <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-100">
              Festival Events
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore the schedule of exciting events during the Ojude Oba
              Festival, from royal ceremonies to cultural performances and
              community celebrations
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* View Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
            {[
              { id: "featured", label: "Featured Events" },
              { id: "all", label: "All Events" },
              { id: "calendar", label: "Calendar View" },
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeView === view.id
                    ? "bg-white text-purple-700 font-medium shadow"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {activeView !== "calendar" && (
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="bg-purple-900 text-white"
                  >
                    {category}
                  </option>
                ))}
              </select>
            )}

            {activeView !== "calendar" && (
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="All" className="bg-purple-900 text-white">
                  All Dates
                </option>
                {eventDates.map(({ date }) => (
                  <option
                    key={date}
                    value={date}
                    className="bg-purple-900 text-white"
                  >
                    {date}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Featured Events View */}
        {activeView === "featured" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Hero Featured Event */}
            <motion.div variants={itemVariants} className="mb-12">
              {events
                .filter((e) => e.id === 6)
                .map((event) => (
                  <div
                    key={event.id}
                    className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
                    onClick={() => openEventModal(event)}
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform group-hover:translate-y-0">
                      <span
                        className={`inline-block px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${
                          categoryColors[event.category]
                        } mb-4`}
                      >
                        {event.category}
                      </span>
                      <h2 className="text-4xl font-bold text-white mb-3">
                        {event.title}
                      </h2>
                      <div className="flex items-center text-white/80 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="mr-4">{event.date}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <p className="text-white/90 max-w-3xl mb-6">
                        {event.description}
                      </p>
                      <motion.button
                        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-bold shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                ))}
            </motion.div>

            {/* Featured Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents
                .filter((e) => e.id !== 6)
                .map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-lg cursor-pointer"
                    onClick={() => openEventModal(event)}
                  >
                    <div className="relative h-52">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${
                          categoryColors[event.category]
                        }`}
                      >
                        {event.category}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-white">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-white/80 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      <div className="pt-2">
                        <motion.button
                          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

        {/* All Events View */}
        {activeView === "all" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-lg cursor-pointer"
                  onClick={() => openEventModal(event)}
                >
                  <div className="relative h-52">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${
                        categoryColors[event.category]
                      }`}
                    >
                      {event.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-white/70 text-sm line-clamp-3">
                      {event.description}
                    </p>
                    <div className="pt-2">
                      <motion.button
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-3 text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 max-w-md mx-auto">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    No events found
                  </h3>
                  <p className="text-white/70">
                    Try adjusting your filters to find events
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Calendar View */}
        {activeView === "calendar" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-10">
              {eventDates.map((day, index) => (
                <motion.div
                  key={day.date}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-lg"
                >
                  <div className="bg-gradient-to-r from-purple-800 to-blue-700 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {day.date}
                    </h3>
                    <p className="text-white/80">{day.day}</p>
                  </div>
                  <div className="p-6 space-y-6">
                    {day.events.length > 0 ? (
                      day.events.map((event) => (
                        <div
                          key={event.id}
                          className="flex flex-col md:flex-row gap-6 items-center p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer"
                          onClick={() => openEventModal(event)}
                        >
                          <div className="relative w-full md:w-36 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-xl font-bold text-white">
                                {event.title}
                              </h4>
                              <span
                                className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${
                                  categoryColors[event.category]
                                }`}
                              >
                                {event.category}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-white/80 text-sm mb-3">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <p className="text-white/70 text-sm">
                              {event.description.substring(0, 120)}...
                            </p>
                          </div>
                          <motion.button
                            className="flex-shrink-0 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Details
                          </motion.button>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-white/70">
                          No events scheduled for this day
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Get Tickets Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-pink-600/90 to-purple-700/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Your Festival Pass
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Secure your access to all festival events with our convenient
            passes. Choose from single-day passes or the full festival
            experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">Day Pass</h3>
              <div className="text-3xl font-bold text-amber-300 mb-4">
                ₦2,500
              </div>
              <ul className="text-white/80 text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Access to all events for one day
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Festival goodie bag
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Access to food court
                </li>
              </ul>
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Day Pass
              </motion.button>
            </div>

            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-amber-400/50 transform scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-1 rounded-full text-sm font-bold text-white">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Full Festival Pass
              </h3>
              <div className="text-3xl font-bold text-amber-300 mb-4">
                ₦8,000
              </div>
              <ul className="text-white/80 text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Access to all events for 5 days
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  VIP access to royal ceremonies
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exclusive festival merchandise
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Priority seating at performances
                </li>
              </ul>
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Festival Pass
              </motion.button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">
                VIP Experience
              </h3>
              <div className="text-3xl font-bold text-amber-300 mb-4">
                ₦15,000
              </div>
              <ul className="text-white/80 text-sm space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All Festival Pass benefits
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exclusive meet & greet with royalty
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Private guided cultural tours
                </li>
              </ul>
              <motion.button
                className="w-full px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy VIP Pass
              </motion.button>
            </div>
          </div>
          <p className="text-white/60 text-sm">
            * All passes include access to the festival grounds and basic
            amenities. Terms and conditions apply.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
