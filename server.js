const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const employee = require("./back-end/routes/employeeRoute");
const department = require("./back-end/routes/departmentRoute");
const designation = require("./back-end/routes/designationRoute");

app.use(express.json());
// get configuration file
dotenv.config({ path: "./back-end/config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const PORT = process.env.PORT;


// register routes
app.use(employee);
app.use(department);
app.use(designation);

app.get("/", (req, res) => {
  res.send("Hello from the home page");
});

mongoose.connect(DB, {}).then((connect) => {
  console.log("connect to database successfully");
});

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});