//

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Done", "Is Going", "Delayed"],
    required: [true, "The task must have a status"],
  },
  description: {
    type: String,
    required: [true, "The task must have a description"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  employee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  importance: {
    type: String,
    default: "Normal",
    enum: ["Normal ", "Very Important", "Urgent", "Can be done later"],
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
