const conn = require("../database/config");
const short = require("short-uuid");

exports.getForm = (req, res) => {
  // const demo = [];
  conn.query("select * from userinfo", function (error, results) {
    if (error) {
      throw error;
    }
    res.send(results);
  });
};

exports.uploadForm = (req, res) => {
  const { firstname, lastname, email, dob, gender, message } = req.body;
  if (
    firstname != "" &&
    lastname != "" &&
    email != "" &&
    dob != "" &&
    gender != "" &&
    message != ""
  ) {
    const userobj = {
      id: short.generate(),
      firstname: firstname,
      lastname: lastname,
      email: email,
      dob: dob,
      gender: gender,
      message: message,
    };
    conn.query(
      "insert into userinfo set ? ",
      userobj,
      function (error, results) {
        if (error) {
          console.log(error);
        }
        res.send("User registed!!");
      }
    );
  } else {
    console.log("field is empty");
  }
};