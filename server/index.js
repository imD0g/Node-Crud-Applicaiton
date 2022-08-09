// Here we import what we need to use in this file
const express = require("express"); // import express
const app = express(); // create an instance of express
const mysql = require("mysql"); // import mysql
const cors = require("cors"); // import cors

app.use(cors()); // enable cors
app.use(express.json());

// create a connection to the database
const connection = mysql.createConnection({
     user: "root",
     host: "localhost",
     password: "P@55word",
     database: "employee-system",
});

// Post request to add a new employee to the database
//
// Here we are creating variables to send to the database
// app.post is a method that takes a path and a callback function
app.post("/create", (req, res) => {
     const name = req.body.name;
     const age = req.body.age;
     const country = req.body.country;
     const position = req.body.position;
     const wage = req.body.wage;

     //
     // Here we are using the connection object to execute a query in MySQL:
     // the ? is a placeholder for the values that will be inserted into the database (We will pass in an array of values)
     // We then pass in an array which contains the values that will be inserted into the database (in this case the values from the form)
     // (err, results) is a callback function - What will we do when the fucntion is done?
     // "err" is the error, "result" is the result of the query
     //
     connection.query(
          "INSERT INTO employees (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)",
          [name, age, country, position, wage],
          (err, results) => {
               if (err) {
                    // If there is an error, send the error to the client
                    console.log(err);
                    res.sendStatus(500);
               } else {
                    // If there is no error, send a success message to the client
                    res.sendStatus(200);
               }
          }
     );
});

// Get request to get all employees from the database

app.get("/employees", (req, res) => {
     connection.query("SELECT * FROM employees", (err, results) => {
          if (err) {
               console.log(err);
               res.sendStatus(500);
          } else {
               res.send(results);
          }
     });
});

// launch server on port 3001
app.listen(3001, () => {
     console.log("Server listening on port 3001");
});
