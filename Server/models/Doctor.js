const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  number: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: null }, // New field for appointment date
  status: { type: String, default: "Available" }, // New field for status
});

const DoctorModel = mongoose.model("doctors", DoctorSchema);

module.exports = DoctorModel;
