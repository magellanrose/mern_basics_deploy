const Note = require('../models/Note')

const resolvers = {
  Query: {
    hello() {
      return 'Hi there'
    },

    another() {
      return 'some other string'
    },

    async getAllNotes() {
      const notes = await Note.find()

      return notes
    } 
  }
}

module.exports = resolvers