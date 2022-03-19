import React, { useContext, useEffect, useRef, useState } from "react";
import AddNote from "./AddNote";
import NoteContext from "../../Context/Notes/NoteContext";
import NoteItems from "./NoteItems";

export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, addNote, updateNote } = context;

  const [note, setNote] = useState({ id: "", etitle: "", edesc: "" });

  useEffect(() => {}, []);
  const refOpenModal = useRef(null);
  const refCloseModal = useRef(null);
  const updateNoteClick = (note) => {
    console.log(note);
    refOpenModal.current.click();
    setNote({ id: note.id, etitle: note.title, edesc: note.desc });
  };
  const handleUpdateNote = (e) => {
    e.preventDefault();
    console.log(note);
    updateNote(note.id, note.etitle, note.edesc);
    refCloseModal.current.click();
  };
  const changeText = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <AddNote addNote={addNote} />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={refOpenModal}
      ></button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    onChange={changeText}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edesc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    name="edesc"
                    className="form-control"
                    id="edesc"
                    value={note.edesc}
                    onChange={changeText}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refCloseModal}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateNote}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-2 ">
        {notes.length === 0 && "No data to display"}
        {notes.map((item) => {
          return (
            <NoteItems data={item} key={item.id} updateNote={updateNoteClick} />
          );
        })}
      </div>
    </div>
  );
}
