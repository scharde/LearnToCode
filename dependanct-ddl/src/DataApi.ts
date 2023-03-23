import axios from "axios";

const baseUrl = "https://countriesnow.space/api/v0.1/countries";

axios.defaults.baseURL = baseUrl;
// Counties GET https://countriesnow.space/api/v0.1/countries/positions
// State GET https://countriesnow.space/api/v0.1/countries/states/q?country=Germany
export const getCountries = async () => {
  const url = `/positions`;
  return await axios.get(url);
};

export const getStatesForCountry = async (country: string) => {
  const url = `/states/q?country=${country}`;
  return await axios.get(url);
};

export const getCities = async (country: string, state: string) => {
  const url = `/state/cities/q?country=${country}&state=${state}`;
  return await axios.get(url);
};
