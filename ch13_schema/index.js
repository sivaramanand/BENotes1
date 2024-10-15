import express from "express";
import connectDB from "../ch12_connectepresstomongo/db/connectdb.js";
import "./models/student.js";
const app = express();
const port = "3000";
const databaseurl = "mongodb://localhost:27017";

connectDB(databaseurl);

app.listen(port, () => {
  console.log("port successfully connected");
});
