
const mongoose = require('mongoose');
const empSchema =new mongoose.Schema({
    Name:{
        type:String,
    },
    Employee_ID:{
        type:String,
    },
    Department:{
        type:String,
    },
    Designation:{
        type:String,

    },
    Project:{
        type:String,
    },
    Type:{
        type:String,
    },
    Status:{
        type:String,

    }
    
})

module.exports=mongoose.model('employeedetails',empSchema);