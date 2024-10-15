import express from "express";
import connectDB from "./DB/connectDB.js";
const port = "3000";
const DBURL = "mongodb://localhost:27017/schooldb1";
const app = express();
import { deleteOne } from "./model/student.js";

deleteOne()

connectDB(DBURL);
app.listen(port, () => {
  console.log("port connected at 3000");
});
