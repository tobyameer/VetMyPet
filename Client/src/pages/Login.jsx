import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/login",
        { email, password },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.data === "Success") {
          axios
            .get("http://localhost:3001/user", { withCredentials: true })
            .then((response) => {
              if (response.data.user) {
                navigate("/", { state: { user: response.data.user } });
              }
            });
          console.log("Login Successfully!");
        } else {
          alert("login failed: user Does not exist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* Logo */}
      <div className="flex w-full h-screen items-center justify-center">
        <div className="border border-[#7FBED3] w-[500px] h-[550px] rounded-3xl bg-white flex flex-col items-center justify-center">
          <h1 className="my-[10px] text-[22px] text-center ">Login</h1>
          <div className="flex flex-col">
            <p className="my-[6px] font-semibold text-[18px]">Email</p>
            <div className="flex items-center pl-4 border-none bg-gray-100 w-[300px] rounded-xl h-[45px]">
              <FaUser color="gray" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="border-none p-3 bg-inherit placeholder-[gray] hover:outline-none hover:ring-0 hover:border-transparent "
              />
            </div>
            <p className="my-[6px] font-semibold text-[18px] ">Password</p>
            <div className="flex items-center pl-4 border-none bg-gray-100 w-[300px] rounded-xl h-[45px]">
              <FaLock color="gray" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="border-none p-3 bg-inherit placeholder-[gray] hover:outline-none hover:ring-0 hover:border-transparent "
              />
            </div>
            <div className="flex flex-row items-center justify-between text-[11px]">
              <div className="flex items-center">
                <input type="checkbox" name="" id="" />
                <p className="mx-2 text-gray-500">Remember Password</p>
              </div>
              <a className="text-[#007EA7]" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className=" mt-[35px] bg-[#007EA7] text-white w-[300px] h-[45px] rounded-2xl"
              >
                Sign in
              </button>
            </div>
          </div>

          {/* SingUp */}
          <div className="flex justify-center my-3">
            <p className=" text-[12px] text-gray-500">Don't have an account?</p>
            <p className="text-[12px] ml-1 text-blue-300">
              <Link to="/signup">
                <a href="" className="text-[#007EA7]">
                  Sign up
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
