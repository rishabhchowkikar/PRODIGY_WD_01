import React from "react";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Price from "./Components/Price";
import Testimonial from "./Components/Testimonial";
import Workflow from "./Components/Workflow";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <Workflow />
        <Price />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
