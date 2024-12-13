const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const session = require("express-session");
const MongoStore = require("connect-mongo");

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

// Sign Up
app.post("/signup", async (req, res) => {
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

// Log In
app.post("/login", async (req, res) => {
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
