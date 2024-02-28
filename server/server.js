const express = require('express')
const db = require('./config/connection')
const path = require('path')

const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')

const app = express()
const PORT = process.env.PORT || 3333




const typeDefs = `
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello() {
      return 'Hi there'
    }
  }
}

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  await server.start()

  // Middleware
  app.use(express.json())

  // Apollo/GraphQl MiddleWare
  app.use('/graphql', expressMiddleware(server))



  if (process.env.NODE_ENV === 'production') {
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
}

startServer()


