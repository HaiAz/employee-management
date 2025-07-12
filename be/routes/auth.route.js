import express from "express"
import { createNewAccessCode, validateAccessCode } from "../controllers/auth.controller.js"

const authRoute = express.Router()

authRoute.post("/create-new-access-code", createNewAccessCode)
authRoute.post("/validate-access-code", validateAccessCode)

export { authRoute }
