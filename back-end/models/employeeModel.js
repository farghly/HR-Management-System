// Employee model
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const employeeSchema = new mongoose.Schema({
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
  designation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Designation",
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "employee",
    enum: [
      "admin",
      "manager",
      "hr",
      "employee",
      "Senior",
      "junior",
      "Trainee",
      "user",
    ],
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
  ],
  project: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  ],
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  NID: {
    type: String,
    required: true,
    min: 14,
    max: 14,
  },
  contactNumber: [
    {
      type: String,
      min: 11,
      max: 11,
    },
  ],
  birthday: {
    type: Date,
    required: true,
  },
  joiningday: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  leavingday: {
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

// employeeSchema.methods.comparePassword = async function (
//   candidatePassword,
//   userPassword
// ) {
//   return await bcrypt.compare(candidatePassword, userPassword);
// };

employeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

employeeSchema.pre(/^find/, function (next) {
  this.populate({
    path: "department",
  })
    .populate({
      path: "designation",
    })
    .populate({
      path: "tasks",
    })
    .populate({
      path: "project",
    });

  next();
});

module.exports = mongoose.model("Employee", employeeSchema);
