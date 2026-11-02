import { popular } from "../data/popular";
import StarRating from "./StarRating";
import SectionHeading from "./SectionHeading";

export default function Popular() {
  return (
    <section id="popular">
      <SectionHeading preText="Our" highlight="Popular" postText="Foods" />
      
      {/* replacing box container with grid. realtice on figure make it to anchor, pin the badge to top right corner and use daisyui price tag*/}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {popular.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            <figure className="relative">
              <img src={item.image} alt={item.alt} className="h-48 w-full object-cover" />
              <span className="badge badge-secondary absolute top-3 right-3 font-bold">
                {item.price}
              </span>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">{item.name}</h3>
              <StarRating rating={item.rating} />
              <a href="#order" className="btn btn-primary btn-sm">Order Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}