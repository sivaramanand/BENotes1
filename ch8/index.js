import express from "express";
import students from "./Routes/students.js"; 

const app = express();
const port = 3001;

app.use("/student", students);

app.listen(port, () => {
  console.log(`Server listening check1  at at ${port}`);
});
