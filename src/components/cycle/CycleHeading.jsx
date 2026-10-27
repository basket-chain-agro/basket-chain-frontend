import garden_cart from "../../assets/icons/garden_cart.png";
import trolley from "../../assets/icons/trolley.png";
import cyclewoman from "../../assets/images/cyclewoman.png";

export const CycleHeading = () => {
  return (
    <section className="bg-white px-5 py-16 sm:py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 w-full text-center sm:mb-14">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Breaking the Cycle of Inefficiency
          </h2>

          <p className="mx-auto mt-4 w-full text-xs leading-5 text-gray-400 sm:text-base sm:leading-7">
            Traditional supply chains are opaque, costing farmers and buyers up
            to 40% in lost revenue.
          </p>
        </div>

        {/* FARMERS AND BUYERS CARDS */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-8">
          {/* FOR FARMERS */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
            {/* Mobile: icon on top, title centered. sm and up: title left, icon right */}
            <div className="mb-6 flex flex-col-reverse items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
              <h3 className="text-xl font-bold text-gray-900">For Farmers</h3>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 shadow-[0_2px_12px_rgba(38,155,56,0.18)]">
                <img
                  src={garden_cart}
                  alt="Garden cart"
                  className="h-4 w-4 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="flex items-start justify-center gap-3 text-center text-xs leading-5 text-gray-500 sm:justify-start sm:text-left sm:text-base sm:leading-6">
                <span className="mt-2 hidden h-2 w-2 shrink-0 rounded-full bg-green-600 sm:block" />
                No more price exploitation by middlemen.
              </p>

              <p className="flex items-start justify-center gap-3 text-center text-xs leading-5 text-gray-500 sm:justify-start sm:text-left sm:text-base sm:leading-6">
                <span className="mt-2 hidden h-2 w-2 shrink-0 rounded-full bg-green-600 sm:block" />
                Get direct access to high-value markets.
              </p>
            </div>
          </div>

          {/* FOR BUYERS */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
            <div className="mb-6 flex flex-col-reverse items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
              <h3 className="text-xl font-bold text-gray-900">For Buyers</h3>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 shadow-[0_2px_12px_rgba(38,155,56,0.18)]">
                <img
                  src={trolley}
                  alt="Trolley"
                  className="h-4 w-4 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="flex items-start justify-center gap-3 text-center text-xs leading-5 text-gray-500 sm:justify-start sm:text-left sm:text-base sm:leading-6">
                <span className="mt-2 hidden h-2 w-2 shrink-0 rounded-full bg-green-600 sm:block" />
                End the risk of inconsistent quality and fraud.
              </p>

              <p className="flex items-start justify-center gap-3 text-center text-xs leading-5 text-gray-500 sm:justify-start sm:text-left sm:text-base sm:leading-6">
                <span className="mt-2 hidden h-2 w-2 shrink-0 rounded-full bg-green-600 sm:block" />
                Access source-verified produce with a click.
              </p>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH IMAGE — PRESERVES ORIGINAL PROPORTIONS */}
        <div className="mt-10 w-full sm:mt-14">
          <img
            src={cyclewoman}
            alt="Woman representing the agricultural supply chain"
            className="block h-auto w-full rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
