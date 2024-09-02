import React from 'react';

function Note({ noteTitle = "New note", noteText = "What's your note about?" }) {
    return (
        <div className="note">
            <div className="noteTitle">
                {noteTitle}
            </div>
            <div className="noteText">
                {noteText}
            </div>
        </div>
    );
}

export default Note;
