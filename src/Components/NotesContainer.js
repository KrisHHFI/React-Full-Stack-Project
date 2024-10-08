import Note from './Note';
import React from 'react';

function NotesContainer({ notes = [], deleteNote }) {

  return (
    <div className="noteContainer">
      {notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        notes.map((note) => (
          <Note
            deleteNote={deleteNote}
            key={note.id}
            noteTitle={note.noteTitle}
            noteText={note.noteText}
            id={note.id}
          />
        ))
      )}
    </div>
  );
}

export default NotesContainer;
