import { useState } from "react";
import {
  LayoutDashboard,
  UsersRound,
  Package,
  ClipboardList,
  ChartNoAxesColumn,
  Settings,
  CircleHelp,
  LogOut,
  MoreHorizontal,
  X,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Users Management", icon: UsersRound },
  { label: "Product Management", icon: Package },
  { label: "Orders Monitor", icon: ClipboardList },
  { label: "Reports", icon: ChartNoAxesColumn },
  { label: "Settings", icon: Settings },
  { label: "Help", icon: CircleHelp },
];

const primaryMobileItems = [
  "Dashboard",
  "Users Management",
  "Product Management",
  "Orders Monitor",
];

export default function AdminSidebar({
  activeItem = "Settings",
  onNavigate,
  mobileOpen = false,
  setMobileOpen,
}) {
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMore = () => {
    setMoreOpen(false);
    setMobileOpen?.(false);
  };

  const handleNavigation = (label) => {
    onNavigate?.(label);
    closeMore();
  };

  const renderNavigationItem = ({ label, icon: Icon }) => {
    const active = activeItem === label;
    const isSettings = label === "Settings";

    return (
      <button
        key={label}
        type="button"
        aria-current={active ? "page" : undefined}
        onClick={() => handleNavigation(label)}
        className={`relative flex h-[43px] w-full items-center gap-4 px-6 text-left text-[13px] transition-colors ${
          isSettings ? "mt-4 border-t border-[#edf0f3] pt-3" : ""
        } ${
          active
            ? "font-medium text-[#24c943]"
            : "text-[#929caf] hover:bg-gray-50 hover:text-[#3a4353]"
        }`}
      >
        {active && (
          <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-[#2dce4e]" />
        )}
        <Icon size={16} strokeWidth={1.8} />
        <span className="whitespace-nowrap">{label}</span>
      </button>
    );
  };

  const moreItems = navigation.filter(
    (item) => !primaryMobileItems.includes(item.label),
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-[calc(100vh-28px)] w-[208px] shrink-0 flex-col rounded-r-[20px] border border-[#e8ebf0] bg-white lg:flex">
        <nav className="mt-4 flex-1 space-y-1">
          {navigation.map(renderNavigationItem)}
        </nav>

        <button
          type="button"
          onClick={() => handleNavigation("Logout")}
          className="mb-6 flex h-12 shrink-0 items-center gap-4 px-6 text-[13px] text-[#ff4048] transition-colors hover:bg-red-50"
        >
          <LogOut size={17} strokeWidth={1.8} />
          Logout
        </button>
      </aside>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-[#e8ebf0] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(0,0,0,0.04)] lg:hidden">
        {primaryMobileItems.map((label) => {
          const item = navigation.find((entry) => entry.label === label);
          const Icon = item.icon;
          const active = activeItem === label;

          return (
            <button
              key={label}
              type="button"
              onClick={() => handleNavigation(label)}
              aria-current={active ? "page" : undefined}
              className={`flex min-w-0 flex-col items-center justify-center gap-1 px-1 py-3 text-[9px] transition-colors ${
                active ? "text-[#24c943]" : "text-[#929caf]"
              }`}
            >
              <Icon size={19} strokeWidth={1.8} />
              <span className="max-w-full truncate">
                {label === "Users Management"
                  ? "Users"
                  : label === "Product Management"
                    ? "Products"
                    : label === "Orders Monitor"
                      ? "Orders"
                      : label}
              </span>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          aria-expanded={moreOpen}
          className={`flex flex-col items-center justify-center gap-1 px-1 py-3 text-[9px] ${
            moreOpen ||
            moreItems.some((item) => item.label === activeItem) ||
            activeItem === "Logout"
              ? "text-[#24c943]"
              : "text-[#929caf]"
          }`}
        >
          <MoreHorizontal size={19} strokeWidth={1.8} />
          <span>More</span>
        </button>
      </nav>

      {/* Mobile More menu */}
      {moreOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMore}
            className="fixed inset-0 z-50 bg-black/30 lg:hidden"
          />

          <section className="fixed inset-x-0 bottom-0 z-[60] rounded-t-2xl border border-[#e8ebf0] bg-white px-4 pb-[calc(16px+env(safe-area-inset-bottom))] pt-3 shadow-2xl lg:hidden">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#3a4353]">
                More options
              </h2>
              <button
                type="button"
                onClick={closeMore}
                aria-label="Close more options"
                className="rounded-lg p-2 text-[#687286] hover:bg-gray-100"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-1">
              {moreItems.map(renderNavigationItem)}

              <button
                type="button"
                onClick={() => handleNavigation("Logout")}
                className="flex h-[43px] w-full items-center gap-4 px-6 text-left text-[13px] text-[#ff4048] hover:bg-red-50"
              >
                <LogOut size={17} strokeWidth={1.8} />
                Logout
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
}
