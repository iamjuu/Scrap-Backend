const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
const mongoose = require("mongoose");
const Database = require("./config/Dbconnection");
const UserRouter = require("./Router/user/userRouter");
Database();
env.config();
const Port = process.env.port || 7000;

const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", UserRouter);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

