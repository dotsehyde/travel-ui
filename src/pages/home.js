import React from "react";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Services from "../components/Services";
import BookTrip from "../components/BookTrip";
import Testimonial from "../components/Testimonial";
import Clients from "../components/Clients";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Destination />
      <BookTrip />
      <Testimonial />
      <Clients />
      <Subscribe />
      <Footer/>
    </div>
  );
}

export default Home;
