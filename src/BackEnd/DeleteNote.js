export const deleteNote = (id, setNotes) => {
    // Update the notes in the local state
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  
    // Delete the note from the back end
    fetch(`http://localhost:3001/notes/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete note');
        }
        console.log(`Note with ID "${id}" deleted`);
      })
      .catch(error => console.error('Error deleting note:', error));
  };
  