import "./App.css";
import Header from "./Components/Layout/Header";
import About from "./Components/Main/About";
import Home from "./Components/Main/Home";
import NoteState from "./Context/Notes/NoteState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./Components/Layout/Alert";
import Login from "./Components/Main/Login";

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Header />
        <Alert message="this is alert" />
        <div className="container py-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
