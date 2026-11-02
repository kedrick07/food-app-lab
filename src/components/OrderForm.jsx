import { useState } from "react";
import { FaTruck, FaClock, FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { popular } from "../data/popular";

const emptyForm = { name: "", email: "", phone: "", food: "", address: "" };

// same look for every field so i only write it once
// plain tailwind here because daisy's input class wasnt showing a border
// border-base-300 = light grey border from the theme, focus: classes only kick in when you click the field
const fieldClass =
  "w-full rounded-lg border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";
const labelClass = "mb-1 block text-sm font-medium";

export default function OrderForm() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // no backend yet so just log it for now
    console.log("Order submitted:", form);
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <section id="order" className="scroll-mt-20">
      <SectionHeading highlight="Order" postText="Now" />

      {/* one card split in two: info on the left, form on the right */}
      {/* 5 column grid on desktop: left takes 2, right takes 3. stacks on mobile */}
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl shadow-xl md:grid-cols-5">
        <div className="space-y-6 bg-primary p-8 text-primary-content md:col-span-2">
          <h3 className="text-2xl font-bold">Hungry? Let's fix that.</h3>
          {/* opacity-90 so the paragraph is a bit softer than the title */}
          <p className="text-sm opacity-90">
            Fill in the form and we'll get your food ready and on its way.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaTruck aria-hidden="true" /> Delivered straight to your door
            </li>
            <li className="flex items-center gap-3">
              <FaClock aria-hidden="true" /> Fresh and made to order
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt aria-hidden="true" /> +60 12-345 6789
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-base-100 p-8 md:col-span-3">
          {/* 2 fields per row on desktop, 1 on mobile */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} className={fieldClass} required />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>E-mail</label>
              <input id="email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} className={fieldClass} required />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone number</label>
              <input id="phone" type="tel" name="phone" placeholder="012-345 6789" value={form.phone} onChange={handleChange} className={fieldClass} required />
            </div>
            <div>
              <label htmlFor="food" className={labelClass}>What would you like?</label>
              {/* options come from the popular list so they always match the menu */}
              <select id="food" name="food" value={form.food} onChange={handleChange} className={fieldClass} required>
                <option value="" disabled>Pick a dish</option>
                {popular.map((item) => (
                  <option key={item.id} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="address" className={labelClass}>Delivery address</label>
            <textarea id="address" name="address" rows="4" placeholder="Street, area, city" value={form.address} onChange={handleChange} className={fieldClass} required />
          </div>

          {/* hover:opacity-90 dims it a little, active:scale makes it feel pressed */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-content shadow transition hover:opacity-90 active:scale-[0.99]"
          >
            Place Order
          </button>

          {/* only shows after a successful submit */}
          {submitted && (
            <p role="status" className="rounded-lg bg-success px-4 py-3 text-sm text-success-content">
              Thank you! Your order has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
