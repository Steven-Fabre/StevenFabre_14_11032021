import React, { useState } from "react";
import { states } from "./states";
import "../style/form.css";

export default function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [department, setDepartment] = useState("Sales");
  const [birthDate, setBirthDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0].abbreviation);
  const [zipCode, setZipCode] = useState("");
  const employeeData = {
    First_Name: firstName,
    Last_Name: lastName,
    Start_Date: startDate,
    Departement: department,
    Birth_Date: birthDate,
    Street: street,
    City: city,
    State: state,
    Zip_Code: zipCode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let error = [];
    if (!firstName) error.push(`First Name`);
    if (!lastName) error.push(`Last Name`);
    if (!birthDate) error.push(`Date of Birth`);
    if (!startDate) error.push(`Start Date`);
    if (!street) error.push(`Street`);
    if (!city) error.push(`City`);
    if (!zipCode) error.push(`Zip Code`);

    error.length === 0 && console.log(employeeData);
    if (error.length >= 1) {
      document.querySelector(".form-error").innerHTML = `${error.join(",")} ${
        error.length >= 2 ? "are" : "is"
      } required`;
    }
  };

  return (
    <section className="form-container">
      <h2 className="form-title">Create Employee</h2>
      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input type="date" id="date-of-birth" onChange={(e) => setBirthDate(e.target.value)} />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" onChange={(e) => setStartDate(e.target.value)} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" onChange={(e) => setStreet(e.target.value)} type="text" />

          <label htmlFor="city">City</label>
          <input id="city" onChange={(e) => setCity(e.target.value)} type="text" />

          <label htmlFor="state">State</label>
          <select name="state" onChange={(e) => setState(e.target.value)} id="state">
            {states.map((el) => (
              <option key={el.abbreviation} value={el.abbreviation}>
                {el.name}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" onChange={(e) => setZipCode(e.target.value)} type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" onChange={(e) => setDepartment(e.target.value)} id="department">
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
        <p className="form-error"></p>
        <button className="save-button">Save</button>
      </form>
    </section>
  );
}
