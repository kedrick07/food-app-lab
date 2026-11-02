import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  // covers the whole screen for a sec, z-index high so it sits above the navbar
  // fixed inset-0 = stretches to all 4 edges, flex + items/justify-center puts the gif in the middle
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-base-100">
      <img src="/images/loader.gif" alt="Loading" className="w-24" />
    </div>
  );
}
