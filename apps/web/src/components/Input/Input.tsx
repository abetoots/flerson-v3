//Components
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import InputLabel from "~/components/InputLabel/InputLabel";

//Misc
import { forwardRef } from "react";
import classNames from "classnames";
import { exposeStyles } from "~/lib/styles";

//Types
import type { BaseElementConfig } from "~/lib/input-types";

export type InputElementConfig = BaseElementConfig & {
  id: string;
  errorText?: string;
  helpText?: string;
  trailingButton?: React.ReactNode | (() => JSX.Element | JSX.Element[]);
  inputContainerClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type InputProps = InputElementConfig & {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const useStyles = exposeStyles({
  merge: {
    root: "",
    inputContainer: "mt-1 relative",
  },
  replace: {
    input: "focus:outline-none block w-full sm:text-sm text-gray-700",
  },
});

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      cornerHintText = "",
      errorText = "",
      rootClassName = "",
      helpText = "",
      heading = "",
      trailingButton = null,
      type = "text",
      value,
      onChange,
      onKeyDown,
      required,
      disabled,
      placeholder = "",
      ...props
    },
    ref
  ) => {
    const classes = useStyles(props);

    let helpInfo;
    if (helpText) {
      helpInfo = (
        <p className="mt-2 text-sm text-gray-500" id="description">
          {helpText}
        </p>
      );
    }

    let invalidText;
    let trailingIcon;
    if (errorText) {
      invalidText = (
        <p className="mt-2 text-sm text-red-600" id="description">
          {errorText}
        </p>
      );
      trailingIcon = (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <HiOutlineExclamationCircle
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      );
    }

    let trailBtn;
    if (trailingButton) {
      trailBtn =
        typeof trailingButton === "function"
          ? trailingButton()
          : trailingButton;
    }

    return (
      <div className={rootClassName}>
        <InputLabel
          htmlFor={id}
          label={heading}
          required={required}
          cornerHintText={cornerHintText}
        />
        <div
          className={classNames(
            { "flex space-x-0": !!trailingButton },
            classes.inputContainer
          )}
        >
          <input
            {...props}
            id={id}
            type={type}
            value={value}
            className={classNames(
              {
                "border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500":
                  !errorText,
                "border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500":
                  errorText,
                "rounded-md": !trailingButton,
              },
              classes.input
            )}
            onChange={onChange}
            aria-describedby="description"
            aria-invalid={!!errorText}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            disabled={disabled}
            required={required}
            ref={ref}
          />
          {trailingIcon}
          {trailBtn}
        </div>
        {invalidText}
        {helpInfo}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
