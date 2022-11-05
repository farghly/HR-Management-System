const catchAsync = require("../utils/catchAsync.js");
const Project = require("../models/projectModel");
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

exports.getProjects = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Project.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const projects = await features.query;

  response("success", 200, projects, res);
});

exports.createProject = catchAsync(async (req, res, next) => {
  const newProject = await Project.create(req.body);
  response("success", 201, newProject, res);
});

exports.getProjectById = catchAsync(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(new AppError("Didn't find the project", 404));
  }
  response("success", 200, project, res);
});

exports.updateProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    next(new AppError("Didn't find the project "), 404);
  }
  response("success", 201, project, res);
});

exports.deleteProject = catchAsync(async (req, res, next) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    next(new AppError("Didn't find the project "), 404);
  }

  response("success", 204, null, res);
});
