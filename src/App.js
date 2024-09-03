import React, { useState, useEffect } from 'react';
import './Styling/App.css';
import AddNoteButton from './Components/AddNoteButton';
import { deleteNote } from './BackEnd/DeleteNote';
import { fetchNotes } from './BackEnd/FetchNotes';
import MainTitle from './Components/MainTitle';
import NotesContainer from './Components/NotesContainer';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  return (
    <div className="app">
      <div className="mainContent">
        <MainTitle />
        <NotesContainer notes={notes} deleteNote={(id) => deleteNote(id, setNotes)} />
      </div>
      <AddNoteButton setNotes={setNotes} notes={notes} />
    </div>
  );
}

export default App;
