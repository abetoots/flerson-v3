import classNames from "classnames";
import React from "react";

export const H1 = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) => (
  <h1 {...props} className={classNames("flerson-h1", className)}>
    {children}
  </h1>
);

export const H2 = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) => (
  <h2 {...props} className={classNames("flerson-h2", className)}>
    {children}
  </h2>
);

export const H3 = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) => (
  <h3 {...props} className={classNames("flerson-h3", className)}>
    {children}
  </h3>
);

export const H4 = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) => (
  <h4 {...props} className={classNames("text-lg", className)}>
    {children}
  </h4>
);

export const H5 = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h5">) => (
  <h5 {...props} className={classNames("text-md", className)}>
    {children}
  </h5>
);

export const H6 = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h6">) => (
  <h6 {...props} className={classNames("text-base", className)}>
    {children}
  </h6>
);
