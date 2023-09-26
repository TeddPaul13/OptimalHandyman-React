
import './App.css';
import Businesstitle from './Components/Businesstitle';
import Navbar from './Components/Navbar';
import QuoteForm from './Components/QuoteForm';
import ServiceCard from './Components/ServicesProvided';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Businesstitle/>
      <ServiceCard/>
    </div>
  );
}

export default App;
