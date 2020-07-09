import * as React from "react";
import { useField } from "./useField";
import { applyTheme } from "./applyTheme";
import { Element, Theme, FileListInputProps } from "./types";

export function createFileListInput<ThemeProps>(
  theme: Theme<ThemeProps, FileListInputProps>
) {
  return function FileListInput(
    props: FileListInputProps & ThemeProps
  ): Element {
    const { append, prepend, ...fieldConfig } = applyTheme(props, theme);
    const field = useField({ ...fieldConfig, value: undefined });

    const { onChange } = field;
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event.target.files!);
      },
      [onChange]
    );

    return (
      <div {...field.getFieldProps()}>
        {field.label && (
          <label {...field.getLabelProps()}>
            {field.label}
            {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
          </label>
        )}
        {prepend}
        <input
          type="file"
          multiple
          onChange={handleChange}
          {...field.getInputProps()}
        />
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const FileListInput = createFileListInput({});
