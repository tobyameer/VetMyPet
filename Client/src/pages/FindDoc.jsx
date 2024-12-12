import React from "react";
import Navbar from "../components/Navbar";

const FindDoc = () => {
  return (
    <div className="m-0 p-0 flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37451031098!2d31.258464350000004!3d30.059488450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1733176260349!5m2!1sen!2seg"
          style={{ width: "100%", height: 450, border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>
      </div>

      {/* Flexbox centered content */}
      <div className="flex justify-center items-center h-[150px] mt-[30px] bg-sky-100 border-2 border-[#7FBED3] w-[400px] mx-auto rounded-t-3xl">
        <div className="grid grid-rows-2 gap-4">
          <input
            placeholder="Pickup Location"
            className="grid col-span-2 border-none placeholder-black font-semibold"
          />
          <input
            placeholder="Date"
            className="col-span-1 border-none placeholder-black font-semibold"
          />
          <input
            placeholder="Time"
            className="col-span-1 border-none placeholder-black font-semibold"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-[400px] h-[50px] bg-[#3fc59e] rounded-b-3xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default FindDoc;
