import React, { useState } from "react";

const FormScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName,
        lastname: lastName,
        email: email,
        dob: dob,
        gender: gender,
        message: message,
      }),
    });
    console.log(res);
  };

  return (
    <>
      <div className="form_section">
        <h1 style={{ textAlign: "center", margin: "10px" }}>Welcome</h1>
        <div className="form_section_grid">
          <div className="form_section_comp">
            <label for="firstname">First name:</label>
            <input
              id="firstname"
              className="mt-2"
              type="text"
              placeholder="First name"
              autoComplete="off"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form_section_comp">
            <label for="lastname">Last name:</label>
            <input
              id="lastname"
              className="mt-2"
              type="text"
              placeholder="Last name"
              autoComplete="off"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form_section_comp">
            <label for="email">Email id:</label>

            <input
              id="email"
              className="mt-2"
              type="text"
              placeholder="Email id"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_section_comp">
            <label for="dob">D.O.B:</label>
            <input
              type="date"
              id="dob"
              name="birthday"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="form_section_comp">
            <label>Gender</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="payment1">Male</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="payment1">Female</label>
            </div>
          </div>
          <div className="form_section_comp">
            <textarea
              id="w3review"
              name="w3review"
              placeholder="What's your motivation?"
              //   rows="4"
              //   cols="50"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default FormScreen;
