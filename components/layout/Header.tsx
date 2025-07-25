"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg sm:text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors touch-manipulation"
            aria-label="GR Group - Go to homepage"
          >
            GR Group
          </Link>

          {/* Desktop Navigation */}
          <Navigation className="hidden md:flex space-x-6 lg:space-x-8" />

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ${isMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
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

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 pb-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <Navigation
            className="flex flex-col space-y-1 pt-4 border-t border-gray-100 [&>a]:py-3 [&>a]:px-3 [&>a]:rounded-md [&>a]:hover:bg-gray-50 [&>a]:touch-manipulation [&>a]:min-h-[44px] [&>a]:flex [&>a]:items-center [&>a]:text-base"
            onItemClick={closeMenu}
          />
        </div>
      </div>
    </header>
  );
}
