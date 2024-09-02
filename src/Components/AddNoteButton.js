import React from 'react';
import plusImage from '../plusImage.png';

function AddNoteButton({ setNotes, notes }) {
    const addNewNote = () => {
        const newNote = {
            noteTitle: "New Note",
            noteText: "To do..",
        };
        setNotes([...notes, newNote]);
    };

    const addNoteButtonPress = () => {
        console.log("Add note button pressed");
        addNewNote();
    };

    return (
        <div className="addNoteButton" onClick={addNoteButtonPress}>
            <img src={plusImage} className="plusImage" alt="Plus Image" />
        </div>
    );
}

export default AddNoteButton;
