import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("all student");
});
router.post("/create", (req, res) => {
  res.send("all student");
});
router.put("/update", (req, res) => {
  res.send("student updated");
});
router.delete("/delete", (req, res) => {
  res.send("student deleted");
});

export default router