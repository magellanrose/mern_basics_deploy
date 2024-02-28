const {Note, User} = require('../models')

const resolvers = {
  
  Query: {
    async getAllNotes() {
      const notes = await Note.find()
      
      return notes
    }
  },
  Mutation: {
    registerUser(parent) {

    }
  }
}

module.exports = resolvers