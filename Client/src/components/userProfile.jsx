import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = ({ clicked }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("Users ID:") || "";
    console.log(userId);
    if (!userId) {
    } else {
      axios
        .get(`http://localhost:3001/getUser/${userId}`, {
          withCredentials: true,
        })
        .then((res) => {
          const user = res.data.user;
          setName(user.name);
          setLastName(user.lastName);
          setEmail(user.email);
        })
        .catch((err) => {
          console.error("Axios Error:", err.response?.data || err.message);
        });
    }
  }, []);
  console.log(name);
  return (
    <div
      className={
        clicked == "profile"
          ? "relative bg-white mt-[100px] w-[100%] rounded-t-3xl"
          : "hidden"
      }
    >
      <div className=" bg-[#3fc59e] h-[180px] rounded-tl-3xl" />
      <div className="flex justify-between items-center h-[120px] mb-[100px]">
        <FaUserCircle
          size={170}
          color="#2e2e2e"
          className="absolute top-[12%] left-[4%] bg-white rounded-full"
        />
        <div className="flex flex-col ml-[250px] text-[12px]">
          <h1 className="font-semibold text-[20px]">Profile</h1>
          <p>Update your photo and personal details</p>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[60%] max-w-[400px]">Name</h1>
          <input
            type="text"
            disabled
            placeholder={name}
            className="w-[90%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
        <span className="h-[2px] w-[100%] bg-gray-200" />
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[60%] max-w-[400px]">Last Name</h1>
          <input
            type="text"
            disabled
            placeholder={lastName}
            className="w-[90%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
        <span className="h-[2px] w-[100%] bg-gray-200" />
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[60%] max-w-[400px]">Email</h1>
          <input
            type="email"
            disabled
            placeholder={email}
            className="w-[90%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
        <span className="h-[2px] w-[100%] bg-gray-200" />
        <div className="ml-[250px] mr-[80px] my-[50px] flex justify-between items-center text-[18px] font-semibold">
          <h1 className="w-[60%] max-w-[400px]">Pet</h1>
          <img
            src=""
            alt=""
            className="bg-[#3fc59e] h-[150px] w-[150px] mx-[50px]"
          />
          <input
            type="email"
            disabled
            placeholder="Dog Name"
            className="w-[90%] max-w-[400px] bg-[#F1F7F9] border-[#AFD6E3]"
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
