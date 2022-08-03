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

     // This is the function that is called when the user submits the form.
     // It takes the values from the form and sends them to the server.
     // Axios.post is sending the data to the server.
     // Axios.post (url, data (we are sending an object with the data))
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
          </div>
     );
}

export default App;
