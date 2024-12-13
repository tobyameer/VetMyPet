import React from "react";
import DoctorList from "./DoctorList";
import Navbar from "../components/Navbar";
import homeImg from "../images/marvin-zettl-lIrRtJbNWx8-unsplash.jpg";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const user = location.state?.user ?? "Guest";
  return (
    <div>
      <Navbar name={user.name} />

      <div className="relative">
        <img src={homeImg} alt="" width="100%" />
        <div className="absolute top-[30%] left-[5%]">
          <h1 className="text-[28px] font-semibold">
            Veterinary care, With Compassion {user.name}
          </h1>
          <p className="w-[400px] text-[14px] px-2 ">
            We know how important your pets are and believe they are part of the
            family!
          </p>
        </div>
      </div>

      <Cards />

      <Services />

      <Footer />
    </div>
  );
};

export default Home;
