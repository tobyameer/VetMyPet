import React from "react";
import { Link } from "react-router-dom";
import { IoPawSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";

const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center h-screen bg-gradient-to-b from-[#AFD6E3] lg:gap-0 gap-20  to-[#7FBED3]  py-[500px] px-[50px]">
      <div className="flex flex-col shadow-xl lg:h-[500px] rounded-2xl justify-evenly items-center p-5 bg-[#7FBED3]  align-center w-[500px] md:w-[500px]  lg:w-[100%] h-[400px] text-white mx-1">
        <h1 className="flex text-center items-center text-[28px]">
          <FaUserDoctor className="mx-2" />
          Doctors Near You
        </h1>
        <p className="text-[19px] lg:px-1 p-5 h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="lg:mt-5 hover:bg-white hover:text-[#7FBED3] border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
          <Link to="/findDoc">Find</Link>
        </button>
      </div>
      <div className="flex flex-col shadow-xl md:w-[500px]   lg:h-[500px] rounded-2xl justify-evenly items-center p-5 bg-[#3F9EBD]  align-center w-[500px]  lg:w-[100%] h-[400px] text-white mx-2">
        <h1 className="flex text-center items-center text-[28px]">
          <IoPawSharp className="mx-2" />
          Join Us
        </h1>
        <p className="text-[19px] lg:p-0 p-5 h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/login">
          <button className=" hover:bg-white hover:text-[#3F9EBD] border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="flex flex-col shadow-xl md:w-[500px]   lg:h-[500px] rounded-2xl justify-evenly items-center p-5 bg-[#007EA7]  align-center w-[500px]  lg:w-[100%] h-[400px] text-white mx-2">
        <h1 className="flex text-center items-center text-[28px]">
          <SlCalender className="mx-2" />
          Appointments
        </h1>
        <p className="text-[19px] lg:p-0 p-5 h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/appointments">
          <button className=" hover:bg-white hover:text-[#007EA7] border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
