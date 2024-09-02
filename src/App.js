import './App.css';
import plusImage from './plusImage.png';
import Note from './Note';

function App() {
  const addNoteButtonPress = () => {
    console.log("Add note button pressed");
  };

  return (
    <div className="app">
      <div className="mainContent">
        <div className="mainTitle">
          All Notes
        </div>
        <div className="noteContainer">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
      <div className="addNoteButton" onClick={addNoteButtonPress}>
        <img src={plusImage} className="plusImage" alt="Plus Image" />
      </div>
    </div>
  );
}

export default App;
