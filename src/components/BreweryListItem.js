import React from "react";
import { Link } from "react-router-dom";
import { Badge, Card, Group, Stack, Text, Title, Button } from "@mantine/core";
import { ArrowRight, ExternalLink } from "tabler-icons-react";

export const typeColors = {
  micro: "blue",
  nano: "yellow",
  brewpub: "teal",
  planning: "dark",
  contract: "orange",
};

function Brewery({ details }) {
  const address = `${details.street || "TBA"}, ${details.city}, ${
    details.state
  } ${details.postal_code?.split("-")[0]}`;
  const prettyUrl = details.website_url
    ?.replace("http://", "")
    .replace("www.", "");

  return (
    <Card radius="md">
      <Stack align="flex-start" spacing="sm">
        <Group position="apart" style={{ width: "100%" }}>
          <Title order={2}>{details.name}</Title>
          <Badge color={typeColors[details.brewery_type]} size="lg">
            {details.brewery_type}
          </Badge>
        </Group>
        <Text>{address}</Text>
        <Group position="apart" style={{ width: "100%" }}>
          <Button
            radius="xl"
            compact
            variant="outline"
            rightIcon={<ExternalLink size={16} />}
            component="a"
            href={details.website_url}
            target="_blank"
          >
            {prettyUrl}
          </Button>
          <Button
            variant="subtle"
            rightIcon={<ArrowRight />}
            component={Link}
            to={details.id}
            state={{ details }}
            radius="md"
          >
            Details
          </Button>
          {/* <Transition
            mounted={hovered}
            transition="fade"
            duration={400}
            timingFunction="ease"
          >
            {(styles) => (
              <div style={styles}>
                <Button
                  // style={styles}
                  compact
                  variant="subtle"
                  rightIcon={<ArrowRight />}
                  component={Link}
                  to={details.id}
                >
                  Details
                </Button>
              </div>
            )}
          </Transition> */}
        </Group>
      </Stack>
    </Card>
  );
}

export default Brewery;
