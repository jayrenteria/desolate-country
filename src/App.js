import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Filter';
import Map from './Components/Map/Map';
import { getData } from './utils/getData'

function App() {

  const [fullData, setFullData] = useState([]);
  const [shownData, setShownData] = useState([]);

  useEffect(() => {
    const data = getData();
    setFullData(data);
    setShownData(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Filter label={"Numbers"} setSelected={result => console.log(result)} items={["One", "Two"]}/>
        <Map />
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
