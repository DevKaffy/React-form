import { useState } from "react";
import "./App.css";

function App() {
  const initialNote = ["Hello"];
  const [lists, setLists] = useState("");
  const [notes, setNotes] = useState(initialNote);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes(notes.concat(lists));
    setLists("");
  };

  return (
    <div className="App mt-16">
      <h1 className="mb-8 text-5xl font-bold">Add Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="px-8 py-4 mb-10"
          type="text"
          value={lists}
          onChange={(e) => setLists(e.target.value)}
        />
        <br />
        <button
          className="bg-[blue] text-[white] font-bold mb-[1rem] px-10 py-4 rounded-full"
          type="submit"
        >
          Add
        </button>
        <ul className="bg-[blue] w-max  ml-[5rem] px-16 py-8">
          {notes.map((note) => (
            <li className="list-disc m-4 text-xl">{note}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
