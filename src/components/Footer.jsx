import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";

const socials = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
  { label: "WhatsApp", href: "#", Icon: FaWhatsapp },
  { label: "GitHub", href: "#", Icon: FaGithub },
  { label: "Pinterest", href: "#", Icon: FaPinterest },
];

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-24">
      {/* 3 columns on desktop, stacked on mobile */}
      <div className="max-w-7xl mx-auto grid gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <ul className="space-y-1 text-sm">
            <li>Email: hello@tastybites.example</li>
            <li>Phone: +60 12-345 6789</li>
            <li>Address: Petaling Jaya, Selangor, Malaysia</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="link link-hover">Home</a></li>
            <li><a href="#speciality" className="link link-hover">Our Specials</a></li>
            <li><a href="#popular" className="link link-hover">Popular Foods</a></li>
            <li><a href="#gallery" className="link link-hover">Gallery</a></li>
            <li><a href="#review" className="link link-hover">Customer Reviews</a></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Follow Us</h3>
          <ul className="flex flex-wrap gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} className="btn btn-circle btn-outline btn-sm text-neutral-content">
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-neutral-content/20 py-4 text-center text-xs">
        Tasty Bites | All rights reserved | Adapted from Vignesh G's Food-Delivery-Website
      </p>
    </footer>
  );
}
