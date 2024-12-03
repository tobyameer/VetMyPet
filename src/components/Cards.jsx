import React from "react";

const Cards = () => {
  return (
    <div className="flex justify-evenly my-[100px] mx-[50px]">
      <div className="flex flex-col rounded-2xl justify-between items-center p-5 bg-blue-500  align-center  w-[300px] h-[350px] text-white mx-2">
        <h1 className="text-[20px]">Join Us</h1>
        <p className="text-[14px] h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
          Sign Up
        </button>
      </div>
      <div className="flex flex-col rounded-2xl justify-between items-center p-5 bg-blue-500  align-center  w-[300px] h-[350px] text-white mx-2">
        <h1 className="text-[20px]">Appointments</h1>
        <p className="text-[14px] h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
          Apply
        </button>
      </div>
      <div className="flex flex-col rounded-2xl justify-between items-center p-5 bg-blue-500  align-center  w-[300px] h-[350px] text-white mx-2">
        <h1 className="text-[20px]">Doctors Near You</h1>
        <p className="text-[14px] h-[200px] overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="border-2 border-solid w-[100px] text-[15px] h-[40px] rounded-2xl">
          Find
        </button>
      </div>
    </div>
  );
};

export default Cards;
