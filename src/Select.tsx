import React, { useCallback, HTMLProps } from "react";
import { CustomInputProps } from "./types";

export interface SelectOption extends HTMLProps<HTMLOptionElement> {
  value: string;
  label: string;
  key?: any;
}

export interface SelectProps
  extends CustomInputProps<HTMLSelectElement, string | null> {
  placeholder?: string;
  options: Array<SelectOption | string>;
}

const getOptionProps = ({
  label: _label,
  value,
  key = value,
  ...option
}: SelectOption) => ({
  key,
  value,
  ...option
});

export const Select = ({
  onChange,
  options,
  placeholder,
  value,
  ...props
}: SelectProps) => {
  const handleChange = useCallback(event => onChange(event.target.value), [
    onChange
  ]);

  return (
    <select
      {...props}
      value={value === null ? "" : value}
      onChange={handleChange}
    >
      {placeholder && (
        <option disabled value="" key="placeholder">
          {placeholder}
        </option>
      )}

      {options.map(option =>
        typeof option === "string" ? (
          <option value={option} key={option}>
            {option}
          </option>
        ) : (
          <option {...getOptionProps(option)}>{option.label}</option>
        )
      )}
    </select>
  );
};
