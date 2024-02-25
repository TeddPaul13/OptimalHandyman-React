
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
import DrawerAppBar from "./Components/AppBarWithDrawer";
import ReviewForm from "./Components/ReviewForm";
import AreaMap from "./Components/AreaMap";

function App() {
  return (
    <>
    <div className="App">
      <DrawerAppBar/>
      {/* <Banner /> */}
      <BizTitle />
      <ServiceCard />
      <AreasOfService />
      <PhotoGallery />
      <Testimonials />
      {/* <ReviewForm/> */}
      <Footer />
      {/* <QuoteForm/> */}
    </div>
   
    </>
  );
}

export default App;
