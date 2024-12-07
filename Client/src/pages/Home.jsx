import React from "react";
import DoctorList from "./DoctorList";
import Navbar from "../components/Navbar";
import homeImg from "../images/marvin-zettl-lIrRtJbNWx8-unsplash.jpg";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37451031098!2d31.258464350000004!3d30.059488450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1733176260349!5m2!1sen!2seg"
        style={{ width: "100%", height: 450, border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <div className="relative">
        <img src={homeImg} alt="" width="100%" />
        <div className="absolute top-[30%] left-[5%]">
          <h1 className="text-[28px] font-semibold">
            Veterinary care, With Compassion
          </h1>
          <p className="w-[400px] text-[14px] px-2 ">
            We know how important your pets are and believe they are part of the
            family!
          </p>
        </div>
      </div>

      {/* Cards */}
      <Cards />

      {/* Services */}
      <Services />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
