import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ItemList = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Doctor Appointment:"));
    setDoctor(data); // Set doctors data (array)
  }, []);

  const handleDelete = async (doctorId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );
    console.log(doctorId);
    if (!confirmDelete) return;

    try {
      // Remove the deleted doctor from the frontend state
      let array = JSON.parse(localStorage.getItem("Doctor Appointment:")) || [];

      const indexToRemove = doctorId; // Replace with the index of the item

      if (indexToRemove > -1 && indexToRemove < array.length) {
        array.splice(indexToRemove, 1); // Removes 1 item at the specified index
      }

      localStorage.setItem("Doctor Appointment:", JSON.stringify(array));
      console.log("Updated array:", array);

      alert("Appointment deleted successfully");
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Failed to delete the appointment. Please try again.");
    }
  };
  const handleClick = () => {
    alert("Emergency Call 911");
  };

  return (
    <div className="mx-[50px]">
      {/* Header for table */}
      <div className="grid grid-cols-7 items-center h-[35px] rounded-xl max-w-[90%]">
        <div>
          <button className="text-black-300 font-bold text-[12px]">
            First Name
          </button>
        </div>
        <div>
          <button className="text-black font-bold text-[12px]">
            Last Name
          </button>
        </div>
        <div>
          <button className="text-black font-bold text-[12px]">
            Phone Number
          </button>
        </div>
        <div>
          <button className="text-black font-bold text-[12px]">Date</button>
        </div>
        <div>
          <button className="text-black font-bold text-[12px]">Status</button>
        </div>
        <div>
          <button className="text-black font-bold text-[12px]">Action</button>
        </div>
      </div>

      {/* Render doctor data */}
      {doctor && doctor.length > 0 ? (
        doctor.map((doctor, index) => (
          <div
            key={index}
            className={`grid grid-cols-7 py-5 max-w-[90%] ${
              doctor.doctorStatus ? "bg-[#EFF6F9]" : "bg-white"
            } items-center`}
          >
            <p>{doctor.doctorName}</p>
            <p>{doctor.doctorLastName}</p>
            <p>{doctor.doctorNumber}</p>
            <p>{doctor.doctorDate || "N/A"}</p>
            <p>{doctor.doctorStatus ? "Booked" : "Available"}</p>
            <div className="flex justify-center col-span-2">
              <button
                onClick={handleClick}
                className="bg-[#007EA7] text-white h-[28px] w-[90px] rounded-lg text-[14px] font-semibold"
              >
                Call
              </button>
              <button className="bg-[#007EA7] text-white h-[28px] w-[90px] rounded-lg text-[14px] font-semibold mx-3">
                Edit
              </button>
              <button onClick={() => handleDelete(index)}>
                <FaRegTrashAlt color="red" size={17} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No appointments available</p>
      )}
    </div>
  );
};

export default ItemList;
