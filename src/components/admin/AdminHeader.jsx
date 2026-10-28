import { Bell } from "lucide-react";
import richmondDev from "../../assets/images/richmondDev.png";

export default function AdminHeader() {
  return (
    <header className="flex h-[56px] w-full items-center justify-between border-b border-[#f0f1f4] bg-white px-5 sm:px-8">
      <span className="rounded-xl bg-[#dceaff] px-4 py-1.5 text-sm font-medium text-[#2598ff]">
        Admin
      </span>

      <div className="flex items-center gap-5 sm:gap-6">
        <button
          type="button"
          aria-label="Notifications"
          className="text-[#737d90] transition hover:text-[#2dc84d]"
        >
          <Bell size={20} strokeWidth={1.8} />
        </button>

        <div className="flex items-center gap-3">
          <img
            src={richmondDev}
            alt="Richmond Dev."
            className="h-8 w-8 rounded-full border border-gray-100 object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-[11px] font-semibold text-[#252b38]">
              Richmond Dev.
            </p>
            <p className="mt-0.5 text-[10px] text-[#8991a1]">Role: Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
