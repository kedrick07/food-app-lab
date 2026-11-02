import { gallery } from "../data/gallery";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  return (
    // scroll-mt-20 so the sticky navbar doesnt cover the heading when you click the link
    <section id="gallery" className="scroll-mt-20">
      <SectionHeading preText="Our Food" highlight="Gallery" />

      {/* 2 cols on phones, more once there's room */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item) => (
          // group = lets the children react when this whole tile is hovered
          // aspect-square makes every tile a square, overflow-hidden clips the zoom
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-box aspect-square"
          >
            {/* group-hover on the img zooms it when the whole tile is hovered */}
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* dark overlay, hidden until hover (or tab focus) */}
            {/* inset-0 stretches it over the whole tile, bg-black/60 = black at 60% */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/60 p-3 text-center text-white opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
              <h3 className="font-bold">{item.title}</h3>
              {/* line-clamp-3 cuts long text after 3 lines */}
              <p className="text-xs line-clamp-3">{item.text}</p>
              <a href="#order" className="btn btn-primary btn-xs mt-2">Order Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
