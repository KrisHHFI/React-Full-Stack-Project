import React from 'react';
import Note from './Note';
import notesData from '../NotesData';

function MainTitle() {
    return (
        <div className="noteContainer">
            {notesData.map((note, index) => (
                <Note key={index} noteTitle={note.noteTitle} noteText={note.noteText} />
            ))}
        </div>
    );
}

export default MainTitle;
