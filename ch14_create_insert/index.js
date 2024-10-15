import express from "express";
import connectDB from "./db/connectdb.js";
import {createdoc,createmultipledoc} from "./model/Student.js";
import "./model/Student.js";
const app = express();
const port = 3000;
const databaseurl = "mongodb://localhost:27017/schooldb1";
//database connection
connectDB(databaseurl);
//create and save document
// createdoc("subash",29,7500.7,false,[{ value: "this is bad mongoose" }]);
createmultipledoc()
app.listen(port, () => {
  console.log("port running successfully");
});
