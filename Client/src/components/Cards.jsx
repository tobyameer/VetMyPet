import React from "react";
import { Link } from "react-router-dom";
import { IoPawSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUserDoctor } from "react-icons/fa6";

const Cards = () => {
  return (
    <div className="flex justify-evenly my-[300px] mx-[50px]">
      <div className="flex flex-col rounded-2xl justify-between items-center p-5 bg-blue-500  align-center  w-[300px] h-[350px] text-white mx-2">
        <h1 className="flex text-center items-center text-[20px]">
          <IoPawSharp className="mx-2" />
          Join Us
        </h1>
        <p className="text-[14px] h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/login">
          <button className=" hover:bg-white hover:text-blue-500 border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="flex flex-col rounded-2xl justify-between items-center p-5 bg-blue-500  align-center  w-[300px] h-[350px] text-white mx-2">
        <h1 className="flex text-center items-center text-[20px]">
          <SlCalender className="mx-2" />
          Appointments
        </h1>
        <p className="text-[14px] h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/appointments">
          <button className=" hover:bg-white hover:text-blue-500 border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
            Apply
          </button>
        </Link>
      </div>
      <div className="flex flex-col rounded-2xl justify-between items-center p-5 bg-blue-500  align-center  w-[300px] h-[350px] text-white mx-2">
        <h1 className="flex text-center items-center text-[20px]">
          <FaUserDoctor className="mx-2" />
          Doctors Near You
        </h1>
        <p className="text-[14px] h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className=" hover:bg-white hover:text-blue-500 border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
          <Link to="/findDoc">Find</Link>
        </button>
      </div>
    </div>
  );
};

export default Cards;
