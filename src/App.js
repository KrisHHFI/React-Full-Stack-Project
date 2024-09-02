import './App.css';
import AddNoteButton from './Components/AddNoteButton';
import MainTitle from './Components/MainTitle';
import NotesContainer from './Components/NotesContainer';

function App() {
  return (
    <div className="app">
      <div className="mainContent">
        <MainTitle />
        <NotesContainer />
      </div>
      <AddNoteButton />
    </div>
  );
}

export default App;