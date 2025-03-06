import React from "react";

const Books = ({ ISBN, Title, Price, Author }) => {
  return (
    <div className="book">
      <h2>{Title}</h2>
      <p><strong>Author:</strong> {Author}</p>
      <p><strong>ISBN:</strong> {ISBN}</p>
      <p><strong>Price:</strong> ${Price / 100}</p> 
    </div>
  );
};

export default Books;