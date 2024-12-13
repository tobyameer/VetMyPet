const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const UserModel = require("./models/User");
const DoctorModel = require("./models/Doctor");

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  })
);

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

// Connecting to Port
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port ${process.env.PORT}`);
});

{
  /* User */
}

// User Sign Up
app.post("/userSignup", async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    console.log(name + " " + lastName + " " + email + " " + password);
    const existingUser = await UserModel.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ error: "email already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      lastName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    express.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Log In
app.post("/userLogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        req.session.user = {
          id: user._id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
        };
        res.json("Success");
        console.log(email);
        console.log(user.name);
      } else {
        res.status(401).json("Password dose'nt match");
      }
    } else {
      res.status(404).json("No Records found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/user", (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json("Not authenticated");
  }
});

// Sign Up Doctor
app.post("/docSignup", async (req, res) => {
  try {
    const { name, lastName, number, password } = req.body;
    console.log(name + " " + lastName + " " + number + " " + password);
    const existingDoc = await DoctorModel.findOne({ number });
    console.log(existingDoc);
    if (existingDoc) {
      return res.status(400).json({ error: "number already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newDoc = new DoctorModel({
      name,
      lastName,
      number,
      password: hashedPassword,
    });
    const savedDoc = await newDoc.save();
    res.status(201).json(savedDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

{
  /* Doctor */
}

// Doctor Log In
app.post("/docLogin", async (req, res) => {
  try {
    const { number, password } = req.body;
    const doc = await DoctorModel.findOne({ number });
    if (doc) {
      const passwordMatch = await bcrypt.compare(password, doc.password);
      if (passwordMatch) {
        req.session.doc = {
          id: doc._id,
          name: doc.name,
          lastName: doc.lastName,
          number: doc.number,
        };
        res.json("Success");
        console.log(number);
        console.log(doc.name);
      } else {
        res.status(401).json("Password does'nt match");
      }
    } else {
      res.status(404).json("No Records found");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update doctor with date and status
app.put("/bookDoctor/:id", async (req, res) => {
  try {
    const doctorId = req.params.id; // Get doctor ID from params
    const { date, status } = req.body; // Get date and status from request body

    // Find and update the doctor
    const updatedDoctor = await DoctorModel.findByIdAndUpdate(
      doctorId,
      { date, status },
      { new: true } // Return the updated document
    );

    if (!updatedDoctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.json(updatedDoctor); // Respond with updated doctor
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// // Delete a doctor by ID
// app.delete("/appointments/:id", async (req, res) => {
//   try {
//     const doctorId = req.params.id; // Get doctor ID from request parameters
//     const deletedDoctor = await DoctorModel.findByIdAndDelete(doctorId);

//     if (!deletedDoctor) {
//       return res.status(404).json({ error: "Doctor not found" });
//     }

//     res.json({ message: "Doctor deleted successfully", doctor: deletedDoctor });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Get logged in doctor
app.get("/doc", (req, res) => {
  if (req.session.doc) {
    res.json({ doc: req.session.doc });
  } else {
    res.status(401).json("Not authenticated");
  }
});

// Get all doctors
app.get("/allDoc", async (req, res) => {
  try {
    const doctors = await DoctorModel.find(); // Fetch all doctors
    res.status(200).json(doctors); // Return the list of doctors
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
