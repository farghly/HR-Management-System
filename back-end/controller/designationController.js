const catchAsync = require("../utils/catchAsync.js");
const Designation = require("../models/designationModel");
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

exports.getDesignations = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Designation.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const designation = await features.query;

  response("success", 200, designation, res);
});

exports.createDesignation = catchAsync(async (req, res, next) => {
  const newDesignation = await Designation.create(req.body);
  response("success", 201, newDesignation, res);
});

exports.getDesignationById = catchAsync(async (req, res, next) => {
  const designation = await Designation.findById(req.params.id);
  if (!designation) {
    return next(new AppError("Didn't find the designation", 404));
  }
  response("success", 200, designation, res);
});

exports.updateDesignation = catchAsync(async (req, res, next) => {
  const designation = await Designation.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!designation) {
    next(new AppError("Didn't find the designation "), 404);
  }
  response("success", 201, designation, res);
});

exports.deleteDesignation = catchAsync(async (req, res, next) => {
  const designation = await Designation.findByIdAndDelete(req.params.id);
  if (!designation) {
    next(new AppError("Didn't find the designation "), 404);
  }

  response("success", 204, designation, res);
});
