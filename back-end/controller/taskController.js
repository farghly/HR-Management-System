const catchAsync = require("../utils/catchAsync.js");
const Task = require("../models/taskModel");
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

exports.getTasks = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Task.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const tasks = await features.query;

  response("success", 200, tasks, res);
});

exports.createTask = catchAsync(async (req, res, next) => {
  const newTask = await Task.create(req.body);
  response("success", 201, newTask, res);
});

exports.getTaskById = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return next(new AppError("Didn't find the task", 404));
  }
  response("success", 200, task, res);
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    next(new AppError("Didn't find the task "), 404);
  }
  response("success", 201, task, res);
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    next(new AppError("Didn't find the task "), 404);
  }

  response("success", 204, null, res);
});
