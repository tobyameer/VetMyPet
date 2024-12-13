import React, { useState } from "react";
import ItemList from "../components/ItemList";
import Calender from "../components/Calender";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { doctor } from "../dummyData";
import AddAppointment from "../components/AddAppointment";

const DoctorList = () => {
  const [open, setOpen] = useState(false);

  const handleAppointment = () => {};
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
          <button
            onClick={(e) => setOpen(!open)}
            className={
              open
                ? "hidden"
                : "flex justify-center items-center bg-[#007EA7] text-white h-[40px] w-[200px] rounded-lg gap-2"
            }
          >
            <FaPlus />
            Add Appointment
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="grid mt-[20px]">
        <div className="flex justify-center col-span-2 text-center m-5">
          {/* List */}
          {!open ? <ItemList /> : <AddAppointment />}
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
