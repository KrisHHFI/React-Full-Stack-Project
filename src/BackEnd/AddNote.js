export const generateUniqueTitle = (notes) => {
    const baseTitle = "New Note";
    let newTitle = baseTitle;
    let count = 1;

    while (notes.some(note => note.noteTitle === newTitle)) {
        newTitle = `${baseTitle}(${count})`;
        count++;
    }

    return newTitle;
};

export const addNote = (notes, setNotes) => {
    const newNote = {
        noteTitle: generateUniqueTitle(notes),
        noteText: "To do..",
    };

    // Post the new note to the back end
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
                id: data.id,
                noteTitle: newNote.noteTitle, 
                noteText: newNote.noteText 
            }]);
        } else {
            console.error('Unexpected response format:', data);
        }
    })
    .catch(error => console.error('Error adding note:', error));
};
