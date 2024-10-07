const exp = require('express');
const { createEmployee, getEmployee, getEmployeeById, updateEmployeeById, deleteEmployeeById } = require('../controller/empcontroller');
const empRouter = exp.Router();

empRouter.post('/createEmployee',createEmployee);
empRouter.get('/getEmployee',getEmployee);
empRouter.get('/getEmployeeById/:id',getEmployeeById);
empRouter.put('/updateEmployeeById/:id',updateEmployeeById);
empRouter.delete('/deleteEmployee/:id', deleteEmployeeById);

module.exports = empRouter;