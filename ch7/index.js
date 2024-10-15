const express = require("express");
const app = express();
const port = 3001;

// app.get(`/student/delete/:id`, (req, res) => {
//   console.log(req.params);
//   res.send(`student deleted at ${req.params.id}`);
// });

// app.get(`/student/delete/:category/:id`, (req, res) => {
//   console.log(req.params);
//   res.send(`student deleted at ${req.params.category}`);
// });

// app.get(`/student/delete/:category-:id`, (req, res) => {
//   console.log(req.params);
//   res.send(`student deleted at ${req.params.category} ${req.params.id}`);
// });

// app.get(`/student/delete/:category.:id`, (req, res) => {
//   console.log(req.params);
//   res.send(`student deleted at  ${req.params.category} ${req.params.category}`);
// });

// app.get("/student/delete/[0-9]{3}",(req,res)=>{
//   res.send("regex expression is working")
// })

// request param

// app.param("id", (req, res, next, id) => {
//   console.log(`ID:${id}`);
//   next()
// });

// app.get("/user/:id", (req, res,next) => {
//   console.log("this is userID path");
//   res.send("response OK");
//   next()
// });

// app.get("/user/:ids", (req, res,next) => {
//   console.log("this is userID path 2");
//   res.send("response OK");
//   next()
// });

//query string

app.get("/product", (req, res) => {
  console.log(req.query);
  const { cateogry, id } = req.query;
  res.send(`${cateogry}, ${id}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
