import React from "react";
import { Link } from "react-router-dom";
import countrysideworkers from "../../assets/images/countrysideworkers.png";
import { ROUTES } from "../../constants/routes";

export const SupplyChain = () => {
  return (
    <section className="px-5 py-16 sm:py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* TEXT AND BUTTONS */}
        <div className="w-full text-center">
          <h2 className="mx-auto w-full max-w-xs text-xl font-bold leading-tight text-gray-900 sm:max-w-none sm:text-4xl lg:text-3xl">
            Ready to Revolutionize Your Agricultural Supply Chain?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-gray-400 sm:text-lg sm:leading-7">
            Join the most efficient B2B marketplace for agro-allied
            manufacturers and international exporters.
          </p>

          {/* BUTTONS: side by side on mobile (Login / Sign Up), original labels from sm up */}
          <div className="mt-5 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to={ROUTES.login}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-green-50 px-5 py-2.5 text-xs font-semibold text-[#04BE14] transition duration-300 hover:bg-[#04BE14] hover:text-white sm:hidden"
            >
              Login
            </Link>

            <Link
              to={ROUTES.register}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-[#04BE14] px-5 py-2.5 text-xs font-light text-white transition duration-300 hover:bg-[#04be23e6] sm:w-auto sm:flex-none sm:px-7 sm:text-sm"
            >
              <span className="sm:hidden">Sign Up</span>
              <span className="hidden sm:inline">Sell Your Produce</span>
            </Link>

            <Link
              to={ROUTES.login}
              className="hidden items-center justify-center rounded-full px-7 py-2.5 text-sm font-semibold text-gray-400 transition duration-300 hover:bg-[#04BE14] hover:text-white sm:inline-flex sm:w-auto"
            >
              Source Verified Crops
            </Link>
          </div>
        </div>

        {/* FULL-WIDTH IMAGE BELOW THE BUTTONS */}
        <div className="mt-6 w-full sm:mt-14">
          <img
            src={countrysideworkers}
            alt="Farm workers in the countryside"
            className="block h-auto w-full rounded-2xl sm:rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
