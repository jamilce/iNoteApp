import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header(props) {
  let location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    //console.log(location);
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <b>Notes Book</b>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    location.pathname === "/about"
                      ? " nav-link active"
                      : "nav-link"
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              {!localStorage.getItem("iNote_login") ? (
                <Link className="btn btn-outline-success" to="/login">
                  Login
                </Link>
              ) : (
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    localStorage.removeItem("iNote_login");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
