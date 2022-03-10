import React, {  useState } from "react";

export default function modal(message, state) {
  const [display, setDisplay] = useState(false);

  if (!display) return;
  return (
    <div className="modal">
      <p className="modal-message">{message}</p>
    </div>
  );
}
