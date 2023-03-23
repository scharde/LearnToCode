import { useEffect, useState } from "react";
import { getCities, getCountries, getStatesForCountry } from "./DataApi";
import { Dropdown } from "./Dropdown";
import AppStyle from "./AppStyle.module.css";

const AppApi = () => {
  const [contries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState<string>("");

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState<string>("");

  useEffect(() => {
    getCountries().then((result) => {
      setCountries(result.data.data);
    });
  }, []);

  useEffect(() => {
    setSelectedState("");
    setSelectedCity("");
    setStates([]);
    setCities([]);

    if (selectedCountry !== "Select Country" && selectedCountry) {
      getStatesForCountry(selectedCountry).then((result) => {
        setStates(result.data.data.states);
      });
    }
  }, [selectedCountry]);

  useEffect(() => {
    setCities([]);
    setSelectedCity("");

    if (selectedState !== "Select State" && selectedCountry && selectedState) {
      getCities(selectedCountry, selectedState).then((result) => {
        setCities(result.data.data);
      });
    }
  }, [selectedState]);

  const handleCountryChange = (
    event: React.SyntheticEvent<HTMLSelectElement>
  ) => {
    setSelectedCountry(event.currentTarget.value);
  };

  const handleStateChange = (
    event: React.SyntheticEvent<HTMLSelectElement>
  ) => {
    setSelectedState(event.currentTarget.value);
  };

  const handleCityChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
    setSelectedCity(event.currentTarget.value);
  };

  return (
    <div>
      <div className={AppStyle.header}>
        <h2>With Backend API Data</h2>
      </div>
      <div className={AppStyle.container}>
        <Dropdown
          label="Country"
          options={contries}
          customKeys={{ key: "iso2", value: "name" }}
          onChange={handleCountryChange}
          value={selectedCountry}
        />
        <Dropdown
          label="State"
          options={states}
          customKeys={{ key: "state_code", value: "name" }}
          onChange={handleStateChange}
          value={selectedState}
        />
        <Dropdown
          label="City"
          options={cities}
          onChange={handleCityChange}
          value={selectedCity}
        />
      </div>
    </div>
  );
};

export default AppApi;
