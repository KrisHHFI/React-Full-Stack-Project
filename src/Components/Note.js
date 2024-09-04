import React, { useState, useEffect } from 'react';
import trashBinImage from '../Assets/TrashBinImage.png';
import { updateNote } from '../BackEnd/UpdateNote';

function Note({ id, noteTitle, noteText, deleteNote }) {
    const [title, setTitle] = useState(noteTitle);
    const [text, setText] = useState(noteText);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            updateNote(id, title, text);
        }, 500); // Update after 500ms of no changes

        return () => clearTimeout(debounceTimeout);
    }, [title, text]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleDelete = () => {
        deleteNote(id);
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
            <div className="deleteNoteButton" onClick={handleDelete}>
                <img src={trashBinImage} className="trashBinImage" alt="Trash bin image" />
            </div>
        </div>
    );
}

export default Note;