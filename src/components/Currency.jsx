import React from "react";
import Select from "react-select";
import { useGlobalContext } from "../context";
const options = [
  { value: "usd", label: "US Dollar" },
  { value: "eur", label: "Euro" },
  { value: "rub", label: "Russian Ruble" },
  { value: "cny", label: "Chines Yuan" },
  { value: "jpy", label: "Japanese Yen" },
];
const Currency = () => {
  const { currency, setCurrency } = useGlobalContext();
  return (
    <Select
      defaultValue={currency}
      onChange={setCurrency}
      options={options}
      isClearable={false}
      isSearchable={false}
    />
  );
};

export default Currency;
