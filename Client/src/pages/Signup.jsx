import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../images/background_vet.png";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/singup", {
        name,
        lastName,
        email,
        password,
      })
      .then((result) => {
        if (result.status == 201) {
          navigate("/");
          console.log("User created successfully");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists. Please use a different email");
        } else {
          console.log(err);
        }
      });
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-[40%] flex flex-col align-center justify-center">
        {/* Logo */}
        <div>
          <h1 className="absolute left-[5%] top-[5%]">logo</h1>
        </div>
        {/* Login */}
        <div className="m-auto">
          <h1 className="my-[10px] text-[22px] text-center ">Register</h1>
          <div className=" flex flex-col">
            <p className="my-[6px] font-bold text-[18px] w-[180px] lg:w-[250px]">
              First Name
            </p>
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="my-[6px] font-bold text-[18px] w-[180px] lg:w-[250px]">
              Last Name
            </p>
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <p className="my-[6px] font-bold text-[18px] w-[180px] lg:w-[250px]">
              Email
            </p>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="my-[6px] font-bold text-[18px] ">Password</p>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="mt-[35px] bg-black text-white w-[200px] h-[38px]"
              onClick={handleSubmit}
            >
              <Link to="/">Sign Up</Link>
            </button>
          </div>
          {/* SingUp */}
          <div className="flex justify-center my-3">
            <p className=" text-[12px]">Already have an account? </p>
            <p className="text-[12px] ml-1 text-blue-300">
              <Link to="/">
                <a href="">Log In</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Background */}
      <div className="w-[60%] h-screen">
        <p>
          <img className="h-screen w-full" src={background} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Signup;
