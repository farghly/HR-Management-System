const express = require("express");
const router = express.Router();

const departmentController = require("../controller/departmentController");

router
  .route("/")
  .get(departmentController.getDepartments)
  .post(departmentController.createDepartment);
router
  .route("/:id")
  .get(departmentController.getDepartmentById)
  .patch(departmentController.updateDepartment)
  .delete(departmentController.deleteDepartment);

module.exports = router;
