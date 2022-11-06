const express = require("express");
const router = express.Router();
// const authController = require("./../controller/authController");

const projectController = require("../controller/projectController");

router
  .route("/")
  .get(projectController.getProjects)
  .post(projectController.createProject);
router
  .route("/:id")
  .get(projectController.getProjectById)
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = router;
