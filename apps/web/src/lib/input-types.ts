import type { RegisterOptions, UseFormReturn } from "react-hook-form";

export type BaseUncontrolledInputProps = {
  useForm: UseFormReturn<{ [key: string]: unknown }>;
  validation?: RegisterOptions;
};

// This is the base element config to be used by all inputs
export type BaseElementConfig = {
  cornerHintText?: string;
  heading: string;
  rootClassName?: string;
  required?: boolean;
  renderAfterLabel?: () => React.ReactNode;
  errorText?: string;
};
