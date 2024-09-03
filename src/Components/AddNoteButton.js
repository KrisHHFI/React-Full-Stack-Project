import React from 'react';
import plusImage from '../Assets/plusImage.png';
import { addNote } from '../BackEnd/AddNote';

function AddNoteButton({ setNotes, notes }) {

    const addNoteButtonPress = () => {
        addNote(notes, setNotes);
    };

    return (
        <div className="addNoteButton" onClick={addNoteButtonPress}>
            <img src={plusImage} className="plusImage" alt="Plus Image" />
        </div>
    );
}

export default AddNoteButton;
