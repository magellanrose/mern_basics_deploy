const Note = require('../models/Note')


module.exports = {
  async createNote(req, res) {
    const note = await Note.create(req.body)


    res.json(note)
  },
  async getNotes(req, res) {
    const notes = await Note.find(req.body)

    res.json(notes)
  },
  async getNoteById(req, res) {
    const noteId = req.params.id
    const note = await Note.findById(noteId)


    res.json(note)
  },
  async updateNoteById(req, res) {
    const updateNote = await Note.findOneAndUpdate({
      _id: req.body.note_id
    },{
      text: req.body.text
    }, {new: true}
    )


    res.json(updateNote)
  },
  async deleteNoteById(req, res) {
    const deleteId = req.params.id
    const deleteNote = await Note.findByIdAndDelete(deleteId)

    res.json({
      message: `note with and id of ${deleteNote._id} was deleted successfully`
    })
  }
}