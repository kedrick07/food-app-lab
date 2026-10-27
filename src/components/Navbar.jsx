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

  return (
    <header className="navbar bg-base-100/90 backdrop-blur shadow-md sticky top-0 z-50 px-4 md:px-8"> {/* use daisyui navbar class and deco*/}
      <a href="#home" className="btn btn-ghost text-xl font-bold text-primary gap-2">
        <FaUtensils aria-hidden="true" /> Tasty Bites
      </a>

      <button
        type="button"
        className="btn btn-ghost btn-circle md:hidden"
        {/* add a round touch, and hide the button for wide screen*/}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={'${open ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-base-100 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none gap-2 md:gap-6 items-center'}>
        {/* always display link horizontally on desktop, show link when open is true on mobile and drop down mobile menu below navbar without shifting other page stuff */}
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}\n        <a href="#order" className="btn0" onClick={close}>
          Order Now
        </a>
      </nav>
    </header>
  );
}
