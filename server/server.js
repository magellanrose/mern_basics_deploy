const express = require('express')
const db = require('./config/connection')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3333

const api_routes = require('./routes/api_routes')

app.use(express.json())


app.use('/api', api_routes)



if(process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })
}


db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
  
})