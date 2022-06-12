import React, { useEffect, useState } from "react";
import { Badge, Card, Group, Stack, Anchor, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ExternalLink } from "tabler-icons-react";

const typeColors = {
  micro: "blue",
  nano: "yellow",
  brewpub: "teal",
  planning: "dark",
  contract: "orange",
};

const cardHover = () => ({
  "&:hover": {
    transform: "scale(1.01)",
  },
});

function Brewery(props) {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${props.id}`)
      .then((res) => {
        // console.log(res.data);
        setDetails(res.data);
      });
  }, [props.id]);

  const handleClick = (e) => {
    if (e.target.target !== "_blank") {
      navigate(details.id);
    }
  };

  const address = `${details.street || "TBA"}, ${details.city}, ${
    details.state
  } ${details.postal_code?.split("-")[0]}`;
  const url = details.website_url?.split("http://")[1].split("www.").slice(-1);

  return (
    <Card
      style={{
        cursor: "pointer",
      }}
      sx={cardHover}
      radius="lg"
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
          <Group spacing={5}>
            {url}
            <ExternalLink size={16} />
          </Group>
        </Anchor>
      </Stack>
    </Card>
  );
}

export default Brewery;
