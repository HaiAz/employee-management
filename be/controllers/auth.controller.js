import { authRoute } from "../routes/auth.route.js"
import * as authService from "../services/auth.service.js"

const createNewAccessCode = async (req, res) => {
  try {
    await authService.createNewAccessCode(req.body)

    return res.status(201).json({ message: 'success' })
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

const validateAccessCode = async (req, res) => {
  try {
    await authService.validateAccessCode(req.body)

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

export { createNewAccessCode, validateAccessCode }
