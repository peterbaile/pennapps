const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { Schema, model } = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('REPLACE THIS WITH YOUR MONGO URI')

// define a course schmea
const courseSchema = new Schema({
  name: String,
  instructor: String
})

// define a model based on the schema
const Course = model('Course', courseSchema)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/route1', (req, res) => {
  res.send('i am peter')
})

// app.use
app.use('/courses', (req, res) => {
  res.json(['cis1210', 'cis1600'])
})

app.use('/createCourse', async (req, res) => {
  const { name, instructor } = req.body
  await Course.create({ name, instructor })
})

// Course.fetch

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})