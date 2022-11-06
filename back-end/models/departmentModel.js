// Department model

const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
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
      ref: "Employee",
    },
  ],
});
departmentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "employee",
  });

  next();
});
const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
