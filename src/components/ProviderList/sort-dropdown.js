import React from 'react';
import Expandable from "../Dropdowns/expandable";

import "./sort-dropdown.css"

const SortDropdown = ({
  className,
  handleChange,
  header,
  incomingState,
  group,
  options,
}) => {
    let inputDiv = options.map((option, index) =>
        <div
            className={`radio-container ${option === incomingState ? "selected" : null}`}
            key={index}
        >
            <input
                id={option}
                type="radio"
                name={group}
                value={option}
                checked={option === incomingState}
                onChange={() => handleChange(option)}
            />
            <label className="expandable-label" htmlFor={option} >
                {option.toString()}
            </label>
        </div>
    );
    let wrappedHeader = <h4>{header}</h4>

    return (
        <div className="sort-container">
            <Expandable
                className={className}
                header={wrappedHeader}
                content={inputDiv}
            />
            <img src="/sort-numeric-down.svg" alt={`current sort method: ${incomingState}`} />
        </div>
    )
}

export default SortDropdown;
