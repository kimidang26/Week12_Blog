import './App.css';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home.js";
import Reviews from './components/pages/foodreviews';
import Footer from "./components/footer";
import About from './components/pages/about';
import Contact from './components/pages/contact';
import NavigationBar from './components/NavBar';


const App = () => {
  return (
    <div className="App">
       <h1>Yummers</h1>
       {/* <Home />
       <Reviews/>
       <About />
       <Contact /> */}
       <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       </Router>
        <Footer />
    </div>
  );
}

export default App;
