import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const submitLogin = (e) => {
    e.preventDefault();
    console.log(login);
    if (login.email === "jamilce@gmail.com" && login.password === "aaaaaa") {
      localStorage.setItem("iNote_login", "1");
      navigate("/");
    }
  };
  const changeText = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mx-10 ">
      <div className="row">
        <form className="col-lg-5 col-md-5" onSubmit={submitLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={changeText}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={changeText}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remeber"
              name="remeber"
              onChange={changeText}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
