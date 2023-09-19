
import './App.css';
import Businesstitle from './Components/Businesstitle';
import Navbar from './Components/Navbar';
import QuoteForm from './Components/QuoteForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Businesstitle/>
      <QuoteForm/>
    </div>
  );
}

export default App;
