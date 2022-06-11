import { Button, Group, Title, Anchor, Stack, Space } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function BreweryDetails(props) {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const address = `${details.street || "TBA"}, ${details.city}, ${
    details.state
  } ${details.postal_code?.split("-")[0]}`;
  const url = details.website_url?.split("http://")[1].split("www.").slice(-1);
  const coordinates = [details.latitude, details.longitude];

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/breweries/${id}`).then((res) => {
      setDetails(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Button
        variant="subtle"
        component={Link}
        to="/"
        leftIcon={<ArrowLeft />}
        size="xl"
        mx={50}
        mt={50}
        radius="xl"
      >
        Back to breweries
      </Button>
      <Stack align="center" mt={-50}>
        <Title align="center">{details.name}</Title>
        <Title align="center" order={3}>
          {address}
        </Title>
        <Anchor href={details.website_url} target="_blank">
          {url}
        </Anchor>
        <Space h="lg" />
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
          <p>No map available :(</p>
        )}
      </Stack>
    </>
  );
}

export default BreweryDetails;
