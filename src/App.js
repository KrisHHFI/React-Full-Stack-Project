import React, { useState, useEffect } from 'react';
import './App.css';
import AddNoteButton from './Components/AddNoteButton';
import MainTitle from './Components/MainTitle';
import NotesContainer from './Components/NotesContainer';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from the backend when the component mounts
    fetch('http://localhost:3001/notes')
      .then(response => response.json())
      .then(data => setNotes(data.notes)) // Ensure 'notes' key is used here
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  return (
    <div className="app">
      <div className="mainContent">
        <MainTitle />
        <NotesContainer notes={notes} />
      </div>
      <AddNoteButton setNotes={setNotes} notes={notes} />
    </div>
  );
}

export default App;
