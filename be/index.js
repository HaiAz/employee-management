import express from "express"
import cors from "cors"
import { employeeRoute } from "./routes/employee.route.js"
import { authRoute } from "./routes/auth.route.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3001, () => {
  console.log("Server running on port 3000")
})

app.use("/api/v1/employee", employeeRoute)
app.use("/api/v1/auth", authRoute)
