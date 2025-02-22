import React from "react";
import Expandable from "./expandable";

export default class CheckBoxDropdown extends React.Component {
  optionsMappings = {};

  constructor(props) {
    super(props);
    const { options = [] } = props;
    options.forEach(option => (this.optionsMappings[option.id] = false));
  }

  render() {
    const {
      className,
      options,
      header,
      expanded,
      //visibleTypes
      onChange = () => {}
    } = this.props;
    const inputDiv = options.map((option, index) => {
      const { display, id } = option;
      return (
        <div className="dropdown-input-wrapper" key={index}>
          <input
            id={id}
            type="checkbox"
            value={display}
            onChange={({ target: { checked } }) => {
              this.optionsMappings[id] = checked;
              onChange(
                id,
                options.filter(option => this.optionsMappings[option.id])
              );
            }}
          />
          <label className="expandable-label" htmlFor={option}>
            {display}
          </label>
        </div>
      );
    });

    return (
      <Expandable
        className={className}
        header={header}
        content={inputDiv}
        expanded={expanded}
      />
    );
  }
}
