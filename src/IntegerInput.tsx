import React, { Component } from "react";
import { TextInput, TextInputProps } from "react-native";
import { CustomInputProps } from "./types";
import { styles } from "./styles";

const clean = (input: string): string => {
  return input.replace(/[^0-9]/g, "");
};

const parse = (input: string): number | null => {
  const value = parseInt(input, 10);
  return isNaN(value) ? null : value;
};

export type IntegerInputProps = CustomInputProps<
  TextInput,
  TextInputProps,
  number | null
>;

export class IntegerInput extends Component<IntegerInputProps> {
  private handleChange = (value: string) => {
    this.props.onChange(parse(clean(value)));
  };

  public render() {
    const { value, onChange, innerRef, style, ...props } = this.props;

    return (
      <TextInput
        ref={innerRef}
        style={[styles.input, style]}
        value={value === null ? "" : value.toString()}
        onChangeText={this.handleChange}
        keyboardType="numeric"
        {...props}
      />
    );
  }
}
