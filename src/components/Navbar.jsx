import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[100%] h-[80px] px-[50px]">
      <div className="flex items-center">Logo</div>
      {/* Middle */}
      <div className="flex">
        <button className="mx-3">Home</button>
        <button className="mx-3">Map</button>
        <button className="mx-3">About Us</button>
        <button className="mx-3">Help</button>
      </div>
      {/* END */}
      <div className="flex items-center ">
        <div className="flex mr-3">
          <TbWorld size={16} style={{ marginTop: "4px" }} />
          <button className="ml-1">EN</button>
        </div>
        <div className="flex ml-3">
          <FaUser style={{ marginTop: "5px" }} size={13} />
          <button className="ml-1">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
