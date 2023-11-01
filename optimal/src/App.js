
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Components/Banner';
import BizTitle from './Components/BizTitle';
import Businesstitle from './Components/Businesstitle';
import Navbar from './Components/Navbar';
import QuoteForm from './Components/QuoteForm';
import ServiceCard from './Components/ServicesProvided';
import Testimonials from './Components/Testimonials';
import AreasOfService from './Components/AreasOfService';
import PhotoGallery from './Components/PhotoGallery';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
      <Route path='/getquote' element={<QuoteForm/>}/>
      </Routes>
      {/* <Banner /> */}
      <BizTitle/>
      <ServiceCard/>
      <AreasOfService/>
      <PhotoGallery/>
      <Testimonials/>
      
      

    </div>
  );
}

export default App;
