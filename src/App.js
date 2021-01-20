import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, FormGroup, Typography, AppBar } from '@material-ui/core';
import './App.css';
import Filter from './Components/Filter';
import RangeFilter from './Components/RangeFilter';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import { getData } from './utils/getData'

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
    width: '90%',
    padding: '50px 5%',
    margin: '50px 0'
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    padding: '15px 50px',
    textAlign: 'left'
  }
});

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
      let yearMatches = checkForYears(sortValues, data);
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

  const checkForYears = (sortValues, data) => {
    if ( sortValues['year']?.length ) {
      const [min, max] = sortValues['year'];
      const [data_min, data_max] = data['year'].split('-');
        return min <= parseInt(data_min) && max >= parseInt(data_max);
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

  const classes = useStyles();


  return (
    <div className="App">
      <AppBar position="static" className={classes.appBar}>
        <Typography variant="h6" className={classes.title}>
          Desolate Country
        </Typography>
      </AppBar>
      <Card className={classes.card}>
        <FormGroup>
          <Typography>Filters</Typography>
          <Filter label={'Name'} setSelected={result => updateSort('name', result)} items={names} selected={sortValues['name']}/>
          <Filter label={'Institution'} setSelected={result => updateSort('name_of_institution', result)} items={names_of_institutions} selected={sortValues['name_of_institution']}/>
          <RangeFilter label={'Year Range'} setSelected={result => updateSort('year', result)} items={years}/>
        </FormGroup>
      </Card>
      <Map 
        dataToShow={shownData}
      />
      <Footer />
    </div>
  );
}

export default App;
