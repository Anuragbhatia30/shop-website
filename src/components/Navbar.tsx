"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  // Defensive check for pathname
  const currentPath = typeof pathname === "string" ? pathname : null;

  return (
    <nav
      className="sticky top-0 z-50 shadow-lg"
      style={{ backgroundColor: "#047857" }}
    >
      <div className="max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex  flex-col items-center text-white font-bold text-xl tracking-wide">
            Kamal Electric Trading Co.{' '}
            
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                tabIndex={0}
                aria-label={item.name}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    currentPath === item.path
                      ? "bg-white text-blue-600 shadow-md"
                      : "text-white hover:bg-white hover:text-blue-600"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-2 pt-2 pb-3 space-y-1"
          style={{ backgroundColor: "#059669" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              tabIndex={0}
              aria-label={item.name}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
                ${
                  currentPath === item.path
                    ? "bg-white text-blue-600 shadow-md"
                    : "text-white hover:bg-white hover:text-blue-600"
                }
              `}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
