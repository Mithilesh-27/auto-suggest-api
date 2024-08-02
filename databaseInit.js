import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Term from './src/models/term.js'

dotenv.config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
  } 
  catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const importData = async () => {
  await connectDB()

  const terms = [
    { term: 'apple' },
    { term: 'banana' },
    { term: 'grape' },
    { term: 'orange' },
    { term: 'pineapple' },
    { term: 'strawberry' },
    { term: 'blueberry' },
    { term: 'blackberry' },
    { term: 'mango' },
    { term: 'melon' },
  ]

  try {
    await Term.insertMany(terms)
    process.exit()
  } 
  catch (error) {
    console.error(error)
    process.exit(1)
  }
}

importData()
