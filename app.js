const express = require("express");
const morgan = require("morgan");
const usersRoutes = require("./routes/userRoutes");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(usersRoutes);
app.get("/users", (req, res) => {
  res.send("respondiendo al get");
});
app.post("/users", (req, res) => {
  res.json(req.body);
});
app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto 8000");
});
