import "./App.css";
import Header from "./Components/Layout/Header";
import About from "./Components/Main/About";
import Home from "./Components/Main/Home";
import NoteState from "./Context/Notes/NoteState";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Alert from "./Components/Layout/Alert";
import Login from "./Components/Main/Login";
import ProtectedRoute from "./Components/Main/ProtectedRoute";

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Header />
        <Alert message="this is alert" />
        <div className="container py-3">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
