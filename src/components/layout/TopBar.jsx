import { Search, Heart, Bell } from "lucide-react";
import profileIcon from "../../assets/icons/profileicon.png";

export default function TopBar() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-3 md:px-8">
      <h1 className="shrink-0 text-xl font-semibold text-[#1F2937]">
        Basket Chain
      </h1>

      <div className="relative order-last w-full sm:order-none sm:max-w-md sm:flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="search"
          placeholder="Search products, farmers, location..."
          aria-label="Search"
          className="w-full rounded-full bg-gray-100 py-2 pl-10 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#33C749]"
        />
      </div>

      <div className="flex shrink-0 items-center gap-4 text-gray-600">
        <button aria-label="Saved products">
          <Heart size={20} />
        </button>
        <button aria-label="Notifications">
          <Bell size={20} />
        </button>
        <img
          src={profileIcon}
          alt="Profile"
          className="h-8 w-8 rounded-full bg-gray-300 object-cover"
        />
      </div>
    </header>
  );
}
