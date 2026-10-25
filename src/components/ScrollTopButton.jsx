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

  return (
    <a href="#home" id="scroll-top" aria-label="Scroll to top">
      <FaAngleUp />
    </a>
  );
}
