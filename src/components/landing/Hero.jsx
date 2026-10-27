import Button from "../common/Button";
import { ROUTES } from "../../constants/routes";
import farmer1 from "../../assets/images/landingfarmer1img.png";
import farmer2 from "../../assets/images/landingfarmer2img.png";
import farmer3 from "../../assets/images/landingfarmer3img.png";

// Left to right: farmer3 (left), farmer2 (middle), farmer1 (right)
const photos = [
  {
    id: 3,
    src: farmer3,
    alt: "Farmer with a basket of fresh produce",
    className:
      "-rotate-[10deg] -mr-4 h-36 w-28 sm:-rotate-[14deg] sm:-mr-5 sm:h-56 sm:w-40 md:-mr-10 md:h-80 md:w-60 lg:h-96 lg:w-64",
    // Only this image: scaled up so it fully covers the frame, with no gap at the top-left corner
    imgClassName: "scale-[1.3] object-center",
  },
  {
    id: 2,
    src: farmer2,
    alt: "Farmer holding freshly harvested vegetables",
    className:
      "z-10 h-44 w-32 sm:h-64 sm:w-48 md:h-[22rem] md:w-72 lg:h-[26rem] lg:w-80",
    imgClassName: "object-top",
  },
  {
    id: 1,
    src: farmer1,
    alt: "Farmer holding fresh leafy greens",
    className:
      "rotate-[10deg] -ml-4 h-36 w-28 sm:rotate-[14deg] sm:-ml-5 sm:h-56 sm:w-40 md:-ml-10 md:h-80 md:w-60 lg:h-96 lg:w-64",
    imgClassName: "object-top",
  },
];

export default function Hero() {
  return (
    <section className="bg-white px-5 pb-10 pt-12 text-center sm:pb-0 sm:pt-16 md:px-8 md:pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <p className="order-1 inline-flex items-center gap-2 rounded-full px-4 py-2 pt-0 text-[11px] font-medium text-[#269B38] sm:text-lg">
          Powering verified trade for 100+ Farmers and 50+ Global Buyers.
        </p>

        <h1 className="order-2 mx-auto mt-3 w-full max-w-4xl text-3xl font-bold leading-[1.20] tracking-tight text-black sm:text-5xl md:text-7xl">
          Revolutionizing
          <br />
          Global Agriculture
        </h1>

        <p className="order-3 mx-auto mt-4 w-full max-w-2xl text-xs leading-5 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
          Eliminating middlemen to ensure fair pricing for farmers and
          guaranteed integrity for international buyers.
        </p>

        {/* Photos: before the buttons on mobile, after them from sm up */}
        <div className="order-4 mx-auto mt-6 flex w-full max-w-5xl items-center justify-center px-2 py-4 sm:order-5 sm:mt-20 sm:px-8 sm:py-10">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative shrink-0 overflow-hidden rounded-[28px] border-[6px] border-white bg-gray-100 shadow-[0_4px_20px_3px_rgba(38,155,56,0.30)] ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`block h-full w-full object-cover ${photo.imgClassName}`}
                loading={photo.id === 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Buttons: below the photos on mobile, above them from sm up */}
        <div className="order-5 mt-4 flex flex-row items-center justify-center gap-3 sm:order-4 sm:mt-8 sm:gap-4">
          <Button to={ROUTES.register} className="text-xs sm:text-sm">
            Sell Your Produce
          </Button>

          <Button
            to={ROUTES.login}
            variant="secondary"
            className="border-0 text-xs text-gray-400 sm:text-sm"
          >
            Source Verified Crops
          </Button>
        </div>
      </div>
    </section>
  );
}
