import express from "express";
const port = 3000;
const dburl = "mongodb://localhost:27017/schooldb1";
const app = express();
import connectDB from "./db/connectDB.js";
import { comparison1 } from "./models/Student.js";
connectDB(dburl);
comparison1();
app.listen(port, () => {
  console.log("port running at 3000");
});
