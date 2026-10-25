export default function Hero() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Tasty Bites</h3>
        <p>
          Welcome to Tasty Bites, where every meal is a culinary masterpiece
          delivered straight to your door. Explore a world of flavors with our
          diverse menu, curated from the finest ingredients and prepared by top
          chefs. Whether you're craving gourmet cuisine, comforting classics, or
          exotic dishes, Tasty Bites promises a dining experience that's always
          fresh, delicious, and convenient. Order now and indulge!
        </p>
        <a href="#order" className="btn">Order Now</a>
      </div>

      <div className="image">
        <img src="/images/home-img.png" alt="Selection of Tasty Bites dishes" />
      </div>
    </section>
  );
}
