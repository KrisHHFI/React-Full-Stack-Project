import React from 'react';
import Note from './Note';

function NotesContainer({ notes = [] }) {

  console.log("NotesContainer notes:" + JSON.stringify(notes, null, 2));

  return (
    <div className="noteContainer">
      {notes.map((note, index) => (
        <Note key={index} noteTitle={note.noteTitle} noteText={note.noteText} />
      ))}
    </div>
  );
}

export default NotesContainer;
