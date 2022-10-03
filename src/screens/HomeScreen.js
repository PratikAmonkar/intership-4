import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [formData, setFormData] = useState();

  const data = async () => {
    const res = await fetch("http://localhost:5000/api", {
      method: "GET",
    })

    console.log(res);
  };

  useEffect(() => {
    data();
  }, []);

  //   const onbj = [
  //     {
  //       id: 1,
  //       firstname: "fdfsd",
  //       lastname: "fsdfsdfds",
  //       email: "fdfsdfsd",
  //       dob: "Fsdfsdf",
  //       message: "Fdfsf",
  //     },
  //     {
  //       id: 2,
  //       firstname: "fdfsd",
  //       lastname: "fsdfsdfds",
  //       email: "fdfsdfsd",
  //       dob: "Fsdfsdf",
  //       message: "Fdfsf",
  //     },
  //     {
  //       id: 3,
  //       firstname: "fdfsd",
  //       lastname: "fsdfsdfds",
  //       email: "fdfsdfsd",
  //       dob: "Fsdfsdf",
  //       message: "Fdfsf",
  //     },
  //     {
  //       id: 4,
  //       firstname: "fdfsd",
  //       lastname: "fsdfsdfds",
  //       email: "fdfsdfsd",
  //       dob: "Fsdfsdf",
  //       message: "Fdfsf",
  //     },
  //   ];
  return (
    <>
      <div className="home_section">
        <h1 style={{ textAlign: "center", margin: "20px" }}>
          All the forms data
        </h1>
        <div className="cust_btn">
          <Link className="button" to="/form">
            Add new form
          </Link>
        </div>
        <div className="home_section_grid">
          <div className="inner_section">
            <h4>First Name</h4>
            <h4>Last Name</h4>
            <h4>Email</h4>
            <h4>D.O.B</h4>
            <h4>Message</h4>
          </div>
          {/* {onbj.map((res) => {
            return (
              <div
                className="inner_sections"
                key={res.id}
                style={{
                  border: "1px solid black",
                  padding: "10px 10px",
                  margin: "10px 10px",
                  //   width:
                }}
              >
                <h6>{res.firstname}</h6>
                <h6>{res.lastname}</h6>
                <h6>{res.email}</h6>
                <h6>{res.dob}</h6>
                <h6>{res.message}</h6>
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
