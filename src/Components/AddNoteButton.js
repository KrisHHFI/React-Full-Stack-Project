import React from 'react';
import plusImage from '../plusImage.png';

function AddNoteButton() {
    const addNoteButtonPress = () => {
        console.log("Add note button pressed");
    };

    return (
        <div className="addNoteButton" onClick={addNoteButtonPress}>
            <img src={plusImage} className="plusImage" alt="Plus Image" />
        </div>
    );
}

export default AddNoteButton;
