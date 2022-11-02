// Employee model
const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    Department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department",
        required:true,
    },
    Designation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Designation",
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    NID:{
        type:Number,
        required:true,
    },
    DateOfBirth:{
        type:Date,
        required:true,
    },
    DateOfJoin:{
      type:Date,
      required:true,
    },
    DateOfLeave:{
        type:Date,
        required:true,
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Employee',employeeSchema)