const gql = String.raw;

const typeDefs = gql `
  type Note {
    _id: ID
    text: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    hello: String
    another: String
    getAllNotes : [Note]
  }
`

module.exports = typeDefs