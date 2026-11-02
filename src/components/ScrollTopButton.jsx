import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  // floating round button, bottom right
  return (
    <a
      href="#home"
      aria-label="Scroll to top"
      className="btn btn-circle btn-primary fixed bottom-6 right-6 z-40 shadow-lg"
    >
      <FaAngleUp />
    </a>
  );
}
