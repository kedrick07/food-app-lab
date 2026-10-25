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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: hello@tastybites.example</li>
            <li>Phone: +60 12-345 6789</li>
            <li>Address: Petaling Jaya, Selangor, Malaysia</li>
          </ul>
        </div>

        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#speciality">Our Specials</a></li>
            <li><a href="#popular">Popular Foods</a></li>
            <li><a href="#review">Customer Reviews</a></li>
          </ul>
        </div>

        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label}>
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="credit">
        Tasty Bites | All rights reserved | Adapted from Vignesh G's Food-Delivery-Website
      </p>
    </footer>
  );
}
