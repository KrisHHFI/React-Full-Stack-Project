import React from 'react';
import Note from './Note';

function NotesContainer({ notes }) {
  return (
    <div className="noteContainer">
      {notes.map((note, index) => (
        <Note key={index} noteTitle={note.noteTitle} noteText={note.noteText} />
      ))}
    </div>
  );
}

export default NotesContainer;
