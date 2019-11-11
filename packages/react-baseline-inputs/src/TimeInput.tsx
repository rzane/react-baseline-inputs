import * as React from "react";
import { Field } from "./Field";
import { TimeInputProps } from "./types";
import { useTheme } from "./theme";

export const TimeInput: React.FC<TimeInputProps> = ({
  value,
  onChange,
  theme = useTheme("timeInput"),
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <Field
      theme={theme}
      render={inputProps => (
        <input
          type="time"
          value={value || ""}
          onChange={handleChange}
          {...inputProps}
        />
      )}
      {...props}
    />
  );
};
