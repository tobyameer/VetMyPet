import React from "react";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div
      style={{ background: "rgba(0, 0, 0, 0.59)" }}
      className=" text-white h-[50px] flex justify-between w-[100%] px-[50px]"
    >
      <div className="flex items-center">Logo</div>
      {/* Middle */}
      <div className="flex">
        <button className="mx-3">
          <Link to="/home">Home</Link>
        </button>

        <button className="mx-3">Map</button>
        <button className="mx-3">Doctors</button>
        <button className="mx-3">About Us</button>
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
