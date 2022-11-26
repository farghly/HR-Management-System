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
    default: "Is Going",
    enum: ["Done", "Delayed", "Is Going"],
    // required: [true, "The task must have a status"],
  },
  description: {
    type: String,
    required: [true, "The task must have a description"],
  },
  summary: {
    type: String,
    required: [true, "The task must have a description"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  importance: {
    type: String,
    default: "Normal",
    enum: ["Normal", "Very Important", "Urgent", "Can be done later"],
  },
});
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
