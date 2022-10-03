import React, { useState } from "react";
import { Link } from "react-router-dom";
import signinImg from "../assets/login.svg";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };

  return (
    <>
      <div className="container">
        <p className="mt-2" style={{ fontSize: "2rem" }}>
          Welcome Back
        </p>
        <div className="cust_grid">
          <img src={signinImg} className="img-fluid" />
          <div className="form_grid">
            <input
              className="mt-2"
              type="text"
              placeholder="Email ID"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="mt-2"
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="cust_button_grid">
              <div className="button1" onClick={handleSubmit}>
                <p>Submit</p>
              </div>
              <Link to="#">
                <p>forgot password ? </p>
              </Link>
            </div>
            <div className="cust_row">
              <p>Not register?</p>
              <Link to="/">
                <p>Signup</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
