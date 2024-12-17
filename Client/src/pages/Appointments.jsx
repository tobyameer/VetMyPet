import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import AddAppointment from "../components/AddAppointment";

const Appointments = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <div className="mx-[50px]">
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
        <div className="mt-[20px]">
          <div className="flex justify-center text-center mb-5">
            {/* List */}
            {!open ? (
              <ItemList />
            ) : (
              <AddAppointment open={open} setOpen={setOpen} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
