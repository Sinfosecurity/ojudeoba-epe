// "use client";
// import { ReactNode } from "react";
// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// interface ScrollRevealProps {
//   children: ReactNode;
//   delay?: number;
// }

// // Timeline data
// const historyTimeline = [
//   {
//     id: 1,
//     year: "Pre-1600s",
//     title: "Indigenous Beginnings",
//     description:
//       "Epe was established as a settlement by indigenous Ijebu people, known for fishing and trading along the Lagos Lagoon.",
//     image: "/history-indigenous.jpg",
//     facts: [
//       "Original settlers were primarily fishermen and farmers",
//       "Early governance was based on family lineage and clan systems",
//       "The region had trading relationships with neighboring communities",
//     ],
//   },
//   {
//     id: 2,
//     year: "1600s",
//     title: "Kingdom Formation",
//     description:
//       "The Epe Kingdom was formally established with the installation of the first recognized Oloja (king), creating a centralized traditional authority.",
//     image: "/history-kingdom.jpg",
//     facts: [
//       "First documented royal dynasty established",
//       "Development of formal traditional governance structures",
//       "Expansion of trade networks across the lagoon region",
//     ],
//   },
//   {
//     id: 3,
//     year: "1800-1851",
//     title: "Era of Expansion",
//     description:
//       "Epe grew significantly as Ijebu refugees fleeing the Owu War settled in the area, bringing new cultural influences and economic activities.",
//     image: "/history-expansion.jpg",
//     facts: [
//       "Population growth from migration of war refugees",
//       "Introduction of new agricultural techniques",
//       "Development of distinctive cultural practices",
//     ],
//   },
//   {
//     id: 4,
//     year: "1851-1892",
//     title: "Age of Resistance",
//     description:
//       "Epe became a center of resistance against British colonial expansion, maintaining independence longer than many neighboring communities.",
//     image: "/history-resistance.jpg",
//     facts: [
//       "Strategic alliances formed with other kingdoms",
//       "Development of defensive systems against colonial forces",
//       "Preservation of traditional governance during colonial pressure",
//     ],
//   },
//   {
//     id: 5,
//     year: "1892-1960",
//     title: "Colonial Period",
//     description:
//       "Following the Ijebu Expedition of 1892, Epe came under British colonial rule but maintained many traditional practices including the monarchy.",
//     image: "/history-colonial.jpg",
//     facts: [
//       "Integration of western education alongside traditional learning",
//       "Adaptation of royal institutions under colonial administration",
//       "Growth of Christian and Muslim communities alongside traditional beliefs",
//     ],
//   },
//   {
//     id: 6,
//     year: "1960-Present",
//     title: "Modern Era",
//     description:
//       "Post-independence, Epe developed as a cultural center while modernizing, balancing traditional governance with contemporary systems.",
//     image: "/history-modern.jpg",
//     facts: [
//       "Formalization of Ojude Oba festival as a major cultural event",
//       "Economic diversification beyond traditional fishing and farming",
//       "Integration of traditional leadership into modern governance structures",
//     ],
//   },
// ];

// // Festival history data
// const festivalHistory = [
//   {
//     id: 1,
//     title: "Sacred Beginnings",
//     period: "Pre-colonial Era",
//     description:
//       "Ojude Oba began as a sacred gathering where community members would honor ancestors and pay homage to the reigning monarch at the palace courtyard (Ojude Oba literally means 'the king's courtyard').",
//     significance:
//       "The festival originated as a spiritual communion between the monarchy, subjects, and ancestral spirits that protected the community.",
//   },
//   {
//     id: 2,
//     title: "Islamic Influence",
//     period: "19th Century",
//     description:
//       "With the growth of Islam in Epe, Muslim converts began using the occasion to pay homage to the Oloja after Eid celebrations, integrating Islamic practices with traditional customs.",
//     significance:
//       "This period marked the syncretic evolution of the festival, blending indigenous practices with Islamic traditions in a unique cultural expression.",
//   },
//   {
//     id: 3,
//     title: "Colonial Adaptation",
//     period: "1892-1960",
//     description:
//       "During colonial rule, the festival adapted to changing political circumstances while serving as a means to preserve cultural identity and strengthen community bonds.",
//     significance:
//       "Ojude Oba became a symbol of cultural resistance and preservation during a period of significant external pressure on traditional institutions.",
//   },
//   {
//     id: 4,
//     title: "Post-Independence Revival",
//     period: "1960-1985",
//     description:
//       "Following Nigerian independence, Ojude Oba experienced a revival as communities embraced cultural heritage. The festival expanded with more elaborate performances and participation.",
//     significance:
//       "This era saw the transformation of Ojude Oba from a primarily religious ceremony to a broader cultural celebration of Epe's heritage.",
//   },
//   {
//     id: 5,
//     title: "Contemporary Celebration",
//     period: "1985-Present",
//     description:
//       "Under the reign of Oba Adewale Adesanya, Ojude Oba has evolved into a major cultural festival attracting tourists, government recognition, and broader participation.",
//     significance:
//       "Today's festival balances authentic cultural traditions with contemporary elements, serving as both cultural preservation and economic stimulus.",
//   },
// ];

// // Cultural elements data
// const culturalElements = [
//   {
//     id: 1,
//     name: "Regberegbe Age Grades",
//     image: "/culture-regberegbe.jpg",
//     description:
//       "Organized age groups that participate in the festival, each with distinctive attire and representing different generations within the community.",
//   },
//   {
//     id: 2,
//     name: "Durbar Procession",
//     image: "/culture-durbar.jpg",
//     description:
//       "A colorful parade featuring horsemen in traditional regalia, demonstrating riding skills and paying homage to the Oloja.",
//   },
//   {
//     id: 3,
//     name: "Traditional Music",
//     image: "/culture-music.jpg",
//     description:
//       "Bata drums, sekere, and other indigenous instruments accompany cultural performances and processions throughout the festival.",
//   },
//   {
//     id: 4,
//     name: "Royal Tribute",
//     image: "/culture-tribute.jpg",
//     description:
//       "The formal presentation of gifts and prayers to the monarch by various community groups, families, and associations.",
//   },
// ];

// // Custom ScrollReveal component
// const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay }}
//       viewport={{ once: true, margin: "-100px" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default function HistoryPage() {
//   const [selectedPeriod, setSelectedPeriod] = useState(historyTimeline[5]);
//   const [activeTab, setActiveTab] = useState("timeline");

//   // Animation variants for staggered children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-amber-700">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-yellow-300/10 to-amber-500/10 backdrop-blur-sm"
//             style={{
//               width: `${Math.random() * 300 + 100}px`,
//               height: `${Math.random() * 300 + 100}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               x: [0, 10, 0],
//               scale: [1, 1.05, 1],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 15,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Hero Section */}
//       <header className="relative h-[500px] overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/90 z-10"></div>
//         <div className="absolute inset-0 bg-[url('/epe-01.jpg')] bg-cover bg-center"></div>

//         <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             {/* <motion.div
//               className="inline-block mb-6"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
//             >
//               <Image
//                 src="/history-scroll.jpg"
//                 alt="History Scroll"
//                 width={120}
//                 height={120}
//                 className="mx-auto"
//               />
//             </motion.div> */}
//             <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
//               Our Rich History
//             </h1>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               Journey through time and discover the captivating story of Epe and
//               the origins of the renowned Ojude Oba festival
//             </p>
//           </motion.div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
//         {/* Navigation Tabs */}
//         <div className="flex justify-center mb-16">
//           <div className="inline-flex rounded-lg p-1 bg-indigo-900/50 backdrop-blur-sm">
//             <button
//               onClick={() => setActiveTab("timeline")}
//               className={`px-6 py-3 rounded-lg font-medium ${
//                 activeTab === "timeline"
//                   ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
//                   : "text-white/70 hover:text-white"
//               } transition-all`}
//             >
//               Town History
//             </button>
//             <button
//               onClick={() => setActiveTab("festival")}
//               className={`px-6 py-3 rounded-lg font-medium ${
//                 activeTab === "festival"
//                   ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
//                   : "text-white/70 hover:text-white"
//               } transition-all`}
//             >
//               Festival Origins
//             </button>
//             <button
//               onClick={() => setActiveTab("cultural")}
//               className={`px-6 py-3 rounded-lg font-medium ${
//                 activeTab === "cultural"
//                   ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
//                   : "text-white/70 hover:text-white"
//               } transition-all`}
//             >
//               Cultural Elements
//             </button>
//           </div>
//         </div>

//         {/* Town History Timeline Section */}
//         {activeTab === "timeline" && (
//           <ScrollReveal>
//             <section className="mb-24">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
//                   The History of Epe
//                 </h2>
//                 <p className="text-white/80 max-w-2xl mx-auto">
//                   From its indigenous roots to the vibrant cultural center it is
//                   today, explore the rich historical journey of Epe through the
//                   centuries
//                 </p>
//               </div>

//               <div className="grid md:grid-cols-12 gap-8 items-start">
//                 {/* Timeline Selection */}
//                 <div className="md:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
//                   <h3 className="text-xl font-semibold text-white mb-4">
//                     Historical Timeline
//                   </h3>
//                   <motion.ul
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true }}
//                     className="space-y-2"
//                   >
//                     {historyTimeline.map((period) => (
//                       <motion.li key={period.id} variants={itemVariants}>
//                         <button
//                           onClick={() => setSelectedPeriod(period)}
//                           className={`w-full text-left p-4 rounded-xl transition-all ${
//                             selectedPeriod.id === period.id
//                               ? "bg-gradient-to-r from-amber-600/50 to-amber-800/50 border-l-4 border-amber-400"
//                               : "hover:bg-white/5"
//                           }`}
//                         >
//                           <div className="font-bold text-white">
//                             {period.title}
//                           </div>
//                           <div className="text-amber-300/90 text-sm">
//                             {period.year}
//                           </div>
//                         </button>
//                       </motion.li>
//                     ))}
//                   </motion.ul>
//                 </div>

//                 {/* Period Details */}
//                 <motion.div
//                   key={selectedPeriod.id}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="md:col-span-8 bg-gradient-to-br from-amber-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl"
//                 >
//                   <div className="grid md:grid-cols-2">
//                     <div className="h-64 md:h-auto relative">
//                       <Image
//                         src={selectedPeriod.image}
//                         alt={selectedPeriod.title}
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                         <div>
//                           <h3 className="text-2xl font-bold text-white">
//                             {selectedPeriod.title}
//                           </h3>
//                           <p className="text-amber-300">
//                             {selectedPeriod.year}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6 space-y-4">
//                       <p className="text-white/90">
//                         {selectedPeriod.description}
//                       </p>
//                       <div>
//                         <h4 className="text-lg font-semibold text-amber-300 mb-2">
//                           Key Historical Facts
//                         </h4>
//                         <ul className="space-y-2">
//                           {selectedPeriod.facts.map((fact, index) => (
//                             <li key={index} className="flex items-start gap-2">
//                               <span className="text-amber-300 mt-1">•</span>
//                               <span className="text-white/80">{fact}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </section>
//           </ScrollReveal>
//         )}

//         {/* Festival Origins Section */}
//         {activeTab === "festival" && (
//           <ScrollReveal>
//             <section className="mb-24">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
//                   Origins of Ojude Oba
//                 </h2>
//                 <p className="text-white/80 max-w-2xl mx-auto">
//                   The evolution of Epe&apos;s most celebrated cultural festival,
//                   from sacred royal tradition to international cultural showcase
//                 </p>
//               </div>

//               <div className="space-y-16">
//                 {festivalHistory.map((era, index) => (
//                   <motion.div
//                     key={era.id}
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     className={`flex flex-col ${
//                       index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                     } gap-8 items-center`}
//                   >
//                     <div className="md:w-1/2">
//                       <div className="bg-gradient-to-br from-amber-900/30 to-purple-900/30 backdrop-blur-md rounded-xl overflow-hidden border border-amber-500/20 shadow-lg p-6">
//                         <div className="text-amber-300 text-sm font-medium mb-2">
//                           {era.period}
//                         </div>
//                         <h3 className="text-2xl font-bold text-white mb-4">
//                           {era.title}
//                         </h3>
//                         <p className="text-white/80 mb-4">{era.description}</p>
//                         <div className="bg-amber-900/30 rounded-lg p-4 border-l-4 border-amber-400">
//                           <h4 className="text-amber-300 font-medium mb-2">
//                             Historical Significance
//                           </h4>
//                           <p className="text-white/90 italic">
//                             {era.significance}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden shadow-lg">
//                       <Image
//                         src={`/festival-history-${era.id}.jpg`}
//                         alt={era.title}
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </section>
//           </ScrollReveal>
//         )}

//         {/* Cultural Elements Section */}
//         {activeTab === "cultural" && (
//           <ScrollReveal>
//             <section className="mb-24">
//               <div className="text-center mb-12">
//                 <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
//                   Cultural Elements
//                 </h2>
//                 <p className="text-white/80 max-w-2xl mx-auto">
//                   The distinctive traditions and practices that make Ojude Oba
//                   Epe a unique cultural celebration with deep historical roots
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 {culturalElements.map((element, index) => (
//                   <motion.div
//                     key={element.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="group"
//                   >
//                     <div className="relative h-64 rounded-t-xl overflow-hidden">
//                       <Image
//                         src={element.image}
//                         alt={element.name}
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
//                       <div className="absolute bottom-0 left-0 right-0 p-4">
//                         <h3 className="text-xl font-bold text-amber-300">
//                           {element.name}
//                         </h3>
//                       </div>
//                     </div>
//                     <div className="bg-gradient-to-br from-amber-900/30 to-purple-900/30 backdrop-blur-md p-5 rounded-b-xl border border-amber-500/20 border-t-0">
//                       <p className="text-white/90">{element.description}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </section>
//           </ScrollReveal>
//         )}

//         {/* Did You Know Section */}
//         <ScrollReveal delay={0.4}>
//           <section className="mb-24">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
//                 Historical Insights
//               </h2>
//               <p className="text-white/80 max-w-2xl mx-auto">
//                 Fascinating facts and stories about Epe and the Ojude Oba
//                 festival that reveal the depth of our cultural heritage
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
//               >
//                 <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-purple-900"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-amber-300 mb-3">
//                   Name Origin
//                 </h3>
//                 <p className="text-white/80">
//                   The name {"Ojude Oba"} literally translates to THE KING&apos;s
//                   COURTYARD in Yoruba, reflecting the festival&apos;s origins as
//                   a gathering of subjects at the palace to pay homage to their
//                   monarch.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
//               >
//                 <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-purple-900"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-amber-300 mb-3">
//                   Resistance History
//                 </h3>
//                 <p className="text-white/80">
//                   During colonial times, the Ojude Oba festival served as a
//                   subtle form of resistance, allowing the community to maintain
//                   traditional governance structures and cultural practices
//                   despite external pressures.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="bg-gradient-to-br from-amber-900/20 to-purple-900/20 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
//               >
//                 <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-purple-900"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-amber-300 mb-3">
//                   Cultural Fusion
//                 </h3>
//                 <p className="text-white/80">
//                   Epe&apos;s strategic location made it a melting pot of Yoruba,
//                   Ijebu, and Awori cultural influences, with the Ojude Oba
//                   festival incorporating elements from all these traditions in
//                   its celebrations.
//                 </p>
//               </motion.div>
//             </div>
//           </section>
//         </ScrollReveal>

//         {/* Learn More / Educational Resources Section */}
//         <ScrollReveal delay={0.6}>
//           <section className="relative rounded-3xl overflow-hidden">
//             <div className="absolute inset-0 bg-[url('/epe-01.jpg')] bg-cover bg-center"></div>
//             <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80"></div>

//             <div className="relative z-10 py-16 px-8 md:px-16">
//               <div className="max-w-3xl">
//                 <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
//                   Explore Our History Further
//                 </h2>
//                 <p className="text-white/90 mb-8">
//                   Dive deeper into the rich history of Epe and the Ojude Oba
//                   festival through our curated educational resources, research
//                   materials, and community archives.
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-6 mb-8">
//                   <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
//                     <h3 className="text-lg font-semibold text-amber-300 mb-2">
//                       Oral History Project
//                     </h3>
//                     <p className="text-white/80 text-sm mb-4">
//                       Listen to recorded interviews with elders sharing stories
//                       and memories of Epe&apos;s past and festival celebrations
//                       from decades ago.
//                     </p>
//                     <motion.button
//                       className="text-amber-300 font-medium flex items-center gap-2 hover:text-amber-200 transition-colors"
//                       whileHover={{ x: 5 }}
//                     >
//                       Access Recordings
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </motion.button>
//                   </div>

//                   <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
//                     <h3 className="text-lg font-semibold text-amber-300 mb-2">
//                       Historical Photo Archives
//                     </h3>
//                     <p className="text-white/80 text-sm mb-4">
//                       Browse through digitized historical photographs
//                       documenting Epe&apos;s development and Ojude Oba
//                       celebrations through the decades.
//                     </p>
//                     <motion.button
//                       className="text-amber-300 font-medium flex items-center gap-2 hover:text-amber-200 transition-colors"
//                       whileHover={{ x: 5 }}
//                     >
//                       View Archives
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </motion.button>
//                   </div>
//                 </div>

//                 <div className="bg-indigo-900/40 backdrop-blur-md rounded-xl p-6 border border-indigo-500/20">
//                   <h3 className="text-xl font-semibold text-amber-300 mb-3">
//                     Heritage Center
//                   </h3>
//                   <p className="text-white/90 mb-4">
//                     Visit our community Heritage Center where we preserve
//                     historical documents, artifacts, and educational materials
//                     related to Epe&apos;s history and the Ojude Oba festival.
//                   </p>
//                   <div className="flex flex-col md:flex-row gap-4">
//                     <div className="flex items-center gap-3">
//                       <div className="bg-amber-400 rounded-full p-1">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-purple-900"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-white/90 text-sm">
//                         15 Palace Road, Epe
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="bg-amber-400 rounded-full p-1">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 text-purple-900"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-white/90 text-sm">
//                         Wed-Sun, 10am-5pm
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <motion.button
//                   className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Plan Your Visit
//                 </motion.button>
//               </div>
//             </div>
//           </section>
//         </ScrollReveal>

//         {/* Interactive Timeline */}
//         <ScrollReveal delay={0.2}>
//           <section className="mb-24">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
//                 Interactive Timeline
//               </h2>
//               <p className="text-white/80 max-w-2xl mx-auto">
//                 Trace the key moments in Epe&apos;s history and the evolution of
//                 the Ojude Oba festival through this visual timeline
//               </p>
//             </div>

//             <div className="relative">
//               {/* Timeline line */}
//               <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600"></div>

//               {/* Timeline events */}
//               <div className="space-y-24 relative">
//                 {[...Array(5)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: i * 0.1 }}
//                     className={`flex items-center ${
//                       i % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                     }`}
//                   >
//                     {/* Content */}
//                     <div
//                       className={`w-5/12 ${
//                         i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
//                       }`}
//                     >
//                       <div className="inline-block mb-2 px-3 py-1 bg-amber-500/20 rounded-full text-amber-300 text-sm">
//                         {i === 0 && "1600s"}
//                         {i === 1 && "1850s"}
//                         {i === 2 && "1890s"}
//                         {i === 3 && "1950s"}
//                         {i === 4 && "2000s"}
//                       </div>
//                       <h3 className="text-xl font-bold text-white mb-2">
//                         {i === 0 && "Kingdom Establishment"}
//                         {i === 1 && "Early Festival Formations"}
//                         {i === 2 && "Colonial Adaptations"}
//                         {i === 3 && "Post-Independence Revival"}
//                         {i === 4 && "International Recognition"}
//                       </h3>
//                       <p className="text-white/80">
//                         {i === 0 &&
//                           "Formation of Epe as an organized kingdom with established royal lineage and traditional governance structures."}
//                         {i === 1 &&
//                           "Early formalization of tributes to the king evolving into more structured ceremonial practices."}
//                         {i === 2 &&
//                           "Adaptation of traditional celebrations under colonial influence while preserving cultural identity."}
//                         {i === 3 &&
//                           "Renewed emphasis on cultural heritage and expansion of festival activities and participation."}
//                         {i === 4 &&
//                           "Ojude Oba Epe gains recognition as a major cultural festival attracting international attention."}
//                       </p>
//                     </div>

//                     {/* Center node */}
//                     <div className="w-2/12 flex justify-center">
//                       <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full border-4 border-indigo-900 shadow-lg shadow-amber-500/30 z-10"></div>
//                     </div>

//                     {/* Image */}
//                     <div className={`w-5/12 ${i % 2 === 0 ? "pl-8" : "pr-8"}`}>
//                       <div className="h-40 md:h-52 rounded-xl overflow-hidden shadow-lg">
//                         <div className="relative h-full">
//                           <Image
//                             src={`/timeline-${i + 1}.jpg`}
//                             alt={`Historical period ${i + 1}`}
//                             fill
//                             className="object-cover"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </ScrollReveal>
//       </main>
//     </div>
//   );
// }

"use client";
import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

// Timeline data
const historyTimeline = [
  {
    id: 1,
    year: "Pre-1600s",
    title: "Indigenous Beginnings",
    description:
      "Epe was established as a settlement by indigenous Ijebu people, known for fishing and trading along the Lagos Lagoon.",
    image: "/history-indigenous.jpg",
    facts: [
      "Original settlers were primarily fishermen and farmers",
      "Early governance was based on family lineage and clan systems",
      "The region had trading relationships with neighboring communities",
    ],
  },
  {
    id: 2,
    year: "1600s",
    title: "Kingdom Formation",
    description:
      "The Epe Kingdom was formally established with the installation of the first recognized Oloja (king), creating a centralized traditional authority.",
    image: "/history-kingdom.jpg",
    facts: [
      "First documented royal dynasty established",
      "Development of formal traditional governance structures",
      "Expansion of trade networks across the lagoon region",
    ],
  },
  {
    id: 3,
    year: "1800-1851",
    title: "Era of Expansion",
    description:
      "Epe grew significantly as Ijebu refugees fleeing the Owu War settled in the area, bringing new cultural influences and economic activities.",
    image: "/history-expansion.jpg",
    facts: [
      "Population growth from migration of war refugees",
      "Introduction of new agricultural techniques",
      "Development of distinctive cultural practices",
    ],
  },
  {
    id: 4,
    year: "1851-1892",
    title: "Age of Resistance",
    description:
      "Epe became a center of resistance against British colonial expansion, maintaining independence longer than many neighboring communities.",
    image: "/history-resistance.jpg",
    facts: [
      "Strategic alliances formed with other kingdoms",
      "Development of defensive systems against colonial forces",
      "Preservation of traditional governance during colonial pressure",
    ],
  },
  {
    id: 5,
    year: "1892-1960",
    title: "Colonial Period",
    description:
      "Following the Ijebu Expedition of 1892, Epe came under British colonial rule but maintained many traditional practices including the monarchy.",
    image: "/history-colonial.jpg",
    facts: [
      "Integration of western education alongside traditional learning",
      "Adaptation of royal institutions under colonial administration",
      "Growth of Christian and Muslim communities alongside traditional beliefs",
    ],
  },
  {
    id: 6,
    year: "1960-Present",
    title: "Modern Era",
    description:
      "Post-independence, Epe developed as a cultural center while modernizing, balancing traditional governance with contemporary systems.",
    image: "/history-modern.jpg",
    facts: [
      "Formalization of Ojude Oba festival as a major cultural event",
      "Economic diversification beyond traditional fishing and farming",
      "Integration of traditional leadership into modern governance structures",
    ],
  },
];

// Festival history data
const festivalHistory = [
  {
    id: 1,
    title: "Sacred Beginnings",
    period: "Pre-colonial Era",
    description:
      "Ojude Oba began as a sacred gathering where community members would honor ancestors and pay homage to the reigning monarch at the palace courtyard (Ojude Oba literally means 'the king's courtyard').",
    significance:
      "The festival originated as a spiritual communion between the monarchy, subjects, and ancestral spirits that protected the community.",
  },
  {
    id: 2,
    title: "Islamic Influence",
    period: "19th Century",
    description:
      "With the growth of Islam in Epe, Muslim converts began using the occasion to pay homage to the Oloja after Eid celebrations, integrating Islamic practices with traditional customs.",
    significance:
      "This period marked the syncretic evolution of the festival, blending indigenous practices with Islamic traditions in a unique cultural expression.",
  },
  {
    id: 3,
    title: "Colonial Adaptation",
    period: "1892-1960",
    description:
      "During colonial rule, the festival adapted to changing political circumstances while serving as a means to preserve cultural identity and strengthen community bonds.",
    significance:
      "Ojude Oba became a symbol of cultural resistance and preservation during a period of significant external pressure on traditional institutions.",
  },
  {
    id: 4,
    title: "Post-Independence Revival",
    period: "1960-1985",
    description:
      "Following Nigerian independence, Ojude Oba experienced a revival as communities embraced cultural heritage. The festival expanded with more elaborate performances and participation.",
    significance:
      "This era saw the transformation of Ojude Oba from a primarily religious ceremony to a broader cultural celebration of Epe's heritage.",
  },
  {
    id: 5,
    title: "Contemporary Celebration",
    period: "1985-Present",
    description:
      "Under the reign of Oba Adewale Adesanya, Ojude Oba has evolved into a major cultural festival attracting tourists, government recognition, and broader participation.",
    significance:
      "Today's festival balances authentic cultural traditions with contemporary elements, serving as both cultural preservation and economic stimulus.",
  },
];

// Cultural elements data
const culturalElements = [
  {
    id: 1,
    name: "Regberegbe Age Grades",
    image: "/culture-regberegbe.jpg",
    description:
      "Organized age groups that participate in the festival, each with distinctive attire and representing different generations within the community.",
  },
  {
    id: 2,
    name: "Durbar Procession",
    image: "/culture-durbar.jpg",
    description:
      "A colorful parade featuring horsemen in traditional regalia, demonstrating riding skills and paying homage to the Oloja.",
  },
  {
    id: 3,
    name: "Traditional Music",
    image: "/culture-music.jpg",
    description:
      "Bata drums, sekere, and other indigenous instruments accompany cultural performances and processions throughout the festival.",
  },
  {
    id: 4,
    name: "Royal Tribute",
    image: "/culture-tribute.jpg",
    description:
      "The formal presentation of gifts and prayers to the monarch by various community groups, families, and associations.",
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

export default function HistoryPage() {
  const [selectedPeriod, setSelectedPeriod] = useState(historyTimeline[5]);
  const [activeTab, setActiveTab] = useState("timeline");

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
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <header className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-100/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/epe-01.jpg')] bg-cover bg-center"></div>

        <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <Image
                src="/history-scroll.jpg"
                alt="History Scroll"
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div> */}
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
              Our Rich History
            </h1>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Journey through time and discover the captivating story of Epe and
              the origins of the renowned Ojude Oba festival
            </p>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-lg p-1 bg-amber-100/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("timeline")}
              className={`px-6 py-3 rounded-lg font-medium ${
                activeTab === "timeline"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-amber-800/70 hover:text-amber-800"
              } transition-all`}
            >
              Town History
            </button>
            <button
              onClick={() => setActiveTab("festival")}
              className={`px-6 py-3 rounded-lg font-medium ${
                activeTab === "festival"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-amber-800/70 hover:text-amber-800"
              } transition-all`}
            >
              Festival Origins
            </button>
            <button
              onClick={() => setActiveTab("cultural")}
              className={`px-6 py-3 rounded-lg font-medium ${
                activeTab === "cultural"
                  ? "bg-amber-500 text-white shadow-lg"
                  : "text-amber-800/70 hover:text-amber-800"
              } transition-all`}
            >
              Cultural Elements
            </button>
          </div>
        </div>

        {/* Town History Timeline Section */}
        {activeTab === "timeline" && (
          <ScrollReveal>
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                  The History of Epe
                </h2>
                <p className="text-amber-800/80 max-w-2xl mx-auto">
                  From its indigenous roots to the vibrant cultural center it is
                  today, explore the rich historical journey of Epe through the
                  centuries
                </p>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Timeline Selection */}
                <div className="md:col-span-4 bg-amber-100/70 backdrop-blur-md rounded-2xl p-6 border border-amber-300/50 shadow-xl">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">
                    Historical Timeline
                  </h3>
                  <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    {historyTimeline.map((period) => (
                      <motion.li key={period.id} variants={itemVariants}>
                        <button
                          onClick={() => setSelectedPeriod(period)}
                          className={`w-full text-left p-4 rounded-xl transition-all ${
                            selectedPeriod.id === period.id
                              ? "bg-gradient-to-r from-amber-400/50 to-amber-500/50 border-l-4 border-amber-400"
                              : "hover:bg-amber-200/50"
                          }`}
                        >
                          <div className="font-bold text-amber-800">
                            {period.title}
                          </div>
                          <div className="text-amber-700/90 text-sm">
                            {period.year}
                          </div>
                        </button>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Period Details */}
                <motion.div
                  key={selectedPeriod.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-8 bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-300/50 shadow-xl"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-auto relative">
                      <Image
                        src={selectedPeriod.image || "/placeholder.svg"}
                        alt={selectedPeriod.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {selectedPeriod.title}
                          </h3>
                          <p className="text-amber-300">
                            {selectedPeriod.year}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-amber-800">
                        {selectedPeriod.description}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-amber-700 mb-2">
                          Key Historical Facts
                        </h4>
                        <ul className="space-y-2">
                          {selectedPeriod.facts.map((fact, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-amber-700 mt-1">•</span>
                              <span className="text-amber-800/80">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Festival Origins Section */}
        {activeTab === "festival" && (
          <ScrollReveal>
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                  Origins of Ojude Oba
                </h2>
                <p className="text-amber-800/80 max-w-2xl mx-auto">
                  The evolution of Epe&apos;s most celebrated cultural festival,
                  from sacred royal tradition to international cultural showcase
                </p>
              </div>

              <div className="space-y-16">
                {festivalHistory.map((era, index) => (
                  <motion.div
                    key={era.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8 items-center`}
                  >
                    <div className="md:w-1/2">
                      <div className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl overflow-hidden border border-amber-300/50 shadow-lg p-6">
                        <div className="text-amber-700 text-sm font-medium mb-2">
                          {era.period}
                        </div>
                        <h3 className="text-2xl font-bold text-amber-800 mb-4">
                          {era.title}
                        </h3>
                        <p className="text-amber-800/80 mb-4">
                          {era.description}
                        </p>
                        <div className="bg-amber-500/20 rounded-lg p-4 border-l-4 border-amber-400">
                          <h4 className="text-amber-700 font-medium mb-2">
                            Historical Significance
                          </h4>
                          <p className="text-amber-800 italic">
                            {era.significance}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={`/festival-history-${era.id}.jpg`}
                        alt={era.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Cultural Elements Section */}
        {activeTab === "cultural" && (
          <ScrollReveal>
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                  Cultural Elements
                </h2>
                <p className="text-amber-800/80 max-w-2xl mx-auto">
                  The distinctive traditions and practices that make Ojude Oba
                  Epe a unique cultural celebration with deep historical roots
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {culturalElements.map((element, index) => (
                  <motion.div
                    key={element.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative h-64 rounded-t-xl overflow-hidden">
                      <Image
                        src={element.image || "/placeholder.svg"}
                        alt={element.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-amber-300">
                          {element.name}
                        </h3>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md p-5 rounded-b-xl border border-amber-300/50 border-t-0">
                      <p className="text-amber-800">{element.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Did You Know Section */}
        <ScrollReveal delay={0.4}>
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Historical Insights
              </h2>
              <p className="text-amber-800/80 max-w-2xl mx-auto">
                Fascinating facts and stories about Epe and the Ojude Oba
                festival that reveal the depth of our cultural heritage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50 shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-3">
                  Name Origin
                </h3>
                <p className="text-amber-800/80">
                  The name {"Ojude Oba"} literally translates to THE KING&apos;s
                  COURTYARD in Yoruba, reflecting the festival&apos;s origins as
                  a gathering of subjects at the palace to pay homage to their
                  monarch.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50 shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-3">
                  Resistance History
                </h3>
                <p className="text-amber-800/80">
                  During colonial times, the Ojude Oba festival served as a
                  subtle form of resistance, allowing the community to maintain
                  traditional governance structures and cultural practices
                  despite external pressures.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50 shadow-lg"
              >
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-700 mb-3">
                  Cultural Fusion
                </h3>
                <p className="text-amber-800/80">
                  Epe&apos;s strategic location made it a melting pot of Yoruba,
                  Ijebu, and Awori cultural influences, with the Ojude Oba
                  festival incorporating elements from all these traditions in
                  its celebrations.
                </p>
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        {/* Learn More / Educational Resources Section */}
        <ScrollReveal delay={0.6}>
          <section className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/epe-01.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700/60 to-amber-600/60"></div>

            <div className="relative z-10 py-16 px-8 md:px-16">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                  Explore Our History Further
                </h2>
                <p className="text-amber-100 mb-8">
                  Dive deeper into the rich history of Epe and the Ojude Oba
                  festival through our curated educational resources, research
                  materials, and community archives.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">
                      Oral History Project
                    </h3>
                    <p className="text-amber-100/80 text-sm mb-4">
                      Listen to recorded interviews with elders sharing stories
                      and memories of Epe&apos;s past and festival celebrations
                      from decades ago.
                    </p>
                    <motion.button
                      className="text-amber-300 font-medium flex items-center gap-2 hover:text-amber-200 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Access Recordings
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </motion.button>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">
                      Historical Photo Archives
                    </h3>
                    <p className="text-amber-100/80 text-sm mb-4">
                      Browse through digitized historical photographs
                      documenting Epe&apos;s development and Ojude Oba
                      celebrations through the decades.
                    </p>
                    <motion.button
                      className="text-amber-300 font-medium flex items-center gap-2 hover:text-amber-200 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Archives
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </motion.button>
                  </div>
                </div>

                <div className="bg-amber-100/70 backdrop-blur-md rounded-xl p-6 border border-amber-300/50">
                  <h3 className="text-xl font-semibold text-amber-700 mb-3">
                    Heritage Center
                  </h3>
                  <p className="text-amber-800 mb-4">
                    Visit our community Heritage Center where we preserve
                    historical documents, artifacts, and educational materials
                    related to Epe&apos;s history and the Ojude Oba festival.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-400 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-amber-800"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-amber-800 text-sm">
                        15 Palace Road, Epe
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-400 rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-amber-800"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-amber-800 text-sm">
                        Wed-Sun, 10am-5pm
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Plan Your Visit
                </motion.button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Interactive Timeline */}
        <ScrollReveal delay={0.2}>
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Interactive Timeline
              </h2>
              <p className="text-amber-800/80 max-w-2xl mx-auto">
                Trace the key moments in Epe&apos;s history and the evolution of
                the Ojude Oba festival through this visual timeline
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600"></div>

              {/* Timeline events */}
              <div className="space-y-24 relative">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`flex items-center ${
                      i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`w-5/12 ${
                        i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div className="inline-block mb-2 px-3 py-1 bg-amber-500/20 rounded-full text-amber-700 text-sm">
                        {i === 0 && "1600s"}
                        {i === 1 && "1850s"}
                        {i === 2 && "1890s"}
                        {i === 3 && "1950s"}
                        {i === 4 && "2000s"}
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-2">
                        {i === 0 && "Kingdom Establishment"}
                        {i === 1 && "Early Festival Formations"}
                        {i === 2 && "Colonial Adaptations"}
                        {i === 3 && "Post-Independence Revival"}
                        {i === 4 && "International Recognition"}
                      </h3>
                      <p className="text-amber-800/80">
                        {i === 0 &&
                          "Formation of Epe as an organized kingdom with established royal lineage and traditional governance structures."}
                        {i === 1 &&
                          "Early formalization of tributes to the king evolving into more structured ceremonial practices."}
                        {i === 2 &&
                          "Adaptation of traditional celebrations under colonial influence while preserving cultural identity."}
                        {i === 3 &&
                          "Renewed emphasis on cultural heritage and expansion of festival activities and participation."}
                        {i === 4 &&
                          "Ojude Oba Epe gains recognition as a major cultural festival attracting international attention."}
                      </p>
                    </div>

                    {/* Center node */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full border-4 border-amber-100 shadow-lg shadow-amber-500/30 z-10"></div>
                    </div>

                    {/* Image */}
                    <div className={`w-5/12 ${i % 2 === 0 ? "pl-8" : "pr-8"}`}>
                      <div className="h-40 md:h-52 rounded-xl overflow-hidden shadow-lg">
                        <div className="relative h-full">
                          <Image
                            src={`/timeline-${i + 1}.jpg`}
                            alt={`Historical period ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
}
