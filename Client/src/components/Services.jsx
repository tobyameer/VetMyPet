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
    <div className="relative">
      <img src={background} alt="" className=" w-[100%] h-[100%]  my-[300px]" />
      <div className="absolute top-[5%] flex-col mx-[100px] text-center bg-white rounded-lg">
        <h1 className="text-[30px] font-semibold">Our Services</h1>
        <p className="text-[22px]">
          Full service, Offering a wide range od services for pets.
        </p>
        <tr className="flex my-[90px]">
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <LuStethoscope />
              Preventative Care
            </h1>
            <p className="text-[13px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <RiToothLine />
              Dentistry
            </h1>
            <p className="text-[13px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <FaHouseChimneyMedical />
              Boarding
            </h1>
            <p className="text-[13px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <TiScissors />
              Grooming
            </h1>
            <p className="text-[13px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </tr>
        <tr className="flex">
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <LuBone />
              Digital Imaging
            </h1>
            <p className="text-[13px] px-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <TbMedicineSyrup />
              Internal Medicine
            </h1>
            <p className="text-[13px] px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <LiaUserNurseSolid />
              Surgery
            </h1>
            <p className="text-[13px]  px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="">
            <h1 className="flex flex-col items-center text-[21px] font-semibold m-3">
              <FaRegHeart />
              Euthanasia
            </h1>
            <p className="text-[13px]  px-5">
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
