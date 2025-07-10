import express from "express"
import cors from "cors"
import { employeeRoute } from "./routes/employee.route.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log("Server running on port 3000")
})

app.use("/api/v1/employee", employeeRoute)
