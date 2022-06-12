import axios from "axios";

const API = {
  allBreweries: () => {
    return axios.get(
      "https://api.openbrewerydb.org/breweries?by_city=nashville"
    );
  },
};

export default API;
