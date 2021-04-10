import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';
import './App.css';
import FormFilter from './Components/FormFilter/FormFilter';
import InstitutionDetails from './Components/InstitutionDetails/InstitutionDetails';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import { getData } from './utils/getData'

const useStyles = makeStyles({
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
  const [institution, setInstitution] = useState(null);

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
      <div className="map-container">
        <div className="form-container">
          <FormFilter
            names={names}
            names_of_institutions={names_of_institutions}
            sortValues={sortValues}
            updateSort={updateSort}
            years={years}
          />
        </div>
        <Map 
          dataToShow={shownData}
          setInstitution={setInstitution}
        />
        <div className="details-container">
          {
            institution
              ? 
                <InstitutionDetails institution={institution} />
              :
                <p>Click on an icon for details</p>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
