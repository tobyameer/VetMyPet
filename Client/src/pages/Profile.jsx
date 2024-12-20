import React from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        {/* sidebar */}
        <div className="flex flex-col items-center w-[350px] h-screen">
          <div className="flex items-center h-[100px]">
            <h1>Fix My Pet</h1>
          </div>
          <button className="w-fill h-[60px] bg-[#EFF6F9] text-white">
            Profile
          </button>
          <button>Edit Profile</button>
          <button>Security</button>
          <button>Pets</button>
        </div>
        {/* main */}
        <div>hi</div>
      </div>
    </div>
  );
};

export default Profile;
