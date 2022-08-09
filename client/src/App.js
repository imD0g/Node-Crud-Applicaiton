import "./App.css";
import { useState } from "react";
import Axios from "axios";

// This is the main component of the app:

function App() {
     // Here we are using the useState hook to create a state variable.
     // State is a piece of data that is stored in the component.

     const [name, setName] = useState("");
     const [age, setAge] = useState(0);
     const [country, setCountry] = useState("");
     const [position, setPosition] = useState("");
     const [wage, setWage] = useState(0);

     const [employeeList, setEmployeeList] = useState([]);

     // This is the function that is called when the user submits the form.
     // It takes the values from the form and sends them to the server.
     // Axios.post is sending the data to the server.
     // Axios.post (url, data (we are sending an object with the data)).
     const addEmployee = () => {
          Axios.post("http://localhost:3001/create", {
               name: name, // Key: value
               age: age,
               country: country,
               position: position,
               wage: wage,
          }).then(() => {
               console.log("Success");
          });
     };

     // Pull the data from the server and store it in the state variable.
     // Axios.get is sending the data to the server.
     // Axios.get (url).then (callback function)
     const getEmployees = () => {
          Axios.get("http://localhost:3001/employees").then((response) => {
               setEmployeeList(response.data);
          });
     };

     // The form is rendered here.
     return (
          <div className="App">
               <div className="information">
                    {/* Name Input */}
                    <label>Name:</label>
                    <input
                         type="text"
                         onChange={(event) => {
                              setName(event.target.value);
                         }}
                    />
                    {/* Age Input */}
                    <label>Age:</label>
                    <input
                         type="number"
                         onChange={(event) => {
                              setAge(event.target.value);
                         }}
                    />
                    {/* Country Input */}
                    <label>Country:</label>
                    <input
                         type="text"
                         onChange={(event) => {
                              setCountry(event.target.value);
                         }}
                    />

                    {/* Position Input */}
                    <label>Position:</label>
                    <input
                         type="text"
                         onChange={(event) => {
                              setPosition(event.target.value);
                         }}
                    />

                    {/* Wage Input */}
                    <label>Wage (Yearly):</label>
                    <input
                         type="number"
                         onChange={(event) => {
                              setWage(event.target.value);
                         }}
                    />

                    {/* Submit Button */}
                    <button onClick={addEmployee}>Add Employee</button>
               </div>
               <br></br> {/* This is a break tag */}
               <div className="employees">
                    <button onClick={getEmployees}>
                         Show employees in the Database
                    </button>
                    {/*Here we are showing the employees from the database*/}
                    {employeeList.map((val, key) => {
                         return (
                              <div className="displayEmployee">
                                   <h3>
                                        Name: <br></br>
                                        {val.name}
                                   </h3>
                                   <h3>
                                        Age: <br></br>
                                        {val.age}
                                   </h3>
                                   <h3>
                                        Country: <br></br>
                                        {val.country}
                                   </h3>
                                   <h3>
                                        Position: <br></br>
                                        {val.position}
                                   </h3>
                                   <h3>
                                        Wage: <br></br>£{val.wage}
                                   </h3>
                              </div>
                         );
                    })}
               </div>
          </div>
     );
}

export default App;
