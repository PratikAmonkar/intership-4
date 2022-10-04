var express = require("express");
var mysql = require("mysql");

var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"demopassword",
  database:"intership_project",
})

conn.connect(function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Connection successfull");
  }
})


module.exports =conn