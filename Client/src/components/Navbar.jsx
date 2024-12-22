import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [login, setLogin] = useState("");
  const [scroll, setScroll] = useState(false);
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
    console.log("After deletion:", localStorage.getItem("Users ID:")); // Should print null
  };

  return (
    <div
      onScroll={() => setScroll(true)}
      className={`${
        scroll
          ? "sticky z-[10] transition-all duration-300 bg-[#00526c] shadow-md top-0 text-white h-[120px]"
          : "bg-inherit top-0 text-black h-[120px]"
      } flex justify-between items-center w-screen px-[50px]`}
    >
      <Link to="/">
        <div className="flex items-center font-bold text-[25px]">
          Fix My Pet
        </div>
      </Link>

      {/* Middle */}
      <div className="flex text-[20px]">
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
      <div
        className={
          login == "Login"
            ? "flex justify-center items-center w-[29%] lg:w-[19%] xl:w-[17%]"
            : "flex items-center w-[29%] lg:w-[19%] xl:w-[17%]"
        }
      >
        <div className="flex mx-5">
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
            className="flex mx-3 justify-center items-center gap-1"
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
