import React, { useEffect, useState } from "react";
import {
  Badge,
  Card,
  Center,
  Group,
  Image,
  Stack,
  Anchor,
  Text,
  Modal,
  Title,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const typeColors = {
  micro: "blue",
  nano: "yellow",
  brewpub: "teal",
  planning: "dark",
  contract: "orange",
};

const cardStyle = {
  maxWidth: 800,
  margin: "auto",
  marginTop: 10,
  cursor: "pointer",
};

const cardHover = () => ({
  "&:hover": {
    transform: "scale(1.01)",
  },
});

function Brewery(props) {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  // const [opened, setOpened] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${props.id}`)
      .then((res) => {
        // console.log(res.data);
        setDetails(res.data);
      });
  }, []);

  const handleClick = (e) => {
    if (e.target.target !== "_blank") {
      navigate(`/${details.id}`);
    }
  };

  const address = `${details.street || "TBA"}, ${details.city}, ${
    details.state
  } ${details.postal_code?.split("-")[0]}`;
  const url = details.website_url?.split("http://")[1].split("www.").slice(-1);

  return (
    <Card
      style={cardStyle}
      sx={cardHover}
      radius="lg"
      // component={Link}
      // to={`/${details.id}`}
      onClick={handleClick}
    >
      <Stack align="flex-start" spacing="sm">
        <Group position="apart" style={{ width: "100%" }}>
          <Title order={2}>{details.name}</Title>
          <Badge color={typeColors[details.brewery_type]}>
            {details.brewery_type}
          </Badge>
        </Group>
        <Text>{address}</Text>
        <Anchor href={details.website_url} target="_blank" rel="noreferrer">
          {url}
        </Anchor>
      </Stack>
    </Card>
  );
}

export default Brewery;
