import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import signInImg from "../assets/signup.svg";

const SignupScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        confirmpassword: confirmPassword,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log();
      });
  };

  return (
    <>
      <div className="container">
        <p className="mt-2" style={{ fontSize: "2rem" }}>
          Create an account
        </p>
        <div className="cust_grid">
          <img src={signInImg} className="img-fluid" />
          <div className="form_grid">
            <input
              className="mt-2"
              type="text"
              placeholder="First name"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="mt-2"
              type="text"
              placeholder="Last name"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
            />
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
            <input
              className="mt-2"
              type="password"
              placeholder="Confirm password"
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="cust_button_grid">
              <div className="button1" onClick={handleSubmit}>
                <p>Signup</p>
              </div>
              <Link to="#">
                <p>forgot password ? </p>
              </Link>
            </div>
            <div className="cust_row">
              <p>Already register?</p>
              <Link to="/login">
                <p>login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupScreen;
