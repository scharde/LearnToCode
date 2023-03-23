import { Dropdown } from "./Dropdown";
import AppStyle from "./AppStyle.module.css";
import React, { useEffect, useState } from "react";
import AppApi from "./AppApi";

function App() {
  const countryList = [{ value: "India" }, { value: "Germany" }];

  const stateList = [
    { country: "India", value: "Maharashtra" },
    { country: "India", value: "Delhi" },
    { country: "Germany", value: "Berlin" },
    { country: "Germany", value: "Hamburg" },
  ];

  const cityList = [
    { state: "Maharashtra", value: "Pune" },
    { state: "Maharashtra", value: "Mumbai" },
    { state: "Delhi", value: "New Delhi" },
    { state: "Delhi", value: "North Delhi" },
    { state: "Berlin", value: "Berlin Treptow" },
    { state: "Berlin", value: "Buckow" },
    { state: "Hamburg", value: "Harburg" },
    { state: "Hamburg", value: "Lurup" },
  ];

  const [selectedCountry, setSelectedCountry] = useState<string>();
  const [countries, setCountries] = useState(countryList);

  const [selectedState, setSelectedState] = useState<string>();
  const [countryStates, setCountryStates] = useState<any>([]);

  const [selectedCity, setSelectedCity] = useState<string>();
  const [statesCities, setStatesCities] = useState<any>([]);

  useEffect(() => {
    const states = stateList.filter((state) => {
      return state.country === selectedCountry;
    });

    setCountryStates(states);
    setSelectedState("");
    setStatesCities([]);
  }, [selectedCountry]);

  useEffect(() => {
    const cities = cityList.filter((city) => {
      return city.state === selectedState;
    });

    setStatesCities(cities);
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

  return (
    <>
      <div className={AppStyle.header}>
        <h2>With local data</h2>
      </div>
      <div className={AppStyle.container}>
        <Dropdown
          label="Country"
          options={countries}
          value={selectedCountry}
          onChange={handleCountryChange}
        />
        <Dropdown
          label="State"
          options={countryStates}
          value={selectedState}
          onChange={handleStateChange}
        />
        <Dropdown label="City" options={statesCities} value={selectedCity} />
      </div>
      <hr />
      <AppApi />
    </>
  );
}

export default App;
