import React from "react";
import { Link } from "react-router-dom";
import basketchainlogo from "../../assets/logo/basketchainlogo.png";
import Basketchain from "../../assets/images/Basketchain.png";

const headingClass = "mb-3 text-xs font-semibold text-gray-900 sm:hidden";
const listClass =
  "space-y-3 text-center text-xs text-gray-400 sm:text-left sm:text-sm sm:text-gray-600";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* FOOTER CONTENT: centered on mobile, columns from sm up */}
        <div className="grid grid-cols-1 items-start gap-8 pb-6 text-center sm:grid-cols-2 sm:pb-10 sm:text-left lg:grid-cols-4 lg:gap-10">
          {/* BRAND */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-block">
              <img
                src={basketchainlogo}
                alt="BasketChain Logo"
                className="mb-1 h-12 w-auto object-contain"
                loading="lazy"
              />
            </Link>

            <p className="max-w-xs text-center text-[11px] leading-5 text-gray-400 sm:text-left sm:text-sm sm:leading-6 sm:text-gray-500">
              Connecting farmers to global markets.
            </p>
          </div>

          {/* HOME LINKS */}
          <nav aria-label="Main navigation">
            <h4 className={headingClass}>Quick Links</h4>
            <ul className={listClass}>
              <li>
                <Link to="/" className="transition hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="transition hover:text-green-600"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="/#about" className="transition hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="transition hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* FARMER AND BUYER LINKS */}
          <nav aria-label="Marketplace links">
            <h4 className={headingClass}>For Users</h4>
            <ul className={listClass}>
              <li>
                <Link
                  to="/register"
                  className="transition hover:text-green-600"
                >
                  Farmers
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="transition hover:text-green-600"
                >
                  Buyers
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="transition hover:text-green-600"
                >
                  Manufacturers
                </Link>
              </li>
              <li>
                <a href="/#faqs" className="transition hover:text-green-600">
                  FAQs
                </a>
              </li>
            </ul>
          </nav>

          {/* SOCIAL AND CONTACT LINKS */}
          <div>
            <h4 className={headingClass}>Connect with Us</h4>
            <ul className={`${listClass} break-words`}>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-green-600"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-green-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@basketchain.com"
                  className="transition hover:text-green-600"
                >
                  support@basketchain.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349033231342"
                  className="transition hover:text-green-600"
                >
                  +234 903 323 1342
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT: mobile only */}
        <p className="pb-4 text-center text-[10px] text-gray-400 sm:hidden">
          © 2025 Basketchain. All rights reserved.
        </p>
      </div>

      {/* FULL-WIDTH BOTTOM BANNER */}
      <div className="w-full overflow-hidden">
        <img
          src={Basketchain}
          alt="BasketChain"
          className="block h-auto w-full"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
