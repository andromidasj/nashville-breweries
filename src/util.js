import axios from "axios";

const API = {
  allBreweries: () => {
    return axios.get(
      "https://api.openbrewerydb.org/breweries?by_city=nashville"
    );
  },
  brewery: (id) => {
    return axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
  },
};

export default API;
