const router = require('express').Router()
const api_controller = require('../controllers/api_controller')


// Create Note
router.post('/notes', api_controller.createNote)
// Get all Notes
router.get('/notes', api_controller.getNotes)
// Get One Note by ID
router.get('/note/:id', api_controller.getNoteById)
// Update Note
router.put('/note', api_controller.updateNoteById)
// Delete Note
router.delete('/note/:id', api_controller.deleteNoteById)










module.exports = router