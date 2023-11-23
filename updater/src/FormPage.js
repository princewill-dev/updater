// FormPage.js
import React, { useState } from "react";
import "./FormPage.css"; // Import your CSS file for this page

function FormPage() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle the form submission
    console.log("Form submitted with value:", inputValue);
  };

  return (
    <div className="FormPage">
      <div className="center">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Enter Text:
            
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
