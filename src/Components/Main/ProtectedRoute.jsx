import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";
const userAuth = () => {
  return localStorage.getItem("iNote_login") === "1";
};
function ProtectedRoute() {
  const isUserAuth = userAuth();
  return isUserAuth ? <Outlet /> : <Login />;
}
export default ProtectedRoute;
