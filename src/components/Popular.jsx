import { popular } from "../data/popular";
import StarRating from "./StarRating";

export default function Popular() {
  return (
    <section className="popular" id="popular">
      <h1 className="heading">Our <span>Popular</span> Foods</h1>

      <div className="box-container">
        {popular.map((item) => (
          <div className="box" key={item.id}>
            <span className="price">{item.price}</span>
            <img src={item.image} alt={item.alt} />
            <h3>{item.name}</h3>
            <StarRating rating={item.rating} />
            <a href="#order" className="btn">Order Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}
