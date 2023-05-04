/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//Compoonents
import Focus from "../hoc/Focus/Focus";
import InputLabel from "~/components/InputLabel/InputLabel";

//Misc
import React, { forwardRef } from "react";
import { exposeStyles } from "~/utils/styles";
import classNames from "classnames";

//Types
import type { BaseElementConfig } from "~/utils/input-types";

export type CheckboxOptionValue = string | CheckboxOptionObject;

type CheckboxOptionObject = {
  [accessor: string]: string | undefined;
  description?: string;
  removes?: string;
};

type CheckboxProps<T extends CheckboxOptionValue> = BaseElementConfig & {
  options: T[];
  //If checkbox option values are objects, then requires accessors
  //else, null must be provided to
  errorText?: string;
  valsWithLabel?: boolean;
  required?: boolean;
  classes?: Partial<ReturnType<typeof useStyles>>;
  values: string[];
  onChangeState: (values: string[]) => void;
  renderCheckbox?: (checkboxState: {
    value: string;
    label: string;
    checked: boolean;
    option: T;
    checkboxHandler: (props: CheckboxHandlerProps) => void;
  }) => React.ReactNode;
} & (T extends CheckboxOptionObject
    ? {
        valueAccessor: keyof T;
        labelAccessor: keyof T;
      }
    : {
        valueAccessor?: never;
        labelAccessor?: never;
      });

type CheckboxHandlerProps = {
  event: React.ChangeEvent<HTMLInputElement>;
  currentValue: string;
  values: string[];
};

const useStyles = exposeStyles({
  replace: {
    root: "",
    inputContainer: "relative flex items-start",
    input:
      "h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500",
    fieldset: "",
  },
  merge: {
    label: "",
  },
});

//Note: use stateHandler when something other than the event is passed, otherwise, just use onChange
const Checkbox = <T extends CheckboxOptionValue>({
  options = [],
  heading = "",
  valueAccessor,
  labelAccessor,
  errorText = "",
  cornerHintText,
  required,
  values,
  renderCheckbox,
  ...props
}: CheckboxProps<T>) => {
  const id = heading.toLowerCase().replace(/\s/g, "-");
  const classes = useStyles(props);

  /**
   * Checkbox input change handler
   * Handles checkbox cases where we expect the checkbox's state to be an array of currently checked values
   */
  const checkboxHandler = ({
    event,
    currentValue,
    values,
  }: CheckboxHandlerProps) => {
    //make a copy of the old state
    let copy = [...values];
    //if checkbox is about to be checked
    if (event.target.checked) {
      copy.push(currentValue);
    } else {
      copy = copy.filter((item) => item !== currentValue);
    }
    //handler will now set the new array as the new value of this inputKey's state
    props.onChangeState(copy);
  };

  let invalidText;
  if (errorText) {
    invalidText = (
      <p className="mt-2 text-sm text-red-600" id="description">
        {errorText}
      </p>
    );
  }

  return (
    <div className={classes.root}>
      <InputLabel
        classes={{ label: "sr-only" }}
        htmlFor={id}
        label={heading}
        required={required}
        cornerHintText={cornerHintText}
      />
      <fieldset id={id} className={classes.fieldset}>
        <legend className="sr-only">{heading}</legend>
        {options.map((option) => {
          let checked = false;
          let label = "";
          let optionValue = "";

          if (typeof option === "string") {
            label = option;
            optionValue = option;
            checked = values.includes(option);
          } else if (typeof option === "object") {
            label = labelAccessor ? option[labelAccessor] || "" : "";

            if (valueAccessor) {
              optionValue = option[valueAccessor] || "";
              for (const v of values) {
                if (v === optionValue) {
                  checked = true;
                }
              }
            }
          } else {
            return null;
          }

          return renderCheckbox ? (
            renderCheckbox({
              value: optionValue,
              label,
              checked,
              option,
              checkboxHandler,
            })
          ) : (
            <div key={optionValue} className={classes.inputContainer}>
              <CheckboxInput
                key={optionValue}
                inputClassname={classes.input}
                value={optionValue}
                onChange={(e) =>
                  checkboxHandler({
                    event: e,
                    currentValue: optionValue,
                    values,
                  })
                }
                checked={checked}
                label={label}
                labelClassname={classes.label}
                description={
                  typeof option === "object" ? option.description : ""
                }
              />
            </div>
          );
        })}
      </fieldset>
      {invalidText}
    </div>
  );
};

export default Checkbox;

type CheckboxInputProps = {
  value: string;
  checked: boolean;
  inputClassname?: string;
  labelClassname?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  renderLabel?: () => React.ReactNode;
  description?: string;
  onFocus?: (focused: boolean) => void;
};

export const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  (
    {
      value,
      checked,
      inputClassname,
      labelClassname,
      label,
      renderLabel,
      onChange,
      description,
      onFocus,
    },
    ref
  ) => (
    <React.Fragment key={value}>
      <Focus run={onFocus} keyBoardOnly>
        <input
          id={value}
          aria-describedby="description"
          name={value}
          value={value}
          checked={checked}
          type="checkbox"
          className={inputClassname}
          onChange={onChange}
          ref={ref}
        />
      </Focus>
      <label
        htmlFor={value}
        className={classNames(
          "cursor-pointer font-medium text-gray-700",
          labelClassname
        )}
      >
        {renderLabel ? renderLabel() : label}
      </label>
      {description ? (
        <p id="description" className="text-gray-500">
          {description}
        </p>
      ) : null}
    </React.Fragment>
  )
);

CheckboxInput.displayName = "CheckboxInput";
