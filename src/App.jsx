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
    <div className="min-h-screen bg-base-100 text-base-content">
      <Loader />
      <Navbar />

      {/* all the sections live in here, space-y-24 handles the gaps between them */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-24">
        <Hero />
        <Speciality />
        <Popular />
        <Gallery />
        <Reviews />
        <OrderForm />
      </main>

      <Footer />
      <ScrollTopButton />
    </div>
  );
}
