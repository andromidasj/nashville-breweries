import React from "react";
import {
  Group,
  Avatar,
  Stack,
  Title,
  Text,
  Anchor,
  Badge,
} from "@mantine/core";
import { BrandSafari, ExternalLink, MapPin, Phone } from "tabler-icons-react";

import { typeColors } from "./BreweryListItem";

function DetailsInfo({ details, address }) {
  const url = details.website_url?.split("http://")[1].split("www.").slice(-1);
  const initials =
    details.name.split(" ")[0][0] + details.name.split(" ")[1][0];
  const phone =
    "(" +
    details.phone?.slice(0, 3) +
    ") " +
    details.phone?.slice(3, 6) +
    "-" +
    details.phone?.slice(6);

  return (
    <Group>
      <Avatar size={165} color="blue">
        {initials}
      </Avatar>

      <Stack spacing="xs">
        <Group>
          <Title color="light">{details.name}</Title>{" "}
          <Badge color={typeColors[details.brewery_type]} size="lg">
            {details.brewery_type}
          </Badge>
        </Group>
        <Group spacing="xs">
          <MapPin strokeWidth={1.5} />
          <Text order={3}>{address}</Text>
        </Group>
        {details.phone && (
          <Group spacing="xs">
            <Phone strokeWidth={1.5} />
            <Text order={3}>{phone}</Text>
          </Group>
        )}
        <Group spacing="xs">
          <BrandSafari strokeWidth={1.5} />
          <Anchor href={details.website_url} target="_blank" color="dark">
            <Group spacing={2}>
              {url}
              <ExternalLink size={18} />
            </Group>
          </Anchor>
        </Group>
      </Stack>
    </Group>
  );
}

export default DetailsInfo;
