import { useEffect, useState } from "react";
// import { Button } from "@mantine/core";
import axios from "axios";
import uuid from "react-uuid";

import "./App.css";
import Brewery from "./components/Brewery";
import { Title } from "@mantine/core";

function App() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.openbrewerydb.org/breweries?by_city=nashville")
      .then((res) => {
        setBreweries(res.data);
        // axios.get(`https://opengraph.io/api/1.1/site/${}`)
      });
  }, []);

  return (
    <main className="App">
      <Title style={{ marginTop: 50, marginBottom: 60 }}>
        Nashville Breweries
      </Title>
      {breweries.map((e) => (
        <Brewery key={uuid()} id={e.id} name={e.name} />
      ))}
    </main>
  );
}

export default App;

// load whole list
// load each individual detail page as modal
