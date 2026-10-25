import { speciality } from "../data/speciality";

export default function Speciality() {
  return (
    <section className="speciality" id="speciality">
      <h1 className="heading">Our <span>Specials</span></h1>

      <div className="box-container">
        {speciality.map((item) => (
          <div className="box" key={item.id}>
            <img className="image" src={item.image} alt={item.alt} />
            <div className="content">
              <img src={item.icon} alt="" aria-hidden="true" />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
