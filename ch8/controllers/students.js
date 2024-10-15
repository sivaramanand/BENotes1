const allStudents = (req, res) => {
  res.send("All students");
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  if (id == 10) {
    return res.send("ID 10 belongs to a user, so it can't be deleted");
  } else {
    return res.send(`Student deleted with ID: ${id}`);
  }
};

export { allStudents, deleteStudent };
