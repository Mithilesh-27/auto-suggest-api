import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import suggestRoutes from './routes/suggestRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())
app.use(`/api`, suggestRoutes)

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Server Error' })
})

export default app
