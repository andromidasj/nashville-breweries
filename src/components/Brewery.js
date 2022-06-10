import React, { useEffect, useState } from "react";
import {
  Badge,
  Card,
  Center,
  Container,
  Group,
  Image,
  Stack,
  Anchor,
} from "@mantine/core";
import { Link } from "react-router-dom";
import axios from "axios";

function Brewery(props) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${props.id}`)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      });
  }, []);

  return (
    <Container
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        maxWidth: 600,
        // height: 120,
        marginTop: 10,
      }}
      py={15}
      px={30}
    >
      <Stack align="flex-start" spacing="sm">
        <Group position="apart" style={{ width: "100%" }}>
          <h2>{details.name}</h2>
          <Badge>{details.brewery_type}</Badge>
        </Group>
        <span>
          {details.street}, {details.city}, {details.state}{" "}
          {details.postal_code?.split("-")[0]}
        </span>
        <Anchor href={details.website_url} target="_blank" rel="noreferrer">
          {details.website_url?.split("http://")[1]}
        </Anchor>
      </Stack>
    </Container>
  );
}

export default Brewery;
