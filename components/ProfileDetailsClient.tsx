"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Award, Users, BookOpen } from "lucide-react";

interface Profile {
  id: string;
  name: string;
  title: string;
  category: string;
  period: string;
  image: string;
  description: string;
  fullDescription?: string;
  coronationDate?: string;
  royalFamily?: string;
  achievements?: string[];
  responsibilities?: string[];
  contributions?: string[];
  quote?: string;
}

const profiles: Profile[] = [
  // Obas (Kings)
  {
    id: "oba-1",
    name: "HRM Oba Kamorudeen Animashaun",
    title: "Oloja of Epe",
    category: "Oba",
    period: "Current",
    image: "/oba-current.jpg",
    description:
      "The current Oloja of Epe, His Royal Majesty Oba Kamorudeen Animashaun, is the traditional ruler who has overseen significant cultural renaissance and development in the region.",
    fullDescription:
      "His Royal Majesty Oba Kamorudeen Animashaun ascended to the throne following a rigorous traditional selection process. As the Oloja of Epe, he has been instrumental in revitalizing cultural practices while embracing modern development. Under his leadership, the Ojude Oba festival has gained national recognition and has become a major cultural tourism attraction. His reign has been marked by efforts to preserve traditional knowledge while adapting to contemporary challenges. The Oba has established various initiatives to document oral histories and traditional practices of the Epe kingdom.",
    coronationDate: "March 15, 2019",
    royalFamily: "Animashaun Royal Dynasty",
    achievements: [
      "Revitalization of the Ojude Oba festival",
      "Establishment of the Epe Heritage Foundation",
      "Promotion of tourism and cultural preservation initiatives",
      "Development of educational scholarships for Epe youth",
      "Facilitation of modern infrastructure while preserving historical sites",
    ],
    quote:
      "Our traditions are not relics of the past, but living treasures that guide us into the future.",
  },
  // Add more profile data here to match the gallery profiles
];

export default function ProfileDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [relatedProfiles, setRelatedProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For this example, we're using the mock data
    const profileId = params.id;
    const foundProfile = profiles.find((p) => p.id === profileId);

    // Simulate API loading
    setTimeout(() => {
      if (foundProfile) {
        setProfile(foundProfile);

        // Find related profiles (same category)
        const related = profiles
          .filter(
            (p) =>
              p.category === foundProfile.category && p.id !== foundProfile.id
          )
          .slice(0, 3);
        setRelatedProfiles(related);
      }
      setIsLoading(false);
    }, 800);
  }, [params.id]);

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

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-amber-700 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
          <p className="text-white/80">Loading profile information...</p>
        </div>
      </div>
    );
  }

  // 404 state
  if (!profile && !isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-amber-700 flex items-center justify-center p-4">
        <div className="text-center max-w-lg mx-auto">
          <div className="mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-amber-400 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Profile Not Found
          </h1>
          <p className="text-white/80 mb-6">
            The profile you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link href="/gallery">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white font-bold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Gallery
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-amber-700">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-300/10 to-amber-500/10 backdrop-blur-sm"
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

      <main className="max-w-7xl mx-auto px-4 py-32 relative z-10">
        {/* Back button */}
        <div className="mb-8">
          <motion.button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Gallery
          </motion.button>
        </div>

        {/* Profile Header */}
        <motion.div
          className="bg-gradient-to-br from-amber-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-64 md:h-96 overflow-hidden">
            <Image
              src={profile!.image}
              alt={profile!.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <div className="px-4 py-2 bg-amber-500/70 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                {profile?.category}
              </div>
            </div>

            {/* Profile title */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {profile?.name}
              </h1>
              <p className="text-xl text-amber-300 mb-2">{profile?.title}</p>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-amber-400" />
                  <span>{profile?.period}</span>
                </div>
                {profile?.royalFamily && (
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-amber-400" />
                    <span>{profile?.royalFamily}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            className="md:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* About */}
            <motion.div
              className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-4">
                About
              </h2>
              <div className="text-white/90 space-y-4">
                <p>{profile?.fullDescription || profile?.description}</p>

                {profile?.quote && (
                  <div className="border-l-4 border-amber-500 pl-4 italic text-amber-300 mt-6">
                    {profile?.quote}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Achievements */}
            {profile?.achievements && (
              <motion.div
                className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-4">
                  Notable Achievements
                </h2>
                <ul className="space-y-3">
                  {profile?.achievements?.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Award className="h-5 w-5 text-amber-400" />
                      </div>
                      <span className="text-white/90">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Responsibilities for Ijoye/Imam */}
            {profile?.responsibilities && (
              <motion.div
                className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {profile?.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-amber-400" />
                      </div>
                      <span className="text-white/90">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Contributions for Notable Figures */}
            {profile?.contributions && (
              <motion.div
                className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-4">
                  Contributions to Epe
                </h2>
                <ul className="space-y-3">
                  {profile?.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Award className="h-5 w-5 text-amber-400" />
                      </div>
                      <span className="text-white/90">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Quick Info */}
            <motion.div
              className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-4">
                Quick Information
              </h3>
              <div className="space-y-4">
                {profile?.coronationDate && (
                  <div className="flex items-center gap-3 text-white/80">
                    <Calendar className="h-5 w-5 text-amber-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Coronation Date
                      </p>
                      <p className="text-sm">{profile?.coronationDate}</p>
                    </div>
                  </div>
                )}
                {profile?.royalFamily && (
                  <div className="flex items-center gap-3 text-white/80">
                    <Users className="h-5 w-5 text-amber-400" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Royal Family
                      </p>
                      <p className="text-sm">{profile?.royalFamily}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Related Profiles */}
            {relatedProfiles.length > 0 && (
              <motion.div
                className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-md rounded-xl p-6 border border-amber-500/20 shadow-lg"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-4">
                  Related Profiles
                </h3>
                <div className="space-y-4">
                  {relatedProfiles.map((related) => (
                    <Link href={`/gallery/${related?.id}`} key={related?.id}>
                      <motion.div
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={related?.image}
                            alt={related?.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            {related?.name}
                          </h4>
                          <p className="text-white/60 text-sm">
                            {related?.title}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
