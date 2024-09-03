import React, { useState, useEffect } from 'react';
import './App.css';
import AddNoteButton from './Components/AddNoteButton';
import MainTitle from './Components/MainTitle';
import NotesContainer from './Components/NotesContainer';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(response => response.json())
      .then(data => {
        if (data && data.notes) {
          setNotes(data.notes);
          //console.log("Notes fetched:", JSON.stringify(data.notes, null, 2));
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));

    // Also delete the note from the backend
    fetch(`http://localhost:3001/notes/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete note');
      }
      console.log(`Note with ID "${id}" deleted`);
    })
    .catch(error => console.error('Error deleting note:', error));
  };

  return (
    <div className="app">
      <div className="mainContent">
        <MainTitle />
        <NotesContainer notes={notes} deleteNote={deleteNote} />
      </div>
      <AddNoteButton setNotes={setNotes} notes={notes} />
    </div>
  );
}

export default App;
