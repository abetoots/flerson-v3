//Components
import Focus from "../hoc/Focus/Focus";

//Misc
import React, { forwardRef } from "react";
import { exposeStyles } from "~/lib/styles";
import { cva } from "class-variance-authority";

//Types
import type { VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

//Define which styles of the component you want to expose. Only what you expose can be overridden.
/**
 * exposeStyles returns a function.
 * consume: when consumed with props, checks props.classes internally.
 * behavior: props.classes will MERGE with only what you exposed
 */
const useStyles = exposeStyles({
  replace: {
    root: buttonVariants({ variant: "default", size: "default" }),
    focused: "",
  },
});

type ButtonProps = React.PropsWithChildren<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
    VariantProps<typeof buttonVariants>
>;
export type Ref = HTMLButtonElement;

//Custom button that always behaves as type:'button' since buttons behave as type="submit" inside a form if type is missing
const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  //Consume with props to return classes that are either merged or replaced depending on what you defined above
  const classes = useStyles(props);
  const { variant, size, ...rest } = props;

  return (
    <Focus applyClassName={classes.focused}>
      <button
        ref={ref}
        className={cn(classes.root, buttonVariants({ variant, size }))}
        {...rest}
      >
        {props.children}
      </button>
    </Focus>
  );
});
Button.displayName = "Button";

export default Button;
