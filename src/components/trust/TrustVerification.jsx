import React from "react";

import passportframe from "../../assets/icons/passportframe.png";
import kycframe from "../../assets/icons/kycframe.png";
import directframe from "../../assets/icons/directframe.png";
import mobileframe from "../../assets/icons/mobileframe.png";

export const TrustVerification = () => {
  const trustFrame = [
    {
      icon: passportframe,
      title: "Digital Passport (Traceability)",
      desc: "Every listing is tied to a unique Lot/Batch ID, ensuring you know exactly where your food comes from.",
      color: "bg-orange-100",
    },
    {
      icon: kycframe,
      title: "Mandatory KYC",
      desc: "We set the gold standard by verifying every farm's location via GPS and offical documentation.",
      color: "bg-green-100",
    },
    {
      icon: directframe,
      title: "Direct RFQ System",
      desc: "Initiate transactions through a formal Request for Quote process with immutable audit trails.",
      color: "bg-blue-100",
    },
    {
      icon: mobileframe,
      title: "Mobile-First Design",
      desc: "Optimized for easy use by farmers in the field and procurement managers in the office.",
      color: "bg-pink-100",
    },
  ];

  return (
    <section className="bg-white px-5 py-16 sm:py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Built on Trust and Verification
          </h2>
        </div>

        {/* TRUST AND VERIFICATION CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 sm:gap-8">
          {trustFrame.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5 sm:p-8"
            >
              {/* Mobile: icon on top, title centered. sm and up: title left, icon right */}
              <div className="mb-4 flex flex-col-reverse items-center gap-3 text-center sm:mb-6 sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
                <h3 className="text-md font-bold text-gray-900">
                  {item.title}
                </h3>

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.color} shadow-[0_2px_12px_rgba(38,155,56,0.18)]`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="text-center text-xs leading-5 text-gray-500 sm:text-left sm:text-base sm:leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
