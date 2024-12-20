import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState("");
  const navigate = useNavigate();

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

  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
    console.log("After deletion:", localStorage.getItem("Users ID:")); // Should print null
  };

  return (
    <div
      style={{ background: "#007EA7" }}
      className=" text-white h-[80px] flex justify-between w-screen px-[50px]"
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
      <div className="flex justify-between items-center w-[29%] lg:w-[19%] xl:w-[17%]:">
        <div className="flex">
          <TbWorld size={16} style={{ marginTop: "4px" }} />
          <button className="ml-1">EN</button>
        </div>
        <div className="flex">
          <FaUser style={{ marginTop: "5px" }} size={13} />
          <button className="ml-1">
            <Link to={login == "Login" ? "/userLogin" : "/profile"}>
              {login}
            </Link>
          </button>
        </div>
        <div className={login == "Login" ? "hidden" : ""}>
          <button
            onClick={handleLogOut}
            className="flex justify-center items-center gap-1"
          >
            Sign out
            <IoLogInOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
