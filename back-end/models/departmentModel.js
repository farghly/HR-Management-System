// Department model

const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  DepName: {
    type: String,
    required: true,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  employee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      res: "Employee",
    },
  ],
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
