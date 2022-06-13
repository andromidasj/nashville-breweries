import axios from "axios";

// This util file is created for potential future additions and implementations
// to the app. This can hold all of the API methods used by React Query, which
// can easily be imported into any other file. For now, only allBreweries is being
// used, which could alternatively fit easily inline in the App.js component.

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
