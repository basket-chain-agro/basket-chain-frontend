import React from "react";
import farmerswithphone from "../../assets/images/farmerswithphone.png";

import passportframe from "../../assets/icons/passportframe.png";
import kycframe from "../../assets/icons/kycframe.png";
import directframe from "../../assets/icons/directframe.png";
import mobileframe from "../../assets/icons/mobileframe.png";

export const HowitWorks = () => {
  const howFrame = [
    {
      icon: kycframe,
      title: "Get Verified",
      desc: "Submit your KYC documents for Admin approval to join our trusted network.",
      color: "bg-green-100",
    },
    {
      icon: passportframe,
      title: "List or Discover",
      desc: "Farmers create detailed listings with harvest dates, buyers use advanced filters to find the perfect match.",
      color: "bg-orange-100",
    },
    {
      icon: directframe,
      title: "Negotiate & Quote",
      desc: "Buyers submit RFQs directly to farmers to settle on quantity and price.",
      color: "bg-blue-100",
    },
    {
      icon: mobileframe,
      title: "Secure the Deal",
      desc: "Once accepted, the system generates a professional Order Confirmation with a traceability snapshot.",
      color: "bg-pink-100",
    },
  ];

  return (
    <section className="bg-gray-50 px-5 py-16 sm:py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            How Basket-Chain Works
          </h2>
        </div>

        {/* MOBILE: image on top, cards below. DESKTOP: image left, cards right, close together */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-4">
          {/* FARMERS IMAGE */}
          <div className="w-full min-w-0 overflow-hidden rounded-2xl">
            <img
              src={farmerswithphone}
              alt="Two farmers using a smartphone"
              className="block h-56 w-full object-cover object-top sm:h-72 lg:h-auto lg:object-contain"
              loading="lazy"
            />
          </div>

          {/* FOUR STEP CARDS */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
            {howFrame.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center sm:p-6 sm:text-left"
              >
                {/* ICON: centered on mobile, top right from sm up */}
                <div className="mb-4 flex justify-center sm:justify-end">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color}`}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="h-7 w-7 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-base font-bold leading-6 text-gray-900">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
