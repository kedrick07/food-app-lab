export default function Hero() {
  return (
    /* hero section to make two columns on desktop view*/
    <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-12" id="home">
      {/* make both column share width and have vertical space between h, p and button. center on mobile and left align on desktop */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        {/* bigger text on larger screens 6xl is the sweet spot */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary">Tasty Bites</h1>
        <p className="text-base-content/70 leading-relaxed">
          Welcome to Tasty Bites, where every meal is a culinary masterpiece
          delivered straight to your door. Explore a world of flavors with our
          diverse menu, curated from the finest ingredients and prepared by top
          chefs. Whether you're craving gourmet cuisine, comforting classics, or
          exotic dishes, Tasty Bites promises a dining experience that's always
          fresh, delicious, and convenient. Order now and indulge!
        </p>
        <a href="#order" className="btn btn-primary btn-lg">Order Now</a>
      </div>

      <div className="flex-1">
        <img 
          src="/images/home-img.png" 
          alt="Selection of Tasty Bites dishes" 
          className="w-full max-w-md mx-auto drop-shadow-xl"
        />
      </div>
    </section>
  );
}
