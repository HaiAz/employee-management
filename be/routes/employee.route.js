import express from "express"
import { createEmployee } from "../controllers/employee.controller.js"

const employeeRoute = express.Router()

employeeRoute.post("/", createEmployee)

export { employeeRoute }
