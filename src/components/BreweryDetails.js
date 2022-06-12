import { Button, Space } from "@mantine/core";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import DetailsInfo from "./DetailsInfo";
import Map from "./Map";

function BreweryDetails() {
  const location = useLocation();
  const { details } = location.state;
  const navigate = useNavigate();

  const address = `
    ${details.street || "TBA"}, ${details.city},
    ${details.state} ${details.postal_code?.split("-")[0]}
  `;

  return (
    <>
      <main>
        <Button
          variant="subtle"
          leftIcon={<ArrowLeft />}
          size="xl"
          radius="xl"
          compact
          onClick={() => {
            navigate(-1);
          }}
        >
          Back to breweries
        </Button>
        <Space h="md" />
        <DetailsInfo details={details} address={address} />
        <Space h="xl" />
        <Map details={details} address={address} />
      </main>
    </>
  );
}

export default BreweryDetails;
