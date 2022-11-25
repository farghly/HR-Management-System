const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The task must have a name"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  summary: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "The task must have a description"],
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "The Task must belongs to a project "],
  },
  employee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],

  startDate: {
    type: Date,
    default: Date.now(),
  },
  endDate: {
    type: Date,
    required: [true, "Task must have end date"],
  },
  status: {
    type: String,
    enum: ["Done", "Is Going", "Delayed"],
    default: "Is Going",
  },
  importance: {
    type: String,
    default: "Normal",
    enum: ["Normal", "Very Important", "Urgent", "Can be done later"],
  },
});

taskSchema.pre(/^find/, function (next) {
  this.populate({
    path: "employee",
  }).populate({
    path: "project",
  });

  next();
});

// taskSchema.methods.getTaskIdAfterSave = async function (docId) {
//   return {
//     id: docId,
//   };
// };

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
