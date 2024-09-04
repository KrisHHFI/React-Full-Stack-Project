export const updateNote = (id, updatedTitle, updatedText) => {
    return fetch(`http://localhost:3001/notes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            noteTitle: updatedTitle,
            noteText: updatedText,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update note');
        }
        return response.json();
    })
    .then(data => {
        console.log(`Note with ID "${id}" updated`);
        return data;
    })
    .catch(error => {
        console.error('Error updating note:', error);
        throw error;
    });
};