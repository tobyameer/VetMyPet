import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserProfile from "../components/UserProfile";
import UserEditProfile from "../components/UserEditProfile";
import UserSecurity from "../components/UserSecurity";
import UserPets from "../components/UserPets";
const Profile = () => {
  const [clicked, setClicked] = useState("profile");

  console.log(clicked);

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-evenly bg-gradient-to-b from-[#EFF6F9]  to-[#AFD6E3]">
        {/* sidebar */}
        <div className="flex flex-col items-center w-[450px] h-screen mt-[100px] gap-[45px] text-[20px] text-[#53595B] font-semibold">
          <button
            onClick={(e) => setClicked("profile")}
            className="w-[250px] h-[65px] bg-inherit hover:text-black hover:bg-[#AFD6E3] rounded-lg"
          >
            Profile
          </button>
          <button
            onClick={(e) => setClicked("edit")}
            className="w-[250px] h-[65px] bg-inherit hover:text-black hover:bg-[#AFD6E3] rounded-lg"
          >
            Edit Profile
          </button>
          <button
            onClick={(e) => setClicked("security")}
            className="w-[250px] h-[65px]  hover:text-black hover:bg-[#AFD6E3] rounded-lg"
          >
            Security
          </button>
          <button
            onClick={(e) => setClicked("pets")}
            className="w-[250px] h-[65px]  hover:text-black hover:bg-[#AFD6E3] rounded-lg"
          >
            Pets
          </button>
        </div>
        {/* main */}
        <UserProfile clicked={clicked} />
        <UserEditProfile clicked={clicked} />
        <UserSecurity clicked={clicked} />
        <UserPets clicked={clicked} />
      </div>
    </div>
  );
};

export default Profile;
