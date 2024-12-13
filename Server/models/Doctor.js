const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  number: Number,
  password: String,
});

const DoctorModel = mongoose.model("doctor", DoctorSchema);

module.exports = DoctorModel;
