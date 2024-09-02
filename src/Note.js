import React from 'react';

function Note({ noteTitle = "Default Title", noteText = "Default text content." }) {
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
