"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products Gallery", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const currentPath = typeof pathname === "string" ? pathname : null;

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-white/10 bg-emerald-900/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform duration-300">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-tighter leading-none group-hover:text-emerald-400 transition-colors">
                KAMAL ELECTRIC
              </span>
              <span className="text-emerald-400/60 text-[10px] font-bold uppercase tracking-[0.3em] leading-none mt-1">
                Trading Co.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="relative px-5 py-2.5 group"
              >
                <span
                  className={`relative z-10 text-sm font-bold tracking-wide transition-colors duration-300 ${
                    currentPath === item.path
                      ? "text-emerald-400"
                      : "text-emerald-50/80 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
                {currentPath === item.path && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-emerald-800/40 rounded-full border border-emerald-500/20 shadow-inner"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <div className="absolute inset-x-5 bottom-0 h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>

          {/* <div className="hidden lg:block ml-6">
            <Link 
                href="/contact" 
                className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-black px-6 py-3 rounded-full shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
            >
                GET QUOTE
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed inset-0 top-20 z-40 bg-slate-800 lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="flex flex-col bg-slate-900"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center justify-between p-5 border-b border-white/5 transition-all duration-300 ${
                      currentPath === item.path
                        ? "bg-emerald-950/30 text-emerald-400 border-l-4 border-l-emerald-500 pl-4"
                        : "bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white border-l-4 border-l-transparent pl-4"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-xl font-bold">{item.name}</span>
                    <Zap
                      className={`w-5 h-5 ${currentPath === item.path ? "opacity-100" : "opacity-0"}`}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <Link
                  href="/contact"
                  className="w-full bg-emerald-500 text-white p-5 rounded-2xl flex items-center justify-center font-black text-lg gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  CONTACT US <Zap className="fill-white" />
                </Link>
              </motion.div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
