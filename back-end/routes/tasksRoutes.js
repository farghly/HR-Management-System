const express = require("express");
const router = express.Router();

const taskController = require("../controller/taskController");

router.route("/").get(taskController.getTasks).post(taskController.createTask);
router
  .route("/:id")
  .get(taskController.getTaskById)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

module.exports = router;
