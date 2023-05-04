//Components
import Focus from "../hoc/Focus/Focus";

//Misc
import React, { forwardRef } from "react";
import { exposeStyles } from "~/utils/styles";
import styles from "./Button.module.css";

//Define which styles of the component you want to expose. Only what you expose can be overridden.
/**
 * exposeStyles returns a function.
 * consume: when consumed with props, checks props.classes internally.
 * behavior: props.classes will MERGE with only what you exposed
 */
const useStyles = exposeStyles({
  replace: {
    root: styles.Button || "",
    focused: "",
  },
});

export type ButtonClasses = Partial<ReturnType<typeof useStyles>>;

type ButtonProps = React.PropsWithChildren<{
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  classes?: ButtonClasses;
}>;
export type Ref = HTMLButtonElement;

//Custom button that always behaves as type:'button' since buttons behave as type="submit" inside a form if type is missing
const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  //Consume with props to return classes that are either merged or replaced depending on what you defined above
  const classes = useStyles(props);

  return (
    <Focus applyClassName={classes.focused}>
      <button
        ref={ref}
        type={props.type}
        className={`${classes.root} ${styles.Button__default || ""}`}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </Focus>
  );
});
Button.displayName = "Button";

export default Button;
