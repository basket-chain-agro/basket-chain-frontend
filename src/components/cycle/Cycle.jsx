import shoppingmode from "../../assets/icons/shoppingmode.png";
import trolley from "../../assets/icons/trolley.png";
import garden_cart from "../../assets/icons/garden_cart.png";
import check_circle from "../../assets/icons/check_circle.png";

import { CycleHeading } from "./CycleHeading";

export default function Cycle() {
  const cycleAssets = [
    {
      icon: garden_cart,
      text: "500+",
      desc: "Active Farmers",
      alt: "Garden cart",
    },
    {
      icon: shoppingmode,
      text: "1000+",
      desc: "Products Listed",
      alt: "Shopping mode",
    },
    {
      icon: trolley,
      text: "1000+",
      desc: "Buyers",
      alt: "Trolley",
    },
    {
      icon: check_circle,
      text: "99.2%",
      desc: "Success Rate",
      alt: "Check mark",
    },
  ];

  return (
    <div>
      <section className="bg-gray-50 px-5 py-10 sm:py-14">
        <div className="mx-auto flex max-w-6xl justify-center">
          <div className="grid w-full grid-cols-2 sm:grid-cols-4">
            {cycleAssets.map((item, index) => (
              <div
                key={item.desc}
                className="relative flex flex-col items-center justify-center px-3 py-5 text-center"
              >
                {/* SHORT, BOLD VERTICAL SEPARATOR */}
                {index !== 0 && (
                  <span
                    className={`absolute left-0 top-1/2 hidden h-8 w-0.75 -translate-y-1/2 rounded-full bg-[#269B38] sm:block ${
                      index === 2 || index === 3 ? "" : ""
                    }`}
                    aria-hidden="true"
                  />
                )}

                {/* MOBILE SEPARATOR — SHORT AND BOLD */}
                {index % 2 !== 0 && (
                  <span
                    className="absolute left-0 top-1/2 h-8 w-0.75 -translate-y-1/2 rounded-full bg-[#269B38] sm:hidden"
                    aria-hidden="true"
                  />
                )}

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_2px_14px_rgba(38,155,56,0.25)]">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="h-4 w-4 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  {item.text}
                </h3>

                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CycleHeading />
    </div>
  );
}
