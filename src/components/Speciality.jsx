import { speciality } from "../data/speciality";
import SectionHeading from "./SectionHeading";

export default function Speciality() {
  return (
    <section id="speciality"> {/* remove specialty class, spacing comes from app.jsx */}
      <SectionHeading preText="Our" highlight="Specials" />

      {/* replacing box container with grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {speciality.map((item) => (
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden" key={item.id}>
            <figure>
              <img src={item.image} alt={item.alt} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <img src={item.icon} alt="" aria-hidden="true" className="w-14 h-14" />
              <h3 className="card-title">{item.name}</h3>
              <p className="text-sm text-base-content/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
