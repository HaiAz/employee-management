import * as employeeService from "../services/employee.service.js"

const createEmployee = async (req, res) => {
  const response = await employeeService.createEmployee(req.body)

  return res.status(201).json(response)
}

export { createEmployee }
