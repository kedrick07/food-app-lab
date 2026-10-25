import { reviews } from "../data/reviews";
import StarRating from "./StarRating";

export default function Reviews() {
  return (
    <section className="review" id="review">
      <h1 className="heading">Our Customers <span>Reviews</span></h1>

      <div className="box-container">
        {reviews.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt={item.alt} />
            <h3>{item.name}</h3>
            <StarRating rating={item.rating} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
