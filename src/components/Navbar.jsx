import { useState } from "react";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#speciality", label: "Our Specials" },
  { href: "#popular", label: "Popular Foods" },
  { href: "#gallery", label: "Gallery" },
  { href: "#review", label: "Customer Reviews" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // navbar is the daisy class. sticky top-0 pins it, z-50 so cards dont slide over it
  // bg-base-100/90 + backdrop-blur gives the slightly see-through look
  return (
    <header className="navbar bg-base-100/90 backdrop-blur shadow-md sticky top-0 z-50 px-4 md:px-8 justify-between">
      {/* brand logo with backdrop blur when scrolled */}
      <div className="navbar-start w-auto">
        {/* btn-ghost = button with no background until you hover */}
        <a href="#home" className="btn btn-ghost text-xl font-bold text-primary gap-2">
          <FaUtensils aria-hidden="true" />
          <span>Tasty Bites</span>
        </a>
      </div>

      {/* Navigation Links for desktop and mobile dropdown, dynamic approach */}
      {/* hidden on mobile unless open, md:flex always shows it on desktop */}
      {/* on mobile it's absolute so it drops down under the bar, on desktop it's static (normal) */}
      <nav
        className={`${
          open ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-base-100 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none gap-4 md:gap-6 items-center transition-all`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="text-sm font-semibold hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        {/* btn-sm keeps it small, full width on mobile only */}
        <a
          href="#order"
          className="btn btn-primary btn-sm w-full md:w-auto mt-2 md:mt-0"
          onClick={close}
        >
          Order Now
        </a>
      </nav>

      {/* Hamburger toggle button only on mobile */}
      {/* md:hidden = gone on anything bigger than a tablet */}
      <div className="md:hidden">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="btn btn-ghost btn-circle text-lg"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
