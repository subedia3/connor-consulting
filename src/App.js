import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
        <Home />
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
