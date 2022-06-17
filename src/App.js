import { useState, useEffect } from "react";
import "./App.css";
import FormFilter from "./Components/FormFilter/FormFilter";
import InstitutionDetails from "./Components/InstitutionDetails/InstitutionDetails";
import IndividualDetails from "./Components/IndividualDetails/IndividualDetails";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Article from "./Components/Article/Article";
import { getData } from "./utils/getData";

function App() {
  const [fullData, setFullData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [mapData, setMapData] = useState([]);
  const [sortValues, setSortValues] = useState({});
  const [stats, setStats] = useState({
    individualsCount: 0,
    individualsWithClaimsatNativeMissionsCount: 0,
  });
  const [names, setNames] = useState([]);
  const [names_of_institutions, setNamesOfInstitutions] = useState([]);
  const [institution, setInstitution] = useState(null);

  useEffect(() => {
    const data = getData();
    setFullData(data);
    setShownData(data);
    setNames(getItems("name", data));
    setNamesOfInstitutions(getItems("name_of_institution_by_location", data));
  }, []);

  useEffect(() => {
    const newValues = fullData.filter((data) => {
      let nameMatches = checkForMatch(sortValues, "name", data);
      let institutionMatches = checkForMatch(
        sortValues,
        "name_of_institution_by_location",
        data
      );
      let yearMatches = checkForYears(sortValues, data);
      return nameMatches && institutionMatches && yearMatches;
    });
    setShownData(newValues);
    calculateStats(newValues);
  }, [sortValues, fullData]);

  const calculateStats = (values) => {
    let individuals = [];
    let individualsWithClaimsatNativeMissions = []
    let individualsCount = 0;
    let individualsWithClaimsatNativeMissionsCount = 0;
    values.forEach((value) => {
      if (individuals.indexOf(value.name) === -1) {
        individualsCount++;
        individuals.push(value.name);
      }
      if (
        value.abuse_claim &&
        value.native_serving_mission &&
        individualsWithClaimsatNativeMissions.indexOf(value.name) === -1
      ) {
        individualsWithClaimsatNativeMissionsCount++;
        individualsWithClaimsatNativeMissions.push(value.name);
      }
    });
    setStats({
      individualsCount,
      individualsWithClaimsatNativeMissionsCount,
    });
  };

  const checkForMatch = (sortValues, key, data) => {
    if (sortValues[key]?.length) {
      return sortValues[key].indexOf(data[key]) > -1;
    }
    return true;
  };

  const checkForYears = (sortValues, data) => {
    if (sortValues["year"]?.length) {
      const [min, max] = sortValues["year"];
      const [data_min, data_max] = data["year"].split("-");
      return min <= parseInt(data_min) && max >= parseInt(data_max);
    }
    return true;
  };

  const updateSort = (key, values) => {
    // only preserve previous sort with years
    if (key === 'year') {
      setSortValues({ ...sortValues, [key]: values });
    } else {
      setSortValues({ [key]: values });
    }
  };

  const getItems = (type, data) => {
    let items = [];
    Object.keys(data).map((key, index) => {
      if (!items.includes(data[key][type])) {
        items.push(data[key][type]);
      }
    });
    // alphabetize
    if (type === 'name') {
      items.sort((a, b) => {
        const aLastName = ((a.trim()).split(' ')).pop();
        const bLastName = ((b.trim()).split(' ')).pop();
        if (aLastName < bLastName) {return -1;}
        if (aLastName > bLastName) {return 1;}
        return 0;
      })
    } else {
      items.sort();
    }
    return items;
  };
  
  return (
    <div className="App">
      <Header />
      <div className="map-container">
        <div className="form-container">
          <FormFilter
            names={names}
            names_of_institutions={names_of_institutions}
            sortValues={sortValues}
            stats={stats}
            updateSort={updateSort}
            shownData={shownData}
          />
        </div>
        <Map dataToShow={shownData} setInstitution={setInstitution} setMapDataParent={setMapData} />
        <div className="details-container">
          {institution ? (
            <InstitutionDetails institution={institution} setInstitution={setInstitution} />
          ) : sortValues.name ? (
            <IndividualDetails name={sortValues.name} dataToShow={mapData} />
          ) : sortValues.name_of_institution_by_location ? (
            <InstitutionDetails institution={Object.values(mapData).find(item => item.name_of_institution_by_location === sortValues.name_of_institution_by_location)} setInstitution={setInstitution} />
          ) : (
            <>
              <h2>Map Instructions</h2>
              <ol>
                <li>You can filter the data to specific individuals or institutions, as well as the range of years you would like to see data for.</li>
                <li>Then, click on a bubble to get more information about that particular institution.</li>
                <li>Those details will show up here!</li>
              </ol>
              <h3>Key</h3>
              <div className="marker-container">
                  <div className='dot claim'/>
                  <span className='key-label'>Institutions with Accusations</span>
              </div>
              <div className="marker-container">
                  <div className='dot no-claim'/>
                  <span className='key-label'>Institutions, no Accusations</span>
              </div>
              <div className="marker-container">
                  <div className='reservation'/>
                  <span className='key-label'>Reservation Land</span>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <Article /> */}
      <Footer />
    </div>
  );
}

export default App;
