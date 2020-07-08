import * as React from "react";
import isEqual from "fast-deep-equal";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { RadioProps, Element, Theme } from "./types";

export function createRadio<ThemeProps>(
  theme: Theme<ThemeProps, RadioProps<unknown>>
) {
  return function Radio<Value>(props: RadioProps<Value> & ThemeProps): Element {
    const { represents, ...fieldProps } = applyTheme(props, theme);
    const field = useField(fieldProps);

    const checked = React.useMemo(() => isEqual(field.value, represents), [
      represents,
      field.value
    ]);

    const onChange = React.useCallback(() => {
      field.onChange(represents);
    }, [represents, field.onChange]);

    return (
      <div {...field.getContainerProps()}>
        <input
          {...field.getInputProps()}
          type="radio"
          checked={checked}
          onChange={onChange}
        />

        {field.label && (
          <label {...field.getLabelProps()}>
            {field.label}
            {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
          </label>
        )}

        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const Radio = createRadio({});