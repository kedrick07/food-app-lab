import { speciality } from "../data/speciality";
import SectionHeading from "./SectionHeading";

export default function Speciality() {
  return (
    <section id="speciality"> {/* remove specialty class, spacing comes from app.jsx */}
      <SectionHeading preText="Our" highlight="Specials" />

      {/* replacing box container with grid */}
      {/* 1 column on phones, 2 on small screens, 3 on large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {speciality.map((item) => (
          // daisy card, shadow gets bigger on hover
          // overflow-hidden keeps the photo inside the rounded corners
          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden" key={item.id}>
            <figure>
              {/* h-48 + object-cover so every photo is the same height without stretching */}
              <img src={item.image} alt={item.alt} className="h-48 w-full object-cover" />
            </figure>
            {/* items-center + text-center to put everything in the middle */}
            <div className="card-body items-center text-center">
              <img src={item.icon} alt="" aria-hidden="true" className="w-14 h-14" />
              <h3 className="card-title">{item.name}</h3>
              {/* /70 makes the text a bit lighter than the headings */}
              <p className="text-sm text-base-content/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
