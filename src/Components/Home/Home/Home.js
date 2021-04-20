import React from "react";
import FeaturedService from "../FeaturedService/FeaturedService";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blogs/Blogs";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Blogs></Blogs>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
