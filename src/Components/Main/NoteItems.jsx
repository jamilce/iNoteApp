import React, { useContext } from "react";
import NoteContext from "../../Context/Notes/NoteContext";

export default function NoteItems(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { data, updateNote } = props;
  return (
    <div className="col-md-2 my-2 mx-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.desc}</h6>
          <div className="d-flex justify-content-between">
            <i
              className="fa-solid fa-trash-can"
              onClick={() => {
                deleteNote(data.id);
              }}
            ></i>
            <i className="fa-solid fa-pen" onClick={() => updateNote(data)}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
