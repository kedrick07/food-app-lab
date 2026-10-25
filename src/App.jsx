import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Speciality from "./components/Speciality";
import Popular from "./components/Popular";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Speciality />
        <Popular />
        <Gallery />
        <Reviews />
        <OrderForm />
      </main>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
