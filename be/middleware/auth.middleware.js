import { validateToken } from "../services/auth.service.js"

const authMiddleware = (allowRole) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"]

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" })
      }

      const token = authHeader.split(" ")[1]
      const decoded = await validateToken(token)
      req.user = decoded
      if (!allowRole.includes(decoded.role)) {
        return res.status(403).json({ error: "Forbidden" })
      }

      next()
    } catch (err) {
      return res.status(403).json({ error: "User Unauthorized" })
    }
  }
}

export { authMiddleware }
