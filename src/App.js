import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick =async ()=>{
    try {
      let res = await fetch("https://node-api-test-8hlf.onrender.com/", {
        method: 'GET',
        credentials: 'include'
    });      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      let data = await res.json();
      console.log(data);
  } catch (error) {
      console.error("Fetch error:", error);
  }
  }
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}> click</button>
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
