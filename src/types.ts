import * as React from "react";

export type Element = React.ReactElement<any, any> | null;

export interface FC<T> {
  (props: T): Element;
  displayName?: string;
}

export interface FieldInputProps {
  id: string;
  "aria-labelledby"?: string;
  [key: string]: any;
}

export interface FieldConfig<V> {
  value: V;
  onChange(value: V): void;
  id?: any;
  label?: React.ReactNode;
  labelProps?: React.HTMLProps<HTMLLabelElement>;
  labelClassName?: string;
  help?: React.ReactNode;
  helpProps?: React.HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
  containerProps?: React.HTMLProps<HTMLDivElement>;
  containerClassName?: string;
}

export interface Field<V> {
  value: V;
  onChange(value: V): void;
  label?: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  getInputProps(): FieldInputProps;
  getLabelProps(): React.HTMLProps<HTMLLabelElement>;
  getHelpProps(): React.HTMLProps<HTMLSpanElement>;
  getErrorProps(): React.HTMLProps<HTMLSpanElement>;
  getContainerProps(): React.HTMLProps<HTMLDivElement>;
}

export interface FieldSetProps extends React.HTMLProps<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  legendProps?: React.HTMLProps<HTMLLegendElement>;
  legendClassName?: string;
  help?: React.ReactNode;
  helpProps?: React.HTMLProps<HTMLSpanElement>;
  helpClassName?: string;
  error?: React.ReactNode;
  errorProps?: React.HTMLProps<HTMLSpanElement>;
  errorClassName?: string;
}

export interface OptionProps {
  value: string;
  label?: string;
  key?: any;
  disabled?: boolean;
}

export type HTMLField<T, V> = FieldConfig<V> &
  Omit<React.HTMLProps<T>, "value" | "onChange" | "label">;

export interface InputProps extends HTMLField<HTMLInputElement, string> {
  append?: React.ReactNode;
  prepend?: React.ReactNode;
}

export interface TextAreaProps extends HTMLField<HTMLTextAreaElement, string> {}
export interface CheckboxProps extends HTMLField<HTMLInputElement, boolean> {}

export interface CheckboxItemProps<T> extends HTMLField<HTMLInputElement, T[]> {
  represents: T;
}

export interface RadioProps<T> extends HTMLField<HTMLInputElement, T> {
  represents: T;
}

export interface SelectProps extends HTMLField<HTMLSelectElement, string> {
  placeholder?: string;
  options?: Array<OptionProps | string>;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  children?: React.ReactNode;
}

export type GetProps<T, R> = (props: T & R) => T;
