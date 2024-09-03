import React from 'react';
import Note from './Note';

function NotesContainer({ notes = [], deleteNote }) {

  //console.log("NotesContainer notes:" + JSON.stringify(notes, null, 2));

  return (
    <div className="noteContainer">
      {notes.map((note) => (
        <Note
          deleteNote={deleteNote}
          key={note.id}
          noteTitle={note.noteTitle}
          noteText={note.noteText}
          id={note.id}
        />
      ))}
    </div>
  );
}

export default NotesContainer;
