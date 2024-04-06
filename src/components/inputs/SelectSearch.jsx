import React from "react";
import Select from "react-select";

const SelectSearch = ({
  options,
  isSearchable,
  name,
  defaultValue,
  placeholder,
  large,
  blue,
  setValue,
  errorCheck,
}) => {
  return (
    <div
      className={``}
    >
      <Select
        defaultValue={defaultValue}
        isSearchable={isSearchable}
        name={name}
        options={options}
        placeholder={placeholder}
        isClearable={false}
        //   isDisabled={isDisabled}
        //   isLoading={isLoading}
        //   isRtl={isRtl}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "#F4F4F4",
            primary25: "#F4F4F4",
            primary50: "#F4F4F4",
            primary75: "#F4F4F4",
          },
        })}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "2px",
            fontSize: "13px",
            borderColor: state.isFocused ? "#CED0DA" : "#CED0DA",
            //   padding: '7px 7px',
            // padding: large ? "7px 7px" : "3px",
          }),
        }}
        onChange={(e) => setValue(e.value)}
      />
    </div>
  );
};

export default SelectSearch;
