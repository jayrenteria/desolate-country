import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './Components/Filter';
import Map from './Components/Map/Map';
import { getData } from './utils/getData'

function App() {

  const [fullData, setFullData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [sortValues, setSortValues] = useState({});
  const [names, setNames] = useState([]);
  const [names_of_institutions, setNamesOfInstitutions] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const data = getData();
    setFullData(data);
    setShownData(data);
    setNames(getItems('name', data));
    setNamesOfInstitutions(getItems('name_of_institution', data));
    setYears(getItems('year', data));
  }, []);

  useEffect(() => {
    const newValues = fullData.filter(data => {
      let nameMatches = checkForMatch(sortValues, 'name', data);
      let institutionMatches = checkForMatch(sortValues, 'name_of_institution', data);
      let yearMatches = checkForMatch(sortValues, 'year', data);
      return nameMatches && institutionMatches && yearMatches;
    })
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

  const getItems = (type, data) => {
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
        <Filter label={"Name"} setSelected={result => updateSort('name', result)} items={names}/>
        <Filter label={"Institution"} setSelected={result => updateSort('name_of_institution', result)} items={names_of_institutions}/>
        <Filter label={"Year"} setSelected={result => updateSort('year', result)} items={years}/>
        <Map 
          dataToShow={shownData}
        />
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
