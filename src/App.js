import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick1 = async () => {
    try {
        let response = await fetch("http://127.0.0.1:5000/home", {
          method: 'GET',
          credentials: 'include', // Include credentials to access cookies
          headers: {
              'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data.message); // Should log "Cookie set successfully"
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

const handleClick2 = async () => {
    try {
        let response = await fetch("http://127.0.0.1:5000", {
            method: 'GET',
            credentials: 'include', // Important to include credentials for cookies
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        data=data.message;
        console.log(data); // Should log the value of the cookie, "pradeep"
    } catch (error) {
        console.error("Fetch error:", error);
    }
};


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick1}>Set Cookie</button>
        <button onClick={handleClick2}>Get Cookie</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;