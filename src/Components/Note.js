import React, { useState } from 'react';
import trashBinImage from '../TrashBinImage.png';

function Note({ noteTitle, noteText }) {
    const [title, setTitle] = useState(noteTitle);
    const [text, setText] = useState(noteText);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="note">
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
            />
            <textarea
                className="noteText"
                value={text}
                onChange={handleTextChange}
            />
            <div className="deleteNoteButton">
            <img src={trashBinImage} className="trashBinImage" alt="Trash bin image" />
            </div>
        </div>
    );
}

export default Note;
