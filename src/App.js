// import logo from './logo.svg';
// import './App.css';

// **** Import Router**** // 
import { Routes, Route } from "react-router-dom";

// **** Pages Import **** // 
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

// **** Reusable Components Import **** // 
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div className="App">

      {/***** Components Import *****/}
      <Header />


      {/***** Pages Import *****/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Services" element={<Services />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;









