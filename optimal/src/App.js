
import "./App.css";
import Banner from "./Components/Banner";
import BizTitle from "./Components/BizTitle";
import Navbar from "./Components/Navbar";
import QuoteForm from "./Components/QuoteForm";
import ServiceCard from "./Components/ServicesProvided";
import Testimonials from "./Components/Testimonials";
import AreasOfService from "./Components/AreasOfService";
import PhotoGallery from "./Components/PhotoGallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      {/* <Banner /> */}
      <BizTitle />
      <ServiceCard />
      <AreasOfService />
      <PhotoGallery />
      <Testimonials />
      <Footer />
    </div>
   
    </>
  );
}

export default App;
