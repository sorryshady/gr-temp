import Link from "next/link";
import { SITE_CONFIG, NAVIGATION_ITEMS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-2">
            <Link 
              href="/" 
              className="font-serif text-xl sm:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
              aria-label="GR Group - Go to homepage"
            >
              GR Group
            </Link>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-4 sm:mt-6">
              <a 
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-sm sm:text-base text-gray-700 hover:text-gray-900 font-medium transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
                aria-label={`Send email to ${SITE_CONFIG.email}`}
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-labelledby="footer-navigation">
            <h3 id="footer-navigation" className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors touch-manipulation block py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <nav aria-labelledby="social-links">
            <h3 id="social-links" className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors touch-manipulation py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
                  aria-label="Visit GR Group on LinkedIn (opens in new tab)"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors touch-manipulation py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
                  aria-label="Visit GR Group on Instagram (opens in new tab)"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.926 3.708 13.775 3.708 12.478s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.213c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.315.315.49.753.49 1.243 0 .49-.175.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors touch-manipulation py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
                  aria-label="Visit GR Group on Twitter (opens in new tab)"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} GR Group. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex space-x-4 sm:space-x-6">
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}