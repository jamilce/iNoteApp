import React, { useState } from "react";

export default function AddNote(props) {
  const [note, setNote] = useState({ title: "", desc: "" });
  const handleAddNote = (e) => {
    e.preventDefault();
    props.addNote(note.title, note.desc);
  };
  const changeText = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h3>Add Notes</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={changeText}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="desc"
            className="form-control"
            id="desc"
            onChange={changeText}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
