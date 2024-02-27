import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from './components/Header'
import NoteForm from './components/NoteForm'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
 

  return (
    <>
      <Header setShowNoteForm={setShowNoteForm}>
      </Header>

      {showNoteForm &&
        <NoteForm
          editNote={editNote}
          setEditNote={setEditNote}
          setShowNoteForm={setShowNoteForm}
          setNotes={setNotes} />}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setShowNoteForm={setShowNoteForm}
              setEditNote={setEditNote}
              notes={notes}
              setNotes={setNotes} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
