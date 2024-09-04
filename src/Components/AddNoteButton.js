import { addNote } from '../BackEnd/AddNote';
import plusImage from '../Assets/PlusImage.png';
import React from 'react';

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