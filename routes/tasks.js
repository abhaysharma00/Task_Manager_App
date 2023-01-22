const express = require("express");
const router = express.Router();
const {
  getallTasks,
  createTask,
  getsingleTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

// routes
router.route("/").get(getallTasks).post(createTask);
router.route("/:id").get(getsingleTask).patch(updateTask).delete(deleteTask);

// export
module.exports = router;
