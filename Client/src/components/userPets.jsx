import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const UserPets = ({ clicked }) => {
  return (
    <div
      className={
        clicked === "pets"
          ? "relative bg-white mt-[100px] w-[100%] rounded-t-3xl"
          : "hidden"
      }
    >
      {" "}
      <div className=" bg-[#EFF6F9] h-[180px] rounded-tl-3xl" />
      <div className="flex justify-between items-center h-[120px] mb-[100px]">
        <FaUserCircle
          size={170}
          color="#2e2e2e"
          className="absolute top-[12%] left-[4%] bg-white rounded-full"
        />
        <div className="flex flex-col ml-[250px] text-[12px]">
          <h1 className="font-semibold text-[20px]">Pets</h1>
          <p>Update your photo and personal details</p>
        </div>
        <button className="mr-[70px] w-[90px] h-[30px] bg-[#7FBED3] rounded-lg">
          Save
        </button>
      </div>
      <div className="flex flex-col ">
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[100px] max-w-[400px]">Pet Name</h1>
          <input
            type="text"
            placeholder="Name"
            className="w-[50%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
        <span className="h-[2px] w-[100%] bg-gray-200" />
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-center items-center text-[18px] font-semibold">
          <h1 className="w-[100px] max-w-[400px]">Pet</h1>
          <div className="flex justify-center items-center w-[150px] bg-gray-200 h-[150px] ">
            <FiUpload />
          </div>

          <input
            type="email"
            placeholder="Dog Name"
            className="ml-[80px] w-[40%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
      </div>
    </div>
  );
};

export default UserPets;
