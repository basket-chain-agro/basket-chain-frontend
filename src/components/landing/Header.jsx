import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";
import { ROUTES } from "../../constants/routes";
import basketchainlogo from "../../assets/logo/basketchainlogo.png";

const navLinks = [
  { id: 1, label: "Marketplace", to: ROUTES.marketplace },
  { id: 2, label: "How It Works", href: "#how-it-works" },
  { id: 3, label: "About Us", href: "#about" },
];

const linkClass =
  "text-sm text-gray-800 hover:text-[#33C749] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33C749] rounded";

const NavItem = ({ link, onClick }) =>
  link.to ? (
    <Link to={link.to} className={linkClass} onClick={onClick}>
      {link.label}
    </Link>
  ) : (
    <a href={link.href} className={linkClass} onClick={onClick}>
      {link.label}
    </a>
  );

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative border-b border-gray-100 bg-white mt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-4 md:justify-between md:px-8">
        {/* Logo: hidden on mobile, shown from md up */}
        <Link
          to={ROUTES.home}
          className="hidden items-center gap-2 md:flex"
          aria-label="Basketchain home"
        >
          <img src={basketchainlogo} alt="Basketchain" className="h-8 w-auto" />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-8 md:flex font-semibold"
        >
          {navLinks.map((link) => (
            <NavItem key={link.id} link={link} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            to={ROUTES.marketplace}
            variant="secondary"
            className="text-xs border-0"
          >
            Source Verified Crops
          </Button>
          <Button to={ROUTES.register} className="text-xs">
            Sell Your Produce
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33C749] md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-20 w-full border-t border-gray-100 bg-white px-4 py-4 shadow-sm md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavItem key={link.id} link={link} onClick={close} />
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Button to={ROUTES.marketplace} variant="secondary" onClick={close}>
              Source Verified Crops
            </Button>
            <Button to={ROUTES.register} onClick={close}>
              Sell Your Produce
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
