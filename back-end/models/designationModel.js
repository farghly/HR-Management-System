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

module.exports = mongoose.model("designation", designationSchema);
