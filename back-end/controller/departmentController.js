const catchAsync = require("../utils/catchAsync.js");
const Department = require("../models/departmentModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError.js");

const response = (status, statusCode, data, res) => {
  res.status(statusCode).json({
    status: status,
    results: data.length,
    data: {
      data,
    },
  });
};

exports.getDepartments = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Department.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const department = await features.query;

  response("success", 200, department, res);
});

exports.createDepartment = catchAsync(async (req, res, next) => {
  const newDepartment = await Department.create(req.body);
  response("success", 201, newDepartment, res);
});

exports.getDepartmentById = catchAsync(async (req, res, next) => {
  const department = await Department.findById(req.params.id);
  if (!department) {
    return next(new AppError("Didn't find the department", 404));
  }
  response("success", 200, department, res);
});

exports.updateDepartment = catchAsync(async (req, res, next) => {
  const department = await Department.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!department) {
    next(new AppError("Didn't find the department "), 404);
  }
  response("success", 201, department, res);
});

exports.deleteDepartment = catchAsync(async (req, res, next) => {
  const department = await Department.findByIdAndDelete(req.params.id);
  if (!department) {
    next(new AppError("Didn't find the department "), 404);
  }

  response("success", 204, department, res);
});
