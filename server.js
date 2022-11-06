const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const ErrorController = require("./back-end/controller/errorController");
const AppError = require("./back-end/utils/appError");
const employeeRouter = require("./back-end/routes/employeeRoutes");
const projectRouter = require("./back-end/routes/projectRoutes");
const departmentRouter = require("./back-end/routes/departmentRoute");
const designationRouter = require("./back-end/routes/designationRoute");
const taskRouter = require("./back-end/routes/tasksRoutes");
const limiter = rateLimiter({
  max: 100,
  windowsMS: 60 * 60 * 1000,
  message: "Too many requests , please try again after an hour",
});
app.use(helmet());
app.use("/api", limiter);
app.use(mongoSanitize());
app.use(xssClean());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use(express.json());
dotenv.config({ path: "./back-end/config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const PORT = process.env.PORT;
app.use("/api/v1/departments", departmentRouter);
app.use("/api/v1/designation", designationRouter);
app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/employees", employeeRouter);
app.use("/api/v1/projects", projectRouter);
app.all("*", (req, res, next) => {
  next(new AppError("Error : No Page is found", 404));
});
mongoose.connect(DB, {}).then((connect) => {
  console.log("connect to database successfully");
});
app.use(ErrorController);
app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
