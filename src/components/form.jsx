import React, { useEffect, useState } from "react";
import { states } from "./states";
import Modal from "./modal";
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
  const [modalMessage, setModalMessage] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const employeeData = {
    First_Name: firstName,
    Last_Name: lastName,
    Start_Date: startDate,
    Department: department,
    Birth_Date: birthDate,
    Street: street,
    City: city,
    State: state,
    Zip_Code: zipCode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = [];
    Object.entries(employeeData).forEach((el) => {
      if (!el[1]) {
        error.push(el[0]);
      }
    });

    if (error.length !== 0) {
      setModalMessage(`${error.join(", ").replaceAll("_", " ")} ${error.length >= 2 ? "are" : "is"} required`);
      setDisplayModal(true);
    } else {
      asysendForm(employeeData);

      document.getElementById("create-employee").reset();
    }
  };

  const asysendForm = async (obj) => {
    const rawResponse = await fetch("http://127.0.0.1:5000/api/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const content = await rawResponse.json();
    if (!content.error) {
      setModalMessage("Employee created !");
      setDisplayModal(true);
    }
  };

  return (
    <section className="form-container">
      <h2 className="form-title">Create Employee</h2>
      <form onSubmit={handleSubmit} id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input className="form-input" type="text" onChange={(e) => setFirstName(e.target.value)} id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input className="form-input" type="text" onChange={(e) => setLastName(e.target.value)} id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input className="form-input" type="date" id="date-of-birth" onChange={(e) => setBirthDate(e.target.value)} />

        <label htmlFor="start-date">Start Date</label>
        <input className="form-input" type="date" id="start-date" onChange={(e) => setStartDate(e.target.value)} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input className="form-input" id="street" onChange={(e) => setStreet(e.target.value)} type="text" />

          <label htmlFor="city">City</label>
          <input className="form-input" id="city" onChange={(e) => setCity(e.target.value)} type="text" />

          <label htmlFor="state">State</label>
          <select name="state" onChange={(e) => setState(e.target.value)} id="state">
            {states.map((el) => (
              <option key={el.abbreviation} value={el.abbreviation}>
                {el.name}
              </option>
            ))}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input className="form-input" id="zip-code" onChange={(e) => setZipCode(e.target.value)} type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" onChange={(e) => setDepartment(e.target.value)} id="department">
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
        <button className="save-button">Save</button>
      </form>
      {displayModal ? <Modal setDisplayModal={setDisplayModal} message={modalMessage} /> : ""}
    </section>
  );
}
