export const fetchNotes = (setNotes) => {
    fetch('http://localhost:3001/notes')
        .then(response => response.json())
        .then(data => {
            if (data && data.notes) {
                setNotes(data.notes);
            } else {
                console.error('Unexpected response format:', data);
            }
        })
        .catch(error => console.error('Error fetching notes:', error));
};