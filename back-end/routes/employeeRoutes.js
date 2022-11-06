const express = require("express");
// const employee = require("./../models/employeeModel")
const employeeController = require("../controller/employeeController");
const authController = require("./../controller/authController");
const router = express.Router();

router.route("/login").post(authController.login);

router
  .route("/")
  .get(employeeController.getEmployees)
  .post(employeeController.createEmployee);
router
  .route("/:id")
  .get(employeeController.getEmployeeById)
  .patch(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

module.exports = router;
