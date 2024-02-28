const {Note, User} = require('../models')

const resolvers = {
  
  Query: {
    async getAllNotes() {
      const notes = await Note.find()
      
      return notes
    }
  },
  Mutation: {
    async registerUser(_, args) {
      try {
        const user = await User.create(args)

        return user
      } catch (err) {
        
      }

    }
  }
}

module.exports = resolvers