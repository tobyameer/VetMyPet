import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

const ItemList = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const getDoc = async () => {
      try {
        const res = await axios.get("http://localhost:3001/allDoc", {
          withCredentials: true,
        });
        console.log(res.data);
        setDoctor(res.data);
      } catch (err) {
        console.err("Error fetching appointments:", err);
      }
    };
    getDoc();
    console.log(doctor);
  }, []);

  const handleDelete = async (doctorId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );
    if (!confirmDelete) return;

    try {
      // Remove the deleted doctor from the frontend state
      setDoctor((prevAppointments) =>
        prevAppointments.filter((doctor) => doctor._id !== doctorId)
      );

      alert("Appointment deleted successfully");
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Failed to delete the appointment. Please try again.");
    }
  };

  return (
    <div className="mx-[50px] w-screen">
      {/* Header for table */}
      <div className="grid grid-cols-7 items-center h-[35px] rounded-xl max-w-[90%]">
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

      {/* Render doctor data */}
      {doctor.length > 0 ? (
        doctor.map((doctor, index) => (
          <div
            key={index} // Use unique key
            className={`grid grid-cols-7 py-5 max-w-[90%] ${
              doctor.status ? "bg-[#EFF6F9]" : "bg-white"
            } items-center`}
          >
            <p>{doctor.name}</p>
            <p>{doctor.lastName}</p>
            <p>{doctor.number}</p>
            <p>{doctor.date || "N/A"}</p>
            <p>{doctor.status ? "Booked" : "Available"}</p>
            <div className="flex justify-center col-span-2">
              <button className="bg-[#007EA7] text-white h-[28px] w-[90px] rounded-lg text-[14px] font-semibold">
                {doctor.status ? "Booked" : "Book Now"}
              </button>
              <button className="bg-[#007EA7] text-white h-[28px] w-[90px] rounded-lg text-[14px] font-semibold mx-3">
                Edit
              </button>
              <button onClick={() => handleDelete(doctor._id)}>
                <FaRegTrashAlt color="red" size={17} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-5">No doctors found</p>
      )}
    </div>
  );
};

export default ItemList;
