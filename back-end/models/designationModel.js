// Department model

const mongoose = require('mongoose');

const designationSchema = mongoose.Schema({
    DesignationName:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('designation',designationSchema)