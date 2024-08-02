import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
  } 
  catch (error) {
    console.error(`Error: Failed to connect to the database`)
    process.exit(1)
  }
}

export default connectDB
