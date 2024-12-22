import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiToothLine } from "react-icons/ri";
import { LiaUserNurseSolid } from "react-icons/lia";
import { TbMedicineSyrup } from "react-icons/tb";
import { LuBone } from "react-icons/lu";
import { TiScissors } from "react-icons/ti";
import { LuStethoscope } from "react-icons/lu";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import background from "../images/jonny-neuenhagen-ncJZQJI6vuo-unsplash.jpg";

const Services = () => {
  return (
    <div className="py-[700px] bg-gradient-to-b from-[#7FBED3]  to-[#007EA7]">
      <div className="flex-col mx-[100px] text-center  rounded-lg">
        <div className="my-[200px]">
          <h1 className="text-[55px] font-semibold">Our Services</h1>
          <p className="text-[22px] my-[20px]">
            Full service, Offering a wide range od services for pets.
          </p>
        </div>
        <tr className=" flex flex-col justify-centers items-center">
          <div className="my-[90px] flex justify-center items-center lg:w-[650px] w-[550px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold">
              <LuStethoscope />
              Preventative Care
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-[90px] flex justify-center items-center w-[650px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold m-3">
              <RiToothLine />
              Dentistry
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-[90px] flex justify-center items-center w-[650px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold m-3">
              <FaHouseChimneyMedical />
              Boarding
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-[90px] flex justify-center items-center w-[650px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold m-3">
              <TiScissors />
              Grooming
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </tr>
        <tr className="flex flex-col justify-centers items-center my-[90px]">
          <div className="my-[90px] flex justify-center items-center w-[650px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold m-3">
              <LuBone />
              Digital Imaging
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-[90px] flex justify-center items-center w-[650px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold m-3">
              <TbMedicineSyrup />
              Internal Medicine
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-[90px] flex justify-center items-center w-[650px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold m-3">
              <LiaUserNurseSolid />
              Surgery
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-[90px] flex justify-center items-center w-[650px] shadow-lg h-[280px] flex-col px-[20px] bg-[#AFD6E3] rounded-full">
            <h1 className="flex flex-col items-center text-[41px] font-semibold m-3">
              <FaRegHeart />
              Euthanasia
            </h1>
            <p className="text-[23px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </tr>
      </div>
    </div>
  );
};

export default Services;
