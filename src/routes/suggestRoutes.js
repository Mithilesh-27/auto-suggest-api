import express from "express"
import getSuggestions from "../controllers/suggestController.js"

const router = express.Router()
router.use('/suggest', getSuggestions)

export default router