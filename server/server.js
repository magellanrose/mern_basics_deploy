const express = require('express')
const db = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 3333

const api_routes = require('./routes/api_routes')

app.use(express.json())
app.use('/api', api_routes)



db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
  
})