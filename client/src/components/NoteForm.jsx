import axios from "axios"
import { useState, useEffect } from "react"

import { useStore } from '../store'

function NoteForm() {
  const {state, setState} = useStore()
  const [noteText, setNoteText] = useState('')

  useEffect(() => {
    if (editNote) {
      setNoteText(state.editNote.text)
    }
  }, [])


  const createOrEditNote = async (e) => {
    e.preventDefault()

    

    if (!state.editNote) {
      const res = await axios.post('/api/notes', {
        text: noteText
      })
      setState({
        ...state,
        notes: [...state.notes, res.data]
      })
    } else {
      await axios.put('/api/note', {
        note_id: editNote._id,
        text: noteText
      })

      setNotes((oldState) => {
        const note = oldState.find((n) => n._id === editNote._id)

        note.text = noteText

        return [...oldState]
      })
    }
    setShowNoteForm(false)
    setEditNote(null)
  }
  const closeModal = () => {
    setEditNote(false)
    setShowNoteForm(false)
  }

  const handleInputChange =  (e) => {
      setNoteText(e.target.value)
    
  }

  return (
    <div className="note-form">
      <h1 className="text-center">{editNote ? 'Edit' : 'Create'} Note</h1>

      <form onSubmit={createOrEditNote} className="column">
        <input 
        value={noteText}
        onChange={handleInputChange} 
        type="text" 
        placeholder="Enter the Note text" />
        <button>{editNote ? 'Save' : 'Create'}</button>
        <button onClick={closeModal} className="cancel-btn">Cancel</button>
      </form>
    </div>
  )
}

export default NoteForm