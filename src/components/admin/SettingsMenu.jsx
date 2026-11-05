import {
  Settings,
  UserRoundCog,
  Bell,
  LockKeyhole,
  ChevronRight,
} from "lucide-react";

const settingsItems = [
  { label: "Platform Settings", icon: Settings },
  { label: "Admin Accounts", icon: UserRoundCog },
  { label: "Notifications", icon: Bell },
  { label: "Security", icon: LockKeyhole },
];

export default function SettingsMenu({ activeTab, onChange }) {
  return (
    <div className="w-full lg:w-[42%] lg:max-w-[426px] lg:shrink-0">
      {settingsItems.map(({ label, icon: Icon }) => {
        const active = activeTab === label;

        return (
          <button
            type="button"
            key={label}
            onClick={() => onChange(label)}
            className={`flex min-h-[65px] w-full items-center justify-between px-5 text-left transition-colors sm:px-8 ${
              active
                ? "bg-[#f8f9fa] text-[#22c943]"
                : "bg-white text-[#687286] hover:bg-gray-50"
            }`}
          >
            <span className="flex items-center gap-3">
              <Icon size={18} strokeWidth={1.9} />
              <span className="text-[15px]">{label}</span>
            </span>
            <ChevronRight size={17} strokeWidth={1.6} />
          </button>
        );
      })}
    </div>
  );
}
