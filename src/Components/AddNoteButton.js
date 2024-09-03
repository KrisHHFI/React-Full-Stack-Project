import React from 'react';
import plusImage from '../plusImage.png';

function AddNoteButton({ setNotes, notes }) {
    // Generate a unique title for the new note
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

    // Handle the button press to add a new note
    const addNoteButtonPress = () => {
        const newNote = {
            noteTitle: generateUniqueTitle(),
            noteText: "To do..",
        };

        // Post the new note to the backend
        fetch('http://localhost:3001/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.id) {
                // Update the notes state with the new note
                setNotes(prevNotes => [...prevNotes, { 
                    noteTitle: newNote.noteTitle, 
                    noteText: newNote.noteText 
                }]);
            } else {
                console.error('Unexpected response format:', data);
            }
        })
        .catch(error => console.error('Error adding note:', error));
    };

    return (
        <div className="addNoteButton" onClick={addNoteButtonPress}>
            <img src={plusImage} className="plusImage" alt="Plus Image" />
        </div>
    );
}

export default AddNoteButton;
