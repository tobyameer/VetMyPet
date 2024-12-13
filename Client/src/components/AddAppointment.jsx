import React, { useState } from "react";
import { doctor } from "../dummyData";
import { FaPlus } from "react-icons/fa";

const AddAppointment = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [open, setOpen] = useState(false);

  const handleName = (e) => {
    const userId = parseInt(e.target.value, 10);
    const user = doctor.find((user) => user.id === userId);
    setSelectedUser(e.target.value);
    setSelectedUser(user); // Update the selected user
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Update the selected date
  };

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Handle empty date
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Format as DD/MM/YYYY
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="border-2 rounded-xl border-[#007EA7] w-[500px] h-[650px] mt-[30px] bg-[#F1F7F9]">
        <div className="my-[80px]">
          <label htmlFor="options" className="text-[20px] font-semibold mx-1">
            Choose an option:
          </label>
          <select id="options" value={selectedUser} onChange={handleName}>
            <option value="" disabled>
              Doctors
            </option>
            {doctor.map((item, index) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="flex flex-col justify-center items-center mt-[50px] gap-3">
            <p className="text-[18px] font-semibold">First Name</p>
            <input
              type="text"
              placeholder={selectedUser.name}
              disabled
              className="bg-[#CFE6EE] border-none text-[18px] placeholder-[#007EA7]  text-center p-0"
            />
            <p className="text-[18px] font-semibold">Last Name</p>
            <input
              type="text"
              placeholder={selectedUser.lastName}
              disabled
              className="bg-[#CFE6EE] border-none text-[18px] placeholder-[#007EA7] text-center p-0"
            />
            <p className="text-[18px] font-semibold">Phone Number</p>
            <input
              type="text"
              placeholder={selectedUser.phone}
              disabled
              className="bg-[#CFE6EE] border-none text-[18px] placeholder-[#007EA7]  text-center p-0"
            />
          </div>
          <div className="flex flex-col gap-7 justify-center items-center">
            <div className="mt-[20px] mb-[30px] h-[60px]">
              <label htmlFor="dateInput" className="text-[18px] font-semibold">
                Choose a date:{" "}
              </label>
              <input
                type="date"
                id="dateInput"
                value={selectedDate}
                onChange={handleDateChange}
              />
              {selectedDate && (
                <p className="text-[18px] mt-2">
                  Selected Date: {formatDate(selectedDate)}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={(e) => setOpen(!open)}
              className="flex justify-center items-center bg-[#007EA7] text-white h-[40px] w-[200px] rounded-lg gap-2"
            >
              <FaPlus />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
