import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [formData, setFormData] = useState([]);
  console.log(formData);

  const data = async () => {
    // const data = await fetch(
    //   "https://api.openweathermap.org/data/2.5/weather?lat=15.600227&lon=73.812500&appid=8d8e6390b29f36ded700bc09e7aa0fd6"
    // );

    await fetch("https://api.openweathermap.org/data/2.5/weather?lat=15.600227&lon=73.812500&appid=8d8e6390b29f36ded700bc09e7aa0fd6")
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    // const url = "https://v3.football.api-sports.io/";

    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "0cfae8328376160b5333faa136724f16",
    //     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    //   },
    // };

    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.error("error:" + err));
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '3233da43c117a4b45115b025e7a5e512',
    //     'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    //   }
    // };

    // fetch('https://v3.football.api-sports.io/leagues/', options)
    //   .then(response => response.json())
    //   .then(res => console.log(res.response))
    //   .catch(err => console.error(err));
  };

  useEffect(() => {
    data();
  }, []);
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
          {formData.map((res) => {
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
          })}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
