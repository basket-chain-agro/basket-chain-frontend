import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBasket,
  ClipboardList,
  Heart,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

// Shared buyer navigation. Agree the paths below with the other developers.
const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/marketplace", label: "Marketplace", icon: ShoppingBasket },
  { to: "/orders", label: "Orders", icon: ClipboardList },
  { to: "/wishlist", label: "Wishlist", icon: Heart },
  { to: "/messages", label: "Messages", icon: MessageSquare },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/help", label: "Help", icon: HelpCircle },
];

export default function BuyerNav({ onLogout }) {
  return (
    <nav
      aria-label="Buyer navigation"
      className="fixed bottom-0 left-0 z-20 flex w-full justify-around bg-white -p-2 md:bottom-auto md:left-2 md:top-24 md:h-[calc(100vh-7rem)] md:w-20 md:flex-col md:items-center md:justify-start md:gap-3 md:overflow-y-auto md:rounded-3xl md:py-4 md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden [@media(min-height:760px)]:md:gap-5 [@media(min-height:900px)]:md:gap-8 [@media(min-height:900px)]:md:py-6"
    >
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          title={label}
          aria-label={label}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center md:w-full"
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="absolute left-0 top-1/2 hidden h-8 w-1 -translate-y-1/2 rounded-r-full bg-[#33C749] md:block" />
              )}
              <Icon
                size={22}
                strokeWidth={1.75}
                className={
                  isActive
                    ? "text-[#33C749]"
                    : "text-gray-400 hover:text-gray-600"
                }
              />
            </>
          )}
        </NavLink>
      ))}

      <button
        onClick={onLogout}
        title="Log out"
        aria-label="Log out"
        className="flex h-10 w-10 shrink-0 items-center justify-center md:mt-auto md:w-full"
      >
        <LogOut size={22} strokeWidth={1.75} className="text-red-500" />
      </button>
    </nav>
  );
}
