import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => {
        setMessage(data);  // Set the data to be displayed
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>AD-TECH Frontend</h1>
      <p>{message}</p>  {/* Display the message from the backend */}
    </div>
  );
}

export default App;
