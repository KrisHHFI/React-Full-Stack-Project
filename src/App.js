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
          <Note noteTitle="Groceries" noteText="Cat food, chocolate, pasta, cheese" />
          <Note noteTitle="Meeting Notes" noteText="Discuss Q3 targets and strategy." />
          <Note noteTitle="To-Do List" noteText="Laundry, email replies, book flight tickets." />
          <Note noteTitle="Workout Plan" noteText="Monday: Cardio, Wednesday: Strength, Friday: Yoga." />
          <Note noteTitle="Reading List" noteText="Finish 'Atomic Habits', start 'The Power of Habit'." />
          <Note noteTitle="Project Ideas" noteText="1. Personal blog, 2. Weather app, 3. Task manager." />
          <Note noteTitle="Shopping List" noteText="New shoes, jeans, and a birthday gift for Sam." />
          <Note noteTitle="Vacation Plan" noteText="Book flights, reserve hotel, plan itinerary for Paris." />
          <Note noteTitle="Dinner Menu" noteText="Starter: Soup, Main: Grilled chicken, Dessert: Ice cream." />
        </div>
      </div>
      <div className="addNoteButton" onClick={addNoteButtonPress}>
        <img src={plusImage} className="plusImage" alt="Plus Image" />
      </div>
    </div>
  );
}

export default App;
