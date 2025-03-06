import React from "react";
import "./App.css";
import Books from "../../components/Books";

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <Books ISBN={9783161484100} Title="The Art of Coding" Price={2500} Author="Alice Johnson" />
      <Books ISBN={9781234567897} Title="Mastering React" Price={3200} Author="Robert Brown" />
      <Books ISBN={9789876543210} Title="JavaScript Essentials" Price={1800} Author="Emily White" />
    </div>
  );
}

export default App;