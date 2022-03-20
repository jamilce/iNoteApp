import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../../Context/Notes/NoteContext";

export default function About() {
  const a = useContext(noteContext);
  console.log(a);
  let navigate = useNavigate();
  useEffect(() => {
    // if (!localStorage.getItem("iNote_login")) {
    //   navigate("/login");
    // }
  }, [navigate]);

  return (
    <div>
      About the name : {a.notes[0].title} and org is : {a.notes[0].desc}
    </div>
  );
}
