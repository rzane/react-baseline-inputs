import * as React from "react";
import { Field } from "./Field";
import { Field as FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName, Size } from "./utilities";

export interface SwitchProps {
  field: FormField<boolean>;
  label: React.ReactNode;
  help?: React.ReactNode;
  children?: React.ReactNode;
  size?: Size;
  innerRef?: React.Ref<HTMLButtonElement>;
}

export function Switch(props: SwitchProps) {
  const { field, innerRef, children } = props;
  const { id, value, setValue } = field;

  const onBlur = useBlur(field);
  const onClick = React.useCallback(() => {
    setValue(value => !value);
  }, [setValue]);

  return (
    <Field check variant="switch" {...props}>
      <button
        id={id}
        ref={innerRef}
        type="button"
        role="switch"
        onBlur={onBlur}
        onClick={onClick}
        aria-checked={value}
        aria-label={value ? "On" : "Off"}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--check",
          "field__input--switch"
        )}
      >
        {children}
      </button>
    </Field>
  );
}
