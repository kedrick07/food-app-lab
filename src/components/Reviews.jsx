import { reviews } from "../data/reviews";
import StarRating from "./StarRating";
import SectionHeading from "./SectionHeading";

export default function Reviews() {
  return (
    <section id="review" className="scroll-mt-20">
      <SectionHeading preText="Our Customers" highlight="Reviews" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              {/* avatar + ring so the photos look like proper profile pics */}
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={item.image} alt={item.alt} />
                </div>
              </div>

              <h3 className="card-title">{item.name}</h3>
              <StarRating rating={item.rating} />
              <p className="text-sm text-base-content/70">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
