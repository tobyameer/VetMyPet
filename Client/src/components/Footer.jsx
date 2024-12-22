import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#003445] text-[#BFBFBF] min-h-[400px] overflow-y-hidden">
      <div className="flex justify-between mx-[100px] my-[50px]">
        {/* all cols */}
        <div className="flex space-x-20">
          {/* one col */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[#EFEFEF]">INFO</h1>
            <p>Formats</p>
            <p>Compression</p>
            <p>Pricing</p>
            <p>FAQ</p>
            <p>Status</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#EFEFEF]">RESOURCES</h1>
            <p>Developer API</p>
            <p>Tools</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#EFEFEF]">Company</h1>
            <p>About Us</p>
            <p>Sustainability</p>
            <p>Terms of services</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <p>Subscribe to our email newsletter</p>
              <div className="flex my-5 space-x-2">
                <input
                  type="text"
                  placeholder="email"
                  className="border border-[#3F6975] bg-inherit px-2 py-1"
                />
                <button className="w-[120px] bg-white text-[#003748] rounded-lg font-semibold">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div>
              <p>Follow us</p>
              <div className="flex gap-3 mt-2">
                <FaInstagram />
                <FaFacebook />
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
