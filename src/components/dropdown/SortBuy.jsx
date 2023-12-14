import React from "react";
import Dropdown from "react-dropdown";

const options = [
  { value: "op1", label: "12 Per Page" },
  { value: "op2", label: "1 Per Page" },
  { value: "op3", label: "10 Per Page" },
];

const options2 = [
  { value: "op4", label: "Sort by (Default)" },
  { value: "op5", label: "New" },
  { value: "op6", label: "Last" },
];

function SortBuy() {
  return (
    <div className="group-select">
      <Dropdown
        options={options}
        className="react-dropdown sort-buy"
        value={options[0]}
      />
      <Dropdown
        options={options2}
        className="react-dropdown sort-buy"
        value={options2[0]}
      />
    </div>
  );
}

export default SortBuy;
