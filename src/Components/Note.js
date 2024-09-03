import React, { useState } from 'react';

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
        </div>
    );
}

export default Note;
