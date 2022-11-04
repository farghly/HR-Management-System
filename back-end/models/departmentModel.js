// Department model

const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    DepName:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('department',employeeSchema)