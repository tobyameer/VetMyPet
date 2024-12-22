import React from "react";
import Appointments from "./Appointments";
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

      <div className="bg-gradient-to-b from-[#EFF6F9]  to-[#AFD6E3] h-screen py-[200px] flex justify-center">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[50px] font-bold w-[500px]">
              Veterinary care, With Compassion
            </h1>
            <p className="mb-[60px] mt-[30px] lg:w-[100%] w-[400px] text-[15px] px-2 ">
              We know how important your pets are and believe they are part of
              the family!
            </p>
            <div className="w-[500px] sm:w-[500px] lg:w-[100%] md:mx-[200px]">
              <input type="text" className="w-[70%]  h-[50px] rounded-l-full" />
              <button className=" w-[30%] h-[50px] bg-[#007EA7] text-white rounded-r-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
