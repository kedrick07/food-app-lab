import { popular } from "../data/popular";
import StarRating from "./StarRating";

export default function Popular() {
  return (
    <section className="popular" id="popular">
      <h1 className="heading">Our <span>Popular</span> Foods</h1>
      
      {/* replacing box container with grid. realtice on figure make it to anchor, pin the badge to top right corner and use daisyui price tag*/}
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden">
        <figure className="relative">
          <img src={item.image} alt={item.alt} className="h-48 w-full object-cover" />
          <span className="badge badge-secondary absolute top-3 right-3 font-bold">{item.price}</span>
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title">{item.name}</h3>
          <StarRating rating={item.rating} />
          <a href="#order" className="btn btn-primary btn-sm">Order Now</a>
        </div>
      </div>
    </section>
  );
}
