import { useState } from 'react'
import './App.css'

function App() {
  const initialNote =['Hello']
  const [lists, setLists] = useState("")
  const [notes, setNotes] = useState(initialNote);

  const handleSubmit= (e)=> {
e.preventDefault();
setNotes(notes.concat({lists}))
setLists("");
  }
  
  return (
    <div className="App">
      <h1 className="mb-[1rem] text-3xl">Add Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="px-4 py-2 mb-[1rem]"
          type="text"
          value={lists}
          onChange={(e) => setLists(e.target.value)}
        />
        <br />
        <button
          className="bg-[blue] text-[white] mb-[1rem] px-6 py-2 rounded-full"
          type="submit"
        >
          Add
        </button>
      </form>
      <div className="bg-[blue] w-[20rem] h-[20rem] ml-[10rem] px-[1rem] py-[1rem]">
        {notes.map((note, index) => (
          <li>{note.lists}</li>
        ))}
      </div>
    </div>
  );
}

export default App
