import React, { useState, useEffect } from "react";
import "./AppPage.css"; // Import your CSS file

function App() {
  const [ip, setIp] = useState("");
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((results) => results.json())
      .then((data) => {
        setIp(data.ip);
      });
  }, []);

  return (
    <div className="App">
      <div className="center">
        <table className="table">
          <tbody>
            <tr>
              <th>Message</th>
              <th>Date</th>
              <th>IP Address</th>
            </tr>
            <tr>
              <td>Hello World!</td>
              <td>{currentDate}</td>
              <td>{ip}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
