import express from "express";
import stu from "./routes/students.js";
import tea from "../ch6/routes/teacherss.js";
const app = express();
const port = "3000";

app.use("/student1", stu);
app.use("/teacher1", tea);

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
