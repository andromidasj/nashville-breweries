import uuid from "react-uuid";
import { useQuery } from "react-query";
import { SimpleGrid, Title, Center, Image } from "@mantine/core";

import "./App.css";
import Brewery from "./components/Brewery";
import API from "./util";

function App() {
  const { data, isLoading, isError } = useQuery("all", API.allBreweries);

  if (isLoading) {
    return (
      <Center>
        <h1>Brewing list...</h1>
      </Center>
    );
  }

  if (isError) {
    return (
      <>
        <h1>Error loading list... :(</h1>
        <p>Try refreshing the page</p>
      </>
    );
  }

  const breweries = data.data;

  return (
    <main className="App">
      <Image
        src={"logo.png"}
        alt={"logo"}
        height={180}
        mb={50}
        fit="contain"
        // style={{ margin: "auto" }}
      />
      {/* <Title style={{ marginTop: 50, marginBottom: 60, fontSize: 50 }}>
        🍺 Nashville Breweries 🍺
      </Title> */}
      <SimpleGrid
        cols={2}
        breakpoints={[{ maxWidth: "md", cols: 1, spacing: "sm" }]}
      >
        {breweries.map((e) => (
          <Brewery key={uuid()} id={e.id} name={e.name} />
        ))}
      </SimpleGrid>
    </main>
  );
}

export default App;
