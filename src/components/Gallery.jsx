import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">Our Food <span>Gallery</span></h1>

      <div className="box-container">
        {gallery.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt={item.alt} />
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#order" className="btn">Order Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
