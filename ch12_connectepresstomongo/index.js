import express from "express";
const app = express();
const port = "3000";
import connectDB from "./db/connectdb.js";
const DatabaseURL = "mongodb://localhost:27017/schooldb";

connectDB(DatabaseURL);

app.listen(port, () => {
  console.log("server listening at localhost 3000");
});
