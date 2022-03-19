import React, { useState } from "react";
import NoteContext from "./NoteContext";

export default function NoteState(props) {
  const notesList = [
    { id: 1, title: "note 1", desc: "this is my first note" },
    { id: 2, title: "note 2", desc: "this is my first note" },
    { id: 3, title: "note 3", desc: "this is my first note" },
    { id: 4, title: "note 4", desc: "this is my first note" },
    { id: 5, title: "note 5", desc: "this is my first note" },
    { id: 6, title: "note 6", desc: "this is my first note" },
  ];
  const [notes, setNotes] = useState(notesList);
  const addNote = (title, desc) => {
    console.log("adding a new note");
    const note = {
      id: notes.length + 1,
      title: title,
      desc: desc,
    };
    setNotes(notes.concat(note));
  };
  const updateNote = (id, title, desc) => {
    console.log("updating...");
    let newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element.id === id) {
        newNote[index].desc = desc;
        newNote[index].title = title;
        break;
      }
    }
    setNotes(newNote);
  };
  const deleteNote = (id) => {
    console.log(id);

    setNotes(notes.filter((x) => x.id !== id));
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
}
