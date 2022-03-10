import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <h1>Something went wrong 😅</h1>
      <p>You took a wrong turn..</p>
      <Link to="/">Get back to Home</Link>
    </section>
  );
}
