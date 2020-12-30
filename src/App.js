import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Components/Filter';
import { getData } from './utils/getData'

function App() {

  const [fullData, setFullData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [sortValues, setSortValues] = useState({});

  useEffect(() => {
    const data = getData();
    setFullData(data);
    setShownData(data);
  }, []);

  useEffect(() => {
    const newValues = fullData.filter(data => {
      let nameMatches = checkForMatch(sortValues, 'name', data);
      let institutionMatches = checkForMatch(sortValues, 'name_of_institution', data);
      let yearMatches = checkForMatch(sortValues, 'year', data);
      return nameMatches && institutionMatches && yearMatches;
    })
    console.log(newValues);
    setShownData(newValues);
  }, [sortValues, fullData]);

  const checkForMatch = (sortValues, key, data) => {
    if ( sortValues[key]?.length ) {
      return sortValues[key].indexOf(data[key]) > -1;
    }
    return true;
  }

  const updateSort = (key, values) => {
    setSortValues({...sortValues, [key]: values});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Filter label={"Name"} setSelected={result => updateSort('name', result)} items={["Joseph A Balfe", "Someone else"]}/>
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
