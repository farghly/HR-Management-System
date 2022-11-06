// Department model

const mongoose = require("mongoose");

const designationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  employee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});
designationSchema.pre(/^find/, function (next) {
  this.populate({
    path: "employee",
  });

  next();
});
const Designation = mongoose.model("Designation", designationSchema);
module.exports = Designation;
