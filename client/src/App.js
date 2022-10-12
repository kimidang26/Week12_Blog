import './App.css';
import Reviews from './components/foodreviews.js';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndividualIntervalsExample from "./components/carousel.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
       <h1>Yummers</h1>
       <IndividualIntervalsExample />
      
        <Reviews />
     
    </div>
  );
}

export default App;
