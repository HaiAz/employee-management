import express from "express"
import { createEmployee, getEmployees } from "../controllers/employee.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const employeeRoute = express.Router()

employeeRoute.post("/", createEmployee)
employeeRoute.get("/", authMiddleware(['admin']), getEmployees)


export { employeeRoute }
