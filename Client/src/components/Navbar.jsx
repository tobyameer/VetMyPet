import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import axios from "axios";

const Navbar = () => {
  const [login, setLogin] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("Users ID:") || "";
    console.log(userId);
    if (!userId) {
      setLogin("Login");
    } else {
      axios
        .get(`http://localhost:3001/getUser/${userId}`, {
          withCredentials: true,
        })
        .then((res) => {
          const user = res.data.user;
          setLogin(user.name);
        })
        .catch((err) => {
          console.error("Axios Error:", err.response?.data || err.message);
          setLogin("Login");
        });
    }
  }, []);

  return (
    <div
      style={{ background: "#007EA7" }}
      className=" text-white h-[50px] flex justify-between w-screen px-[50px]"
    >
      <div className="flex items-center font-bold">Fix My Pet</div>

      {/* Middle */}
      <div className="flex">
        <button className="mx-3">
          <Link to="/">Home</Link>
        </button>

        <button className="mx-3">
          <Link to="/map">Map</Link>
        </button>
        <button className="mx-3">
          <Link to="/appointments">Appointments</Link>
        </button>
      </div>
      {/* END */}
      <div className="flex items-center">
        <div className="flex mr-3">
          <TbWorld size={16} style={{ marginTop: "4px" }} />
          <button className="ml-1">EN</button>
        </div>
        <div className="flex ml-3">
          <FaUser style={{ marginTop: "5px" }} size={13} />
          <button className="ml-1">
            <Link to={login == "Login" ? "/userLogin" : "/profile"}>
              {login}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
