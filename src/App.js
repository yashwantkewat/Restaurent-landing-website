import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import FavouriteFood from "./Components/FavouriteFood";
import FAQ from "./Components/FAQ";
import Navbar from "./Components/Navbar"
function App() {
  return (
      <div className="App">
        <Navbar/>  
         <Home/>
        <About />
        <Work />
        <FavouriteFood/>
        <Testimonial />
        <Contact />
        <FAQ/>
        <Footer />
      </div>
  );
}

export default App;
