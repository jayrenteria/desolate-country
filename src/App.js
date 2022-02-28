import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import FormFilter from "./Components/FormFilter/FormFilter";
import InstitutionDetails from "./Components/InstitutionDetails/InstitutionDetails";
import Map from "./Components/Map/Map";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Article from "./Components/Article/Article";
import { getData } from "./utils/getData";
import Instructions from "./Components/Instructions/Instructions";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  appBar: {
    padding: "15px 50px",
    textAlign: "left",
  },
});

function App() {
  const [fullData, setFullData] = useState([]);
  const [shownData, setShownData] = useState([]);
  const [sortValues, setSortValues] = useState({});
  const [stats, setStats] = useState({
    claims: 0,
    individualCount: 0,
    claimsAtNativeInstitutions: 0,
  });
  const [names, setNames] = useState([]);
  const [names_of_institutions, setNamesOfInstitutions] = useState([]);
  const [institution, setInstitution] = useState(null);

  useEffect(() => {
    const data = getData();
    setFullData(data);
    setShownData(data);
    setNames(getItems("name", data));
    setNamesOfInstitutions(getItems("name_of_institution", data));
  }, []);

  useEffect(() => {
    const newValues = fullData.filter((data) => {
      let nameMatches = checkForMatch(sortValues, "name", data);
      let institutionMatches = checkForMatch(
        sortValues,
        "name_of_institution",
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
    let individualCount = 0;
    let claims = 0;
    let claimsAtNativeInstitutions = 0;
    values.forEach((value) => {
      if (value.abuse_claim) {
        claims++;
        if (value.native_serving_mission) {
          claimsAtNativeInstitutions++;
        }
      }
      if (individuals.indexOf(value.name) === -1) {
        individualCount++;
        individuals.push(value.name);
      }
    });
    setStats({
      claims,
      individualCount,
      claimsAtNativeInstitutions,
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
    setSortValues({ ...sortValues, [key]: values });
  };

  const getItems = (type, data) => {
    let items = [];
    Object.keys(data).map((key, index) => {
      if (!items.includes(data[key][type])) {
        items.push(data[key][type]);
      }
    });
    return items;
  };

  const classes = useStyles();

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
          />
        </div>
        <Map dataToShow={shownData} setInstitution={setInstitution} />
        <div className="details-container">
          {institution ? (
            <InstitutionDetails institution={institution} />
          ) : (
            <>
              <h2>Map Instructions</h2>
              <ol>
                <li>You can filter the data to specific individuals or institutions, as well as the range of years you would like to see data for.</li>
                <li>Then, click on a bubble to get more information about that particular institution.</li>
                <li>Those details will show up here!</li>
              </ol>
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
