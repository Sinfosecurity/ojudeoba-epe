"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/history", label: "History" },
  { href: "/royal-heritage", label: "Royal Heritage" },
  { href: "/gallery", label: "Gallery" },
  { href: "/market", label: "Marketplace" },
  { href: "/events", label: "Event" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        staggerChildren: 0.07,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-amber-100/95 backdrop-blur-md shadow-lg py-2 border-b border-amber-200/50"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center shadow-lg relative overflow-hidden">
              <div className="absolute inset-1 bg-amber-50 rounded-full flex items-center justify-center">
                <span className="text-amber-600 font-bold text-xl">OE</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                Ojude Oba Epe
              </h1>
              <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <motion.div
                className={`px-4 py-2 rounded-lg relative text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "text-amber-700"
                    : "text-amber-800/80 hover:text-amber-800"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"
                    layoutId="navIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
          <motion.button
            className="ml-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg text-white font-medium shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Get Tickets
          </motion.button>
        </motion.nav>

        {/* Mobile menu toggle */}
        <motion.button
          className="md:hidden text-amber-800 p-2 rounded-lg bg-amber-200/50 backdrop-blur-sm border border-amber-300/30"
          onClick={toggleMenu}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-gradient-to-b from-amber-100/95 to-amber-200/95 backdrop-blur-md shadow-lg border-t border-amber-200/50"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={menuItemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-base font-medium rounded-lg my-1 ${
                      pathname === link.href
                        ? "bg-gradient-to-r from-amber-200/50 to-amber-300/50 text-amber-700 border-l-4 border-amber-500"
                        : "text-amber-800/80 hover:bg-amber-200/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <button className="w-full mt-2 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg text-white font-medium shadow-md">
                  Get Tickets
                </button>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-amber-500/20 blur-2xl"></div>
            <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-yellow-500/20 blur-2xl"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient backdrop glow */}
      <div className="absolute -z-10 top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-100/50 to-transparent pointer-events-none"></div>
    </header>
  );
}
