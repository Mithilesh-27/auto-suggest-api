import mongoose from 'mongoose'

const termSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
  },
})

const Term = mongoose.model('Term', termSchema)

export default Term
