import React from "react";
import ItemList from "../components/ItemList";
import Calender from "../components/Calender";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { doctor } from "../dummyData";

const DoctorList = () => {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Header */}
      <div className="flex justify-between items-center my-[40px] mx-[30px]">
        <h1 className="font-bold text-[34px]">Manage Appointments</h1>
        <div className="flex gap-[20px]">
          <div className="flex bg-[#7FBED3] w-[200px] h-[40px] text-center items-center justify-center rounded-3xl ">
            <input
              type="text"
              placeholder="Search"
              className="border-none bg-inherit placeholder-[#007EA7] hover:outline-none hover:ring-0 hover:border-transparent"
            />
            <FaSearch color="#007EA7" />
          </div>
          <button className="flex justify-center items-center bg-[#007EA7] text-white h-[40px] w-[200px] rounded-lg">
            <FaPlus />
            Add Appointment
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="grid grid-cols-3 mt-[20px]">
        <div className=" col-span-2 text-center m-5">
          <div className="grid grid-cols-5  items-center h-[35px] rounded-xl">
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
              <button className=" text-black font-bold text-[12px]">
                Date
              </button>
            </div>
            <div>
              <button className=" text-black font-bold text-[12px]">
                Status
              </button>
            </div>
          </div>
          {/* List */}
          <div className="grid grid-rows-10 text-center">
            {doctor.map((item, index) => (
              <div
                index={index}
                className={
                  index / 2 == 0
                    ? "grid grid-cols-5 py-5 bg-[#EFF6F9]"
                    : "grid grid-cols-5 py-5 bg-white"
                }
              >
                <p>{item.name}</p>
                <p>{item.lastName}</p>
                <p>{item.phone}</p>
                <p>{item.date}</p>
                <button>{item.status ? "busy" : "free"}</button>
              </div>
            ))}
          </div>
        </div>

        {/* <div className=" flex flex-col text-center m-3">
            <p></p>
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
          </div> */}
        {/* Calender */}
        <div className=" col-span-1 bg-blue-500 w-[full] p-4 ">
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default DoctorList;

{
  /* <div className="grid grid-cols-5 py-5 bg-[#EFF6F9]">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5 bg-[#EFF6F9]">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5 bg-[#EFF6F9]">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5 bg-[#EFF6F9]">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5 bg-[#EFF6F9]">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>
            <div className="grid grid-cols-5 py-5">
              <p>Ahmed</p>
              <p>Mohamed</p>
              <p>0100924927</p>
              <p>13/10/2023</p>
              <button>Busy</button>
            </div>*/
}
