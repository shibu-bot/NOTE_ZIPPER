const express = require("express");
const app = express(); // craete an object
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const notes = require("./data/notes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
require("dotenv").config();
connectDB();
app.use(express.json()); // to get user data from the user

// app.get("/", (req, res) => {
//   res.send("HELLO");
// });

// app.get("/notes", (req, res) => {
//   res.json(notes);
// });

//A Routes for user and notes
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("SERVER IS RUNNING"));
