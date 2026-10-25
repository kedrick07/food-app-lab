import { useState } from "react";

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
    console.log("Order submitted:", form);
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <section className="order" id="order">
      <h1 className="heading"><span>Order</span> Now</h1>

      <div className="row">
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input type="text" name="name" placeholder="Name" aria-label="Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="E-mail" aria-label="E-mail" value={form.email} onChange={handleChange} required />
          </div>
          <div className="inputBox">
            <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone number" value={form.phone} onChange={handleChange} required />
            <input type="text" name="food" placeholder="Food Name" aria-label="Food name" value={form.food} onChange={handleChange} required />
          </div>
          <textarea name="address" placeholder="Address" aria-label="Address" cols="30" rows="10" value={form.address} onChange={handleChange} required />
          <input type="submit" value="Order Now" className="btn0" />
          {submitted && <p role="status">Thank you! Your order has been received.</p>}
        </form>
      </div>
    </section>
  );
}
