// Employee model
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const employeeSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  //   Designation:{
  //       type:mongoose.Schema.Types.ObjectId,
  //       ref:"Designation",
  //       required:true,
  //   },
  role: {
    type: String,
    required: true,
    default: "employee",
    enum: ["admin", "manager", "HR", "employee", "Senior", "junior"],
  },
  Gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  NID: {
    type: Number,
    required: true,
    min: 14,
    max: 14,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  DateOfJoin: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  DateOfLeave: {
    type: Date,
  },
  email: {
    type: String,
    required: [true, "User must has an email"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, "Email must be in a right form"],
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minlength: 8,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "User must confirm password"],
    select: false,
  },
  passwordChangedAt: Date,

  passwordResetToken: String,
  passwordResetExpires: Date,
});

module.exports = mongoose.model("Employee", employeeSchema);
