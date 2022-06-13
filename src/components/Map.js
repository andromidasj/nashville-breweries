import React from "react";
import { Title, Group, Space, Text, Button, Stack } from "@mantine/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapOff, MapPin } from "tabler-icons-react";

function Map({ details, address }) {
  const coordinates = [details.latitude, details.longitude];

  return (
    <>
      {details.latitude ? (
        <div id="map">
          <MapContainer center={coordinates} zoom={13} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordinates}>
              <Popup>
                <a
                  href={`https://www.google.com/maps/place/${coordinates[0]},${coordinates[1]}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <>
          <Space h={100} />
          <Stack align="center">
            <Group position="center" spacing="xs">
              <MapOff />
              <Title align="center" order={2}>
                No map available :(
              </Title>
            </Group>

            <Text weight={400}>
              The OpenBreweryDB doesn't have any coordinates for this location.
            </Text>

            {details.street && (
              <>
                <Text weight={400}>
                  Try opening{" "}
                  <Text weight={600} component="span">
                    {address}
                  </Text>
                  with Google Maps instead?
                </Text>

                <Button
                  rightIcon={<MapPin size={18} />}
                  component="a"
                  href={`https://www.google.com/maps/place/${address}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open in Google Maps
                </Button>
              </>
            )}
          </Stack>
        </>
      )}
    </>
  );
}

export default Map;
