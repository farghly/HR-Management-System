//


const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    EndDate:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('department',employeeSchema)