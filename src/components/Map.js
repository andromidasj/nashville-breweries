import React from "react";
import { MapOff } from "tabler-icons-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Title, Group, Space, Text } from "@mantine/core";

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
          <Space h={200} />
          <Title align="center" order={4}>
            <Group position="center" spacing="xs">
              <MapOff />
              <Text>No map available :(</Text>
            </Group>
          </Title>
        </>
      )}
    </>
  );
}

export default Map;
