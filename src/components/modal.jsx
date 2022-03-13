import React, { useState } from "react";
import "../style/modal.css";

export default function Modal({ setDisplayModal, message = "Oops, quelque chose s'est mal déroulé 😅" }) {
  return (
    <div
      onClick={() => {
        setDisplayModal(false);
      }}
      className="modal"
    >
      <p className="modal-message">{message}</p>
      <p className="modal-cross">X</p>
    </div>
  );
}
