import './App.css';
import plusImage from './plusImage.png';

function App() {
  const addNoteButtonPress = () => {
    console.log("Add note button pressed");
  };

  return (
    <div className="addNoteButton" onClick={addNoteButtonPress}>
      <img src={plusImage} className="plusImage" alt="Plus Image" />
    </div>
  );
}

export default App;
