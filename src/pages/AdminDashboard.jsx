import { useState } from "react";
import { Menu } from "lucide-react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";
import SettingsMenu from "../components/admin/SettingsMenu";
import AdminAccounts from "../components/admin/AdminAccounts";

export default function AdminDashboard() {
  const [activeItem, setActiveItem] = useState("Settings");
  const [activeTab, setActiveTab] = useState("Admin Accounts");
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleNavigation(item) {
    setActiveItem(item);

    if (item === "Settings") {
      setActiveTab("Admin Accounts");
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#687286]">
      <AdminHeader />

      <div className="flex min-h-[calc(100vh-56px)] gap-0">
        <div className="hidden w-[208px] shrink-0 px-0 pb-7 pt-6 lg:block">
          <AdminSidebar
            activeItem={activeItem}
            onNavigate={handleNavigation}
            mobileOpen={false}
            setMobileOpen={setMobileOpen}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-3 px-5 pt-5 lg:hidden">
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
              className="rounded-lg border border-gray-200 p-2 text-gray-600"
            >
              <Menu size={20} />
            </button>
            <span className="text-sm text-gray-500">{activeItem}</span>
          </div>

          <main className="flex-1 px-5 pb-10 pt-8 sm:px-8 lg:px-10 lg:pt-[54px]">
            {activeItem === "Settings" ? (
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[30px]">
                <SettingsMenu activeTab={activeTab} onChange={setActiveTab} />

                <div className="min-w-0 flex-1">
                  {activeTab === "Admin Accounts" ? (
                    <AdminAccounts />
                  ) : (
                    <section>
                      <h1 className="text-[21px] font-medium text-[#687286]">
                        {activeTab}
                      </h1>
                      <p className="mt-3 text-sm text-gray-400">
                        {activeTab} settings will be implemented when their
                        requirements are available.
                      </p>
                    </section>
                  )}
                </div>
              </div>
            ) : (
              <section>
                <h1 className="text-xl font-medium text-[#687286]">
                  {activeItem}
                </h1>
                <p className="mt-3 text-sm text-gray-400">
                  This section has not been implemented yet.
                </p>
                <button
                  type="button"
                  onClick={() => handleNavigation("Settings")}
                  className="mt-5 rounded-lg bg-[#2dc849] px-4 py-2 text-sm text-white"
                >
                  Go to Settings
                </button>
              </section>
            )}
          </main>
        </div>
      </div>

      <div className="lg:hidden">
        <AdminSidebar
          activeItem={activeItem}
          onNavigate={handleNavigation}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </div>
    </div>
  );
}
