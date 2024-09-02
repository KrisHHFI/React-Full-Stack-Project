import React, { useState } from 'react';
import './App.css';
import AddNoteButton from './Components/AddNoteButton';
import MainTitle from './Components/MainTitle';
import NotesContainer from './Components/NotesContainer';
import notesData from './NotesData';

function App() {
  const [notes, setNotes] = useState(notesData);

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
