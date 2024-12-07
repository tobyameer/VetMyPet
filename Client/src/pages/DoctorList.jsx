import React from "react";
import ItemList from "../components/ItemList";
import Calender from "../components/Calender";
import Navbar from "../components/Navbar";

const DoctorList = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        {/* Filter */}
        <div>
          <div className="flex justify-evenly items-center bg-green-200 h-[35px] rounded-xl">
            <div>
              <button className="bg-white text-green-300 h-[30px] text-[12px] rounded-xl w-[80px]">
                All Status
              </button>
            </div>
            <div>
              <button className="bg-green-200 text-white h-[30px] text-[12px] rounded-xl w-[80px]">
                New
              </button>
            </div>
            <div>
              <button className="bg-green-200 text-white h-[30px] text-[12px] rounded-xl w-[80px]">
                Approved
              </button>
            </div>
            <div>
              <button className="bg-green-200 text-white h-[30px] text-[12px] rounded-xl w-[80px]">
                Need approve
              </button>
            </div>
            <div>
              <button className="bg-green-200 text-white text-[12px] h-[30px] rounded-xl w-[80px]">
                Refused
              </button>
            </div>
          </div>

          {/* List */}
          <div className=" flex flex-col text-center m-3">
            <p></p>
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
          </div>
        </div>
        {/* Calender */}
        <div className="bg-blue-500 w-[300px] mx-3 p-4 rounded-2xl">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
