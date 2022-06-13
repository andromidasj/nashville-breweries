import uuid from "react-uuid";
import { useQuery } from "react-query";
import { SimpleGrid, Center, Image, Space } from "@mantine/core";

import "./App.scss";
import BreweryListItem from "./components/BreweryListItem";
import API from "./util";

function App() {
  const { data, isLoading, isError } = useQuery("all", API.allBreweries);

  if (isLoading) {
    return (
      <Center>
        <Space h={200} />
        <h1>🍺 Brewing list...</h1>
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
      <Image src={"logo.png"} alt={"logo"} height={250} fit="contain" />
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 1160, cols: 1 }]}>
        {breweries.map((e) => (
          <BreweryListItem key={uuid()} id={e.id} details={e} />
        ))}
      </SimpleGrid>
      <Space h={100} />
    </main>
  );
}

export default App;
