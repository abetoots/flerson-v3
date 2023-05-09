import { exposeStyles } from "~/lib/styles";
import classNames from "classnames";

const useStyles = exposeStyles({
  merge: {
    root: "",
    label: "",
  },
});

type InputLabelProps = {
  label: string;
  cornerHintText?: string;
  htmlFor: string;
  required?: boolean;
  renderAfterLabel?: () => React.ReactNode;
  classes?: Partial<ReturnType<typeof useStyles>>;
};

const InputLabel = ({
  label,
  cornerHintText = "",
  htmlFor,
  required = false,
  renderAfterLabel,
  ...props
}: InputLabelProps) => {
  const classes = useStyles(props);
  return label ? (
    <div
      className={classNames(
        { "mb-1 flex justify-between": cornerHintText },
        classes.root
      )}
    >
      <label
        htmlFor={htmlFor}
        className={classNames(
          "block text-sm font-medium text-gray-700",
          classes.label
        )}
      >
        {label}
        {required ? <span className="text-red-500">*</span> : null}
      </label>
      {cornerHintText ? (
        <span className="text-sm text-gray-500" id="corner-hint">
          {cornerHintText}
        </span>
      ) : null}
      {renderAfterLabel ? renderAfterLabel() : null}
    </div>
  ) : null;
};

export default InputLabel;
