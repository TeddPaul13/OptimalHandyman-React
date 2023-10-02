
import './App.css';
import BizTitle from './Components/BizTitle';
import Businesstitle from './Components/Businesstitle';
import Navbar from './Components/Navbar';
import QuoteForm from './Components/QuoteForm';
import ServiceCard from './Components/ServicesProvided';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BizTitle/>
      <ServiceCard/>
      <Testimonials/>

    </div>
  );
}

export default App;
