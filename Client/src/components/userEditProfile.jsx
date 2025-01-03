import React from "react";
import { FaUserCircle } from "react-icons/fa";

const UserEditProfile = ({ clicked }) => {
  return (
    <div
      className={
        clicked === "edit"
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
          <h1 className="font-semibold text-[20px]">edit profile</h1>
          <p>Update your photo and personal details</p>
        </div>
        <button className="mr-[70px] w-[90px] h-[30px] bg-[#7FBED3] rounded-lg">
          Save
        </button>
      </div>
      <div className="flex flex-col ">
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[60%] max-w-[400px]">Name</h1>
          <input
            type="text"
            placeholder="Name"
            className="w-[90%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
        <span className="h-[2px] w-[100%] bg-gray-200" />
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[60%] max-w-[400px]">Last Name</h1>
          <input
            type="text"
            placeholder="Last Name"
            className="w-[90%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
        <span className="h-[2px] w-[100%] bg-gray-200" />
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[60%] max-w-[400px]">Email</h1>
          <input
            type="email"
            placeholder="Example@gmail.com"
            className="w-[90%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
      </div>
    </div>
  );
};

export default UserEditProfile;
