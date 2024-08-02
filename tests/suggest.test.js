import request from 'supertest'
import app from '../src/app.js'
import mongoose from 'mongoose'
import Term from '../src/models/term.js'

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI)

  const terms = [
    { term: 'apple' },
    { term: 'banana' },
    { term: 'grape' },
    { term: 'orange' },
  ]
  await Term.insertMany(terms)
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe('/api/suggest', () => {
  it('should return suggestions based on query', async () => {
    const res = await request(app).get(`/api/suggest?q=ap`)
    expect(res.statusCode).toEqual(200)
    const terms = res.body.map(item => item.term)
    terms.forEach(term => {
      expect(term.toLowerCase()).toContain('ap')
    })
  })

  it('should return a 400 error for invalid query', async () => {
    const res = await request(app).get('/api/suggest?q=')
    expect(res.statusCode).toEqual(400)
  })
})
