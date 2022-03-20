import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notes from "./Notes";

export default function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    // if (!localStorage.getItem("iNote_login")) {
    //   navigate("/login");
    // }
  }, [navigate]);

  return (
    <div className="container">
      <div className="my-3">
        <Notes />
      </div>
    </div>
  );
}
