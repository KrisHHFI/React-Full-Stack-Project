import AddNoteButton from './Components/AddNoteButton';
import { deleteNote } from './BackEnd/DeleteNote';
import { fetchNotes } from './BackEnd/FetchNotes';
import MainTitle from './Components/MainTitle';
import NotesContainer from './Components/NotesContainer';
import React, { useState, useEffect } from 'react';
import './Styling/App.css';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes(setNotes);
  }, []);

  return (
    <div className="app">
      <MainTitle />
      <NotesContainer notes={notes} deleteNote={(id) => deleteNote(id, setNotes)} />
      <AddNoteButton setNotes={setNotes} notes={notes} />
    </div>
  );
}

export default App;
