const Employee = require("./../models/employeeModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

const response = (status, statusCode, data, res) => {
  res.status(statusCode).json({
    status: status,
    results: data.length,
    data: {
      data,
    },
  });
};

exports.getEmployees = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Employee.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const employees = await features.query;

  response("success", 200, employees, res);
});

exports.createEmployee = catchAsync(async (req, res, next) => {
  const newEmployee = await Employee.create(req.body);
  response("success", 201, newEmployee, res);
});

exports.getEmployeeById = catchAsync(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);
  if (!employee) {
    return next(new AppError("Didn't find the employee", 404));
  }
  response("success", 200, employee, res);
});

exports.updateEmployee = catchAsync(async (req, res, next) => {
  const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: false,
  });

  if (!employee) {
    next(new AppError("Didn't find the employee "), 404);
  }
  response("success", 201, employee, res);
});

exports.deleteEmployee = catchAsync(async (req, res, next) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  if (!employee) {
    next(new AppError("Didn't find the employee "), 404);
  }

  response("success", 204, employee, res);
});
