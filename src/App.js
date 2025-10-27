
// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import About from './Components/About';
import Tools from './Components/Tools';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='bg-gradient-to-t from-blue-400 via-pink-500 to-purple-500'>
  <Navbar />    
  <Home />
  <Tools />
  <About />
  <Projects />
  <Contact />
   <Footer />
    </div>
  );
}

export default App;
