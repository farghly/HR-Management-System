const { promisify } = require("util");

// const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");

const Employee = require("./../models/employeeModel");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    next(new AppError("You are not logged in. Please log in to access"));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await Employee.findById(decoded.id);

  if (!currentUser) {
    next(new AppError("No User exist for this token", 401));
  }

  if (currentUser.changedPasswordAfter(decoded.iat)) {
    next(new AppError("Please Log in Again", 401));
  }

  req.user = currentUser;
  next();
});

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You don't have the permission to be here"),
        403
      );
    }

    next();
  };

exports.signUp = catchAsync(async (req, res, next) => {
  const newEmployee = await Employee.create(req.body);

  createSendToken(newEmployee, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please Enter Your Email and Password"), 400);
  }

  const employee = await Employee.findOne({ email }).select("+password");

  if (!employee || !employee.comparePassword(password, employee.password)) {
    return next(new AppError("Invalid Email or Password", 400));
  }
  createSendToken(employee, 200, res);
});
