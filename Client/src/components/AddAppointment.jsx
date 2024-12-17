import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { IoArrowBackOutline } from "react-icons/io5";

const AddAppointment = ({ open, setOpen }) => {
  const [selectedUser, setSelectedUser] = useState(null); // Initialize as null
  const [selectedDate, setSelectedDate] = useState("");
  const [doctor, setDoctor] = useState([]);

  // Fetch doctor data
  useEffect(() => {
    const getDoc = async () => {
      try {
        const res = await axios.get("http://localhost:3001/allDoc", {
          withCredentials: true,
        });
        console.log("Doctors fetched:", res.data);
        setDoctor(res.data); // Store doctors in state
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    getDoc();
    console.log(doctor);
  }, []);

  const handleBooking = async () => {
    if (!selectedUser || !selectedDate) {
      alert("Please select a doctor and a date.");
      return;
    }

    try {
      const updatedDoctor = {
        date: selectedDate,
        status: "Booked", // Set the status to "Booked"
      };

      const addDoctorAppointment = JSON.parse(
        localStorage.getItem("Doctor Appointment:") || "[]"
      );

      const newDoctorAppointment = {
        doctorId: selectedUser._id,
        doctorName: selectedUser.name,
        doctorLastName: selectedUser.lastName,
        doctorNumber: selectedUser.number,
        doctorDate: selectedUser.date,
        doctorStatus: selectedUser.status,
      };

      addDoctorAppointment.push(newDoctorAppointment);

      localStorage.setItem(
        "Doctor Appointment:",
        JSON.stringify(addDoctorAppointment)
      );

      const res1 = await axios.put(
        `http://localhost:3001/bookDoctor/${selectedUser._id}`,
        updatedDoctor,
        {
          withCredentials: true,
        }
      );

      // Show success and update frontend if needed
      console.log("Doctor booked successfully:", res1.data);

      alert(`Appointment booked for Dr. ${selectedUser.name}`);
      setSelectedUser(null); // Clear selected doctor
      setSelectedDate(""); // Clear selected date
      setOpen(!open);
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  const handleName = (e) => {
    const userId = e.target.value; // Get selected value (doctor ID)
    const user = doctor.find((doc) => doc._id === userId); // Find the doctor by ID
    setSelectedUser(user); // Update selected user
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
    <div className="flex flex-col justify-center ">
      <div className="relative border-2 rounded-xl border-[#7FBED3] w-[500px] h-[650px] mt-[30px] bg-[#F1F7F9]">
        <button
          onClick={(e) => setOpen(!open)}
          className="absolute top-[5%] left-[6%] flex justify-center items-center gap-1 bg-[#7FBED3] text-white w-[80px] h-[30px] rounded-lg"
        >
          <IoArrowBackOutline />
          Back
        </button>
        <div className="my-[80px]">
          {/* Dropdown */}
          <label htmlFor="options" className="text-[20px] font-semibold mx-1">
            Choose a Doctor:
          </label>
          <select
            id="options"
            value={selectedUser?._id || ""}
            onChange={handleName}
          >
            <option value="" disabled>
              Select a doctor
            </option>
            {doctor.map((doc) => (
              <option value={doc._id} key={doc._id}>
                {doc.name}
              </option>
            ))}
          </select>

          {/* Doctor details */}
          <div className="flex flex-col justify-center items-center mt-[50px] gap-3">
            <p className="text-[18px] font-semibold">First Name</p>
            <input
              type="text"
              placeholder={selectedUser?.name || "N/A"}
              disabled
              className="bg-[#CFE6EE] border-none text-[18px] placeholder-[#007EA7] text-center p-0"
            />
            <p className="text-[18px] font-semibold">Last Name</p>
            <input
              type="text"
              placeholder={selectedUser?.lastName || "N/A"}
              disabled
              className="bg-[#CFE6EE] border-none text-[18px] placeholder-[#007EA7] text-center p-0"
            />
            <p className="text-[18px] font-semibold">Phone Number</p>
            <input
              type="text"
              placeholder={selectedUser?.number || "N/A"}
              disabled
              className="bg-[#CFE6EE] border-none text-[18px] placeholder-[#007EA7] text-center p-0"
            />
          </div>

          {/* Date Picker */}
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

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleBooking}
              className="flex justify-center items-center bg-[#3fc59e] text-white h-[40px] w-[200px] rounded-lg gap-2"
            >
              <FaPlus />
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
