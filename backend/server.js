const express = require('express')
const cors = require('cors')
const sequelize = require('./database')
const { DataTypes } = require('sequelize')
const Brew = require('./models/Brew')(sequelize, DataTypes)

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Coffee Brew Log API is running')
})

async function startServer() {
  try {
    await sequelize.authenticate()
    console.log('Database connected')
    await sequelize.sync()
    console.log('Database synced')

    app.listen(5000, () => {
      console.log('Server running on http://localhost:5000')
    })
  } catch (error) {
    console.error('DB connection failed:', error)
  }
}

startServer()
