import React from 'react';
import Note from './Note';

function NotesContainer({ notes = [] }) { // Provide a default empty array
  return (
    <div className="noteContainer">
      {notes.map((note, index) => (
        <Note key={index} noteTitle={note.noteTitle} noteText={note.noteText} />
      ))}
    </div>
  );
}

export default NotesContainer;
