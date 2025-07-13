import * as employeeService from "../services/employee.service.js"

const createEmployee = async (req, res) => {
  const response = await employeeService.createEmployee(req.body)

  return res.status(201).json(response)
}

const getEmployees = async (req, res) => {
  const response = await employeeService.getEmployees()
  return res.status(200).json(response)
}

export { createEmployee, getEmployees }
