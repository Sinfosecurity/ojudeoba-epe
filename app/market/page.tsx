// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// type BusinessCategory = "Clothing" | "Food" | "Accessories" | "Footwear";

// interface Business {
//   id: number;
//   name: string;
//   description: string;
//   category: BusinessCategory;
//   image: string;
// }

// const categoryColors: Record<BusinessCategory, string> = {
//   Clothing: "from-pink-500 to-rose-600",
//   Food: "from-amber-400 to-orange-600",
//   Accessories: "from-indigo-500 to-purple-600",
//   Footwear: "from-emerald-500 to-teal-600",
// };

// const businesses: Business[] = [
//   {
//     id: 1,
//     name: "Epe Fabrics & Textiles",
//     description:
//       "Selling quality Aso-Oke, Ankara, and lace materials for all your occasions.",
//     category: "Clothing",
//     image: "/epe-03.jpg",
//   },
//   {
//     id: 2,
//     name: "Royal Kitchen Delicacies",
//     description: "Catering native Epe dishes with a taste of royalty.",
//     category: "Food",
//     image: "/epe-04.jpg",
//   },
//   {
//     id: 3,
//     name: "Eko Jewelry House",
//     description: "Exquisite traditional and modern jewelry collections.",
//     category: "Accessories",
//     image: "/epe-05.jpg",
//   },
//   {
//     id: 4,
//     name: "Oba Footwears",
//     description: "Stylish handcrafted footwear inspired by Yoruba culture.",
//     category: "Footwear",
//     image: "/epe-06.jpg",
//   },
// ];

// export default function MarketplacePage() {
//   const [query, setQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [animateCards, setAnimateCards] = useState(false);

//   const categories = [
//     "All",
//     ...Array.from(new Set(businesses.map((biz) => biz.category))),
//   ];

//   const filtered = businesses.filter(
//     (biz) =>
//       (biz.name.toLowerCase().includes(query.toLowerCase()) ||
//         biz.category.toLowerCase().includes(query.toLowerCase())) &&
//       (selectedCategory === "All" || biz.category === selectedCategory)
//   );

//   useEffect(() => {
//     setAnimateCards(true);
//     const timeout = setTimeout(() => setAnimateCards(false), 500);
//     return () => clearTimeout(timeout);
//   }, [query, selectedCategory]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 py-10">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         {[...Array(5)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white/5 backdrop-blur-sm"
//             style={{
//               width: `${Math.random() * 200 + 100}px`,
//               height: `${Math.random() * 200 + 100}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, 15, 0],
//             }}
//             transition={{
//               duration: Math.random() * 8 + 10,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <main className="max-w-6xl mx-auto px-4 py-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
//             Marketplace
//           </h1>
//           <p className="text-lg text-white/80 max-w-2xl mx-auto">
//             Discover authentic Epe cultural products and services from our
//             trusted local vendors
//           </p>
//         </motion.div>

//         {/* Search and filter section */}
//         <div className="mb-12 space-y-6">
//           <motion.div
//             className="flex justify-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="relative w-full max-w-md">
//               <input
//                 type="text"
//                 placeholder="Search by business or category..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="w-full px-6 py-4 border-0 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/90 backdrop-blur-sm text-purple-900 placeholder-purple-400"
//               />
//               <div className="absolute right-3 top-3 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </motion.div>

//           {/* Category filters */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-3"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             {categories.map((category, index) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
//                   selectedCategory === category
//                     ? "bg-white text-purple-700 shadow-lg"
//                     : "bg-white/20 text-white hover:bg-white/30"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * index + 0.4 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </motion.div>
//         </div>

//         {/* Businesses grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filtered.length > 0 ? (
//             filtered.map((biz, index) => (
//               <motion.div
//                 key={biz.id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: animateCards ? 0.1 * index : 0 },
//                 }}
//                 whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                 className="rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-white/20"
//               >
//                 <div className="relative">
//                   <Image
//                     src={biz.image}
//                     alt={biz.name}
//                     width={400}
//                     height={250}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div
//                     className={`absolute top-4 right-4 bg-gradient-to-r ${
//                       categoryColors[biz.category]
//                     } px-4 py-1 rounded-full text-white text-xs font-medium shadow-lg`}
//                   >
//                     {biz.category}
//                   </div>
//                 </div>
//                 <div className="p-6 space-y-3">
//                   <h2 className="text-2xl font-bold text-white">{biz.name}</h2>
//                   <p className="text-white/80">{biz.description}</p>
//                   <div className="pt-4 flex justify-between items-center">
//                     <div className="flex space-x-1">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5 text-yellow-300"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <motion.button
//                       className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-medium shadow-lg"
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Visit Details
//                     </motion.button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <motion.div
//               className="col-span-3 text-center py-20"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 max-w-md mx-auto">
//                 <div className="text-5xl mb-4">🔍</div>
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   No results found
//                 </h3>
//                 <p className="text-white/70">
//                   Try adjusting your search or filter to find what you&apos;re
//                   looking for
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </div>

//         {/* Featured section */}
//         <motion.div
//           className="mt-20 bg-gradient-to-r from-purple-900/60 to-indigo-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex flex-col md:flex-row gap-8 items-center">
//             <div className="md:w-1/2">
//               <h2 className="text-3xl font-bold text-white mb-4">
//                 Join Our Marketplace
//               </h2>
//               <p className="text-white/80 mb-6">
//                 Are you a local vendor or business owner? Showcase your products
//                 and services to thousands of visitors during the Ojude Oba
//                 festival.
//               </p>
//               <motion.button
//                 className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Register Your Business
//               </motion.button>
//             </div>
//             <div className="md:w-1/2 bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
//               <ul className="space-y-4">
//                 <li className="flex gap-3 items-start">
//                   <div className="bg-green-400 rounded-full p-1">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-white"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-white/90">
//                     Reach thousands of festival attendees
//                   </span>
//                 </li>
//                 <li className="flex gap-3 items-start">
//                   <div className="bg-green-400 rounded-full p-1">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-white"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-white/90">
//                     Showcase your cultural products and services
//                   </span>
//                 </li>
//                 <li className="flex gap-3 items-start">
//                   <div className="bg-green-400 rounded-full p-1">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-white"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-white/90">
//                     Connect with both locals and tourists
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type BusinessCategory = "Clothing" | "Food" | "Accessories" | "Footwear";

interface Business {
  id: number;
  name: string;
  description: string;
  category: BusinessCategory;
  image: string;
}

const categoryColors: Record<BusinessCategory, string> = {
  Clothing: "from-amber-500 to-yellow-600",
  Food: "from-amber-400 to-orange-500",
  Accessories: "from-amber-500 to-yellow-600",
  Footwear: "from-amber-500 to-orange-500",
};

const businesses: Business[] = [
  {
    id: 1,
    name: "Epe Fabrics & Textiles",
    description:
      "Selling quality Aso-Oke, Ankara, and lace materials for all your occasions.",
    category: "Clothing",
    image: "/epe-03.jpg",
  },
  {
    id: 2,
    name: "Royal Kitchen Delicacies",
    description: "Catering native Epe dishes with a taste of royalty.",
    category: "Food",
    image: "/epe-04.jpg",
  },
  {
    id: 3,
    name: "Eko Jewelry House",
    description: "Exquisite traditional and modern jewelry collections.",
    category: "Accessories",
    image: "/epe-05.jpg",
  },
  {
    id: 4,
    name: "Oba Footwears",
    description: "Stylish handcrafted footwear inspired by Yoruba culture.",
    category: "Footwear",
    image: "/epe-06.jpg",
  },
];

export default function MarketplacePage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animateCards, setAnimateCards] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(businesses.map((biz) => biz.category))),
  ];

  const filtered = businesses.filter(
    (biz) =>
      (biz.name.toLowerCase().includes(query.toLowerCase()) ||
        biz.category.toLowerCase().includes(query.toLowerCase())) &&
      (selectedCategory === "All" || biz.category === selectedCategory)
  );

  useEffect(() => {
    setAnimateCards(true);
    const timeout = setTimeout(() => setAnimateCards(false), 500);
    return () => clearTimeout(timeout);
  }, [query, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 py-10">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400/10 to-amber-300/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Number.POSITIVE_INFINITY,
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
            Marketplace
          </h1>
          <p className="text-lg text-amber-800/80 max-w-2xl mx-auto">
            Discover authentic Epe cultural products and services from our
            trusted local vendors
          </p>
        </motion.div>

        {/* Search and filter section */}
        <div className="mb-12 space-y-6">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search by business or category..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-6 py-4 border-0 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white/90 backdrop-blur-sm text-amber-900 placeholder-amber-400"
              />
              <div className="absolute right-3 top-3 bg-gradient-to-r from-amber-500 to-yellow-500 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Category filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-amber-500 text-white shadow-lg"
                    : "bg-amber-100/50 text-amber-800 hover:bg-amber-200/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.4 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Businesses grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((biz, index) => (
              <motion.div
                key={biz.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: animateCards ? 0.1 * index : 0 },
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-100/70 to-amber-200/70 backdrop-blur-md border border-amber-300/50"
              >
                <div className="relative">
                  <Image
                    src={biz.image || "/placeholder.svg"}
                    alt={biz.name}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <div
                    className={`absolute top-4 right-4 bg-gradient-to-r ${
                      categoryColors[biz.category]
                    } px-4 py-1 rounded-full text-white text-xs font-medium shadow-lg`}
                  >
                    {biz.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h2 className="text-2xl font-bold text-amber-800">
                    {biz.name}
                  </h2>
                  <p className="text-amber-800/80">{biz.description}</p>
                  <div className="pt-4 flex justify-between items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-amber-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <motion.button
                      className="px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full text-white text-sm font-medium shadow-lg"
                      whileTap={{ scale: 0.95 }}
                    >
                      Visit Details
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
              <div className="bg-amber-100/70 backdrop-blur-md rounded-2xl p-10 max-w-md mx-auto border border-amber-300/50">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-2">
                  No results found
                </h3>
                <p className="text-amber-800/70">
                  Try adjusting your search or filter to find what you&apos;re
                  looking for
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Featured section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-md rounded-3xl p-8 border border-amber-300/50 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-800 mb-4">
                Join Our Marketplace
              </h2>
              <p className="text-amber-800/80 mb-6">
                Are you a local vendor or business owner? Showcase your products
                and services to thousands of visitors during the Ojude Oba
                festival.
              </p>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Your Business
              </motion.button>
            </div>
            <div className="md:w-1/2 bg-amber-100/50 rounded-2xl p-6 backdrop-blur-sm border border-amber-300/30">
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="bg-amber-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
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
                  <span className="text-amber-800/90">
                    Reach thousands of festival attendees
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="bg-amber-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
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
                  <span className="text-amber-800/90">
                    Showcase your cultural products and services
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="bg-amber-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
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
                  <span className="text-amber-800/90">
                    Connect with both locals and tourists
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
