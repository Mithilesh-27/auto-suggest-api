import Term from '../models/term.js'

const getSuggestions = async (req, res) => {
  const q  = req.query.q

  if (!q || typeof q !== 'string') {
    return res.status(400).json({ message: 'Input field is required and should be a string.' })
  }

  try {
    const suggestions = await Term.find({ term: { $regex: `${q}`, $options: 'i' } }).limit(10).select('term')
    res.json(suggestions)
  } 
  catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
}

export default getSuggestions
