// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import '../App.css';

function Data() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to BloodBond</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default Data;
