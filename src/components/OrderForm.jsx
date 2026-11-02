import { useState } from "react";
import SectionHeading from "./SectionHeading";

const emptyForm = { name: "", email: "", phone: "", food: "", address: "" };

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

      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-md max-w-2xl mx-auto">
        <div className="card-body gap-4">
          {/* name/email and phone/food sit side by side on bigger screens */}
          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" name="name" placeholder="Name" aria-label="Name" value={form.name} onChange={handleChange} className="input input-bordered w-full" required />
            <input type="email" name="email" placeholder="E-mail" aria-label="E-mail" value={form.email} onChange={handleChange} className="input input-bordered w-full" required />
            <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone number" value={form.phone} onChange={handleChange} className="input input-bordered w-full" required />
            <input type="text" name="food" placeholder="Food Name" aria-label="Food name" value={form.food} onChange={handleChange} className="input input-bordered w-full" required />
          </div>

          <textarea name="address" placeholder="Address" aria-label="Address" value={form.address} onChange={handleChange} className="textarea textarea-bordered w-full h-32" required />

          <button type="submit" className="btn btn-primary">Order Now</button>

          {/* only shows after a successful submit */}
          {submitted && (
            <div role="alert" className="alert alert-success">
              <span>Thank you! Your order has been received.</span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
