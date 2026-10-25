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
    <header>
      <a href="#home" className="logo">
        <FaUtensils aria-hidden="true" /> Tasty Bites
      </a>

      <button
        type="button"
        id="menu-bar"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={open ? "navbar active" : "navbar"}>
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
