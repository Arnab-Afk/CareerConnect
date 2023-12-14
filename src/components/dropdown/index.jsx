import React from "react";
import Dropdown from "react-dropdown";

const options = [
  { value: "op1", label: "All Location" },
  { value: "op2", label: "Japan" },
  { value: "op3", label: "Canada" },
  { value: "op4", label: "England" },
];

function SelectLocation() {
  return (
    <Dropdown
      options={options}
      className="react-dropdown select-location"
      value={options[0]}
    />
  );
}

export default SelectLocation;
