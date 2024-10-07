const empModel = require('../model/empmodel');

const createEmployee = async(req,res)=>
{
    const {Name,Employee_ID,Department,Designation,Project,Type,Status,} = req.body;
    try{
        // if(!Name || !Employee_ID || !Department || !Designation || !Project || !Type || !Status)
        // {
        //     res.status(404).json({
        //     message:"You should enter all the details",
        //     statusCode:404,
        //     success:false,
        //      })
        // }
         const empData = await empModel.create(req.body);
        if(!empData)
        {
               res.status(404).json({
                message:"employee not created",
                statusCode:404,
                success:false,
                 })
        
        }
        res.status(200).json({
             message:" employee created successfully!",
             statusCode:200,
             success:true,
             response:empData,
         })
}
    catch(err){
        res.status(500).json({
        message:"internal error",
        statusCode:500,
        success:false,
        })
    }

}

const getEmployee = async(req,res)=>{
    try
    {
        const empData = await empModel.find();
         if(!empData)
            {
                res.status(404).json({
                message:"employee data not found",
                statusCode:404,
                success:false,

                 })
            }

            res.status(200).json({
                message:" employee details got successfully!",
                statusCode:200,
                success:true,
                response:empData,
            })
    }
    catch(err)
    {
        res.status(500).json({
        message:"internal error",
        statusCode:500,
        success:false,
        })
    }

}

const getEmployeeById = async(req,res)=>{
    try
    {
        const {id} = req.params;        
        const empData = await empModel.findById(id);
         if(!empData)
            {
                res.status(404).json({
                message:"employee data not found",
                statusCode:404,
                success:false,

                 })
            }
            res.status(200).json({
                message:" employee details got successfully!",
                statusCode:200,
                success:true,
                response:empData,
            })
    }
    catch(err)
    {
        res.status(500).json({
        message:"internal error",
        statusCode:500,
        success:false,
        })
    }
}
const updateEmployeeById = async(req,res)=>
{
    try
    {
        const {id} = req.params;
        const empData = await empModel.findByIdAndUpdate(id,req.body,{new:true});
        if(!empData){
            res.status(404).json({
                message:"Employee data not found",
                statusCode:404,
                success:false,
            })
        }
        res.status(200).json({
            message:"Emp data updated successfully",
            status:200,
            success:true,
            response:empData,
        })

    }
    catch(err)
    {
        res.status(500).json({
        message:"internal error",
        statusCode:500,
        success:false,
        })
    }
}

const deleteEmployeeById = async(req,res)=>
    {
        try
        {
            const {id} = req.params;
            const empData = await empModel.findByIdAndDelete(id);
            if(!empData){
                res.status(404).json({
                    message:"Employee data not found",
                    statusCode:404,
                    success:false,
                })
            }
            res.status(200).json({
                message:"Emp data deleted successfully",
                status:200,
                success:true,
                response:empData,
            })
    
        }
        catch(err)
        {
            res.status(500).json({
            message:"internal error",
            statusCode:500,
            success:false,
            })
        }
    }


module.exports = {createEmployee, getEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById }
