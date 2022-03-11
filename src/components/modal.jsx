import React, { useState } from "react";
import "../style/modal.css";

export default function Modal({ error, setError }) {
  return (
    <div
      onClick={() => {
        setError([]);
      }}
      className="modal"
    >
      <p className="modal-message">{`${error.join(", ").replaceAll("_", " ")} ${
        error.length >= 2 ? "are" : "is"
      } required`}</p>
      <p className="modal-cross">X</p>
    </div>
  );
}
