import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Components/Filter';
import { getData } from './utils/getData'

function App() {

  const [fullData, setFullData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [sortValues, setSortValues] = useState({});
  const data = getData();

  useEffect(() => {
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

  const getItems = (type) => {
    let items = []
    Object.keys(data).map((key, index) => {
      if (!items.includes(data[key][type])) {
        items.push(data[key][type]) 
      }
    })
    return items
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Filter label={"Name"} setSelected={result => updateSort('name', result)} items={getItems('name')}/>
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
