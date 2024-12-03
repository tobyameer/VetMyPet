import React from "react";
import { Link } from "react-router-dom";
import background from "../images/background_vet.png";

const Login = () => {
  return (
    <div className="flex w-full h-screen">
      SignUp
      <div className="w-[40%] flex flex-col align-center justify-center">
        {/* Logo */}
        <div>
          <h1 className="absolute left-[5%] top-[5%]">logo</h1>
        </div>
        {/* Login */}
        <div className="m-auto">
          <h1 className="my-[10px] text-[22px] text-center ">Welcome Back</h1>
          <div className=" flex flex-col">
            <p className="my-[6px] font-bold text-[18px] w-[180px] lg:w-[250px]">
              Email
            </p>
            <input type="email" placeholder="Enter your email" />
            <p className="my-[6px] font-bold text-[18px] ">Password</p>
            <input type="password" placeholder="********" />
            <Link to="/home">
              <button className="mt-[35px] bg-black text-white w-[200px] h-[38px]">
                Sign in
              </button>
            </Link>
          </div>
          {/* SingUp */}
          <div className="flex justify-center my-3">
            <p className=" text-[12px]">Don't have an account? </p>
            <p className="text-[12px] ml-1 text-blue-300">
              <a href=""> Sign up</a>
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

export default Login;
