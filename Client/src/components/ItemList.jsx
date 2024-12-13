import React from "react";
import { doctor } from "../dummyData";
import { FaRegTrashAlt } from "react-icons/fa";

const ItemList = () => {
  return (
    <div>
      {/* filter */}
      <div className="grid grid-cols-7  items-center h-[35px] rounded-xl">
        <div>
          <button className=" text-black-300 font-bold text-[12px]">
            First Name
          </button>
        </div>
        <div>
          <button className=" text-black font-bold text-[12px]">
            Last Name
          </button>
        </div>
        <div>
          <button className=" text-black font-bold text-[12px]">
            Phone Number
          </button>
        </div>
        <div>
          <button className=" text-black font-bold text-[12px]">Date</button>
        </div>
        <div>
          <button className=" text-black font-bold text-[12px]">Status</button>
        </div>
        <div>
          <button className=" text-black font-bold text-[12px]">Action</button>
        </div>
      </div>
      <div className="grid grid-rows text-center">
        {doctor.map((item, index) => (
          <div
            index={index}
            className={
              item.status
                ? "grid grid-cols-7 py-5 bg-[#EFF6F9] items-center"
                : "grid grid-cols-7 py-5 bg-white items-center"
            }
          >
            <p>{item.name}</p>
            <p>{item.lastName}</p>
            <p>{item.phone}</p>
            <p>{item.date}</p>
            <button>{item.status ? "Booked" : "Book"}</button>
            <div className=" flex justify-center col-span-2">
              <button className="bg-[#007EA7] text-white h-[28px] w-[90px] rounded-lg text-[14px] font-semibold">
                {item.status ? "Booked" : "Book Now"}
              </button>
              <button className="bg-[#007EA7] text-white h-[28px] w-[90px] rounded-lg text-[14px] font-semibold mx-3">
                Edit
              </button>
              <button>
                <FaRegTrashAlt color="red" size={17} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
