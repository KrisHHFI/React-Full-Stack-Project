import React from 'react';
import plusImage from '../plusImage.png';

function AddNoteButton({ setNotes, notes }) {
    const generateUniqueTitle = () => {
        const baseTitle = "New Note";
        let newTitle = baseTitle;
        let count = 1;

        while (notes.some(note => note.noteTitle === newTitle)) {
            newTitle = `${baseTitle}(${count})`;
            count++;
        }

        return newTitle;
    };

    const addNoteButtonPress = () => {
        const newNote = {
            noteTitle: generateUniqueTitle(),
            noteText: "To do..",
        };
        setNotes([...notes, newNote]);
    };

    return (
        <div className="addNoteButton" onClick={addNoteButtonPress}>
            <img src={plusImage} className="plusImage" alt="Plus Image" />
        </div>
    );
}

export default AddNoteButton;
