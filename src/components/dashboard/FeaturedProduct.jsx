

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import useMockFetch from "../../hooks/useMockFetch";
import StateMessage from "../common/StateMessage";
import prettysavasproductimg from "../../assets/images/prettysavasproductimg.png";
import tomatojosimg from "../../assets/images/tomatojosimg.png";
import senkesricesimg from "../../assets/images/senkesricesimg.png";
import agricfowlimg from "../../assets/images/agricfowlimg.png";
import jakeavatar from "../../assets/icons/jakeavatar.png";
import johnavatar from "../../assets/icons/jeckersonavatar.png";
import jeckersonavatar from "../../assets/icons/jeckersonavatar.png";

const products = [
  {
    id: 1,
    name: "Pretty Savas",
    image: prettysavasproductimg,
    farm: "Jake's Farm",
    avatar: jakeavatar,
    location: "Abuja",
    price: 24000,
    unit: "20kg",
    available: 650,
  },
  {
    id: 2,
    name: "Tomato Jos",
    image: tomatojosimg,
    farm: "John's Farm",
    avatar: johnavatar,
    location: "Lagos",
    price: 50000,
    unit: "140kg",
    available: 650,
  },
  {
    id: 3,
    name: "Senkes Rice",
    image: senkesricesimg,
    farm: "John's Farm",
    avatar: johnavatar,
    location: "Lagos",
    price: 70000,
    unit: "Bag",
    available: 650,
  },
  {
    id: 4,
    name: "Agric Fowl",
    image: agricfowlimg,
    farm: "Jeckerson's Farm",
    avatar: jeckersonavatar,
    location: "Ogun",
    price: 25000,
    unit: "Bird",
    available: 650,
  },
];

const ProductCard = ({ product }) => {
  const [saved, setSaved] = useState(false);

  return (
    <article className="w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm md:w-80">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover md:h-44"
        />
        <button
          onClick={() => setSaved(!saved)}
          aria-label={saved ? "Remove from saved" : "Save product"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white"
        >
          <Heart
            size={16}
            className={saved ? "fill-red-500 text-red-500" : "text-gray-600"}
          />
        </button>
      </div>

      <div className="space-y-2 p-3">
        <h3 className="font-semibold text-[#1F2937]">{product.name}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          {product.avatar ? (
            <img
              src={product.avatar}
              alt={product.farm}
              className="h-5 w-5 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-xs font-medium text-green-700">
              {product.farm[0]}
            </span>
          )}
          <span>{product.farm}</span>
          <MapPin size={14} />
          <span>{product.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-medium text-[#33C749]">
            ₦{product.price.toLocaleString()}/{product.unit}
          </p>
          <p className="text-xs text-gray-500">
            {product.available}kg Available
          </p>
        </div>

        {/* Agree the product details route with the team */}
        <Link
          to={`/products/${product.id}`}
          className="block rounded-lg bg-[#33C749] py-2 text-center text-sm font-medium text-white hover:bg-green-600"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

const FeaturedProducts = () => {
  const scrollRef = useRef(null);
  const { status, data, retry } = useMockFetch(products);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  const hasProducts = status === "success" && data.length > 0;

  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Featured Products
        </h2>
        <Link
          to="/marketplace"
          className="flex shrink-0 items-center gap-1 text-sm text-gray-600 hover:text-green-600"
        >
          View all Products <ChevronRight size={16} />
        </Link>
      </div>

      {!hasProducts ? (
        <StateMessage
          status={status}
          emptyText="No featured products yet."
          onRetry={retry}
        />
      ) : (
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <button
            onClick={scrollRight}
            aria-label="Scroll right"
            className="absolute right-0 top-1/4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 shadow hover:bg-green-200"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
