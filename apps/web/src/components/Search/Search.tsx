//Components
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Focus from "~/components/hoc/Focus/Focus";
import Button from "~/components/Button/Button";

//Misc
import { useDebouncedCallback } from "use-debounce";
import React from "react";
import { exposeStyles } from "~/lib/styles";

export type SearchProps = {
  enableAutoSearch?: boolean;
  onSearch?: (value?: string) => void;
  handleAutoSearch?: ((value: string) => void) | Promise<void>;
  classes?: Partial<ReturnType<typeof useStyles>>;
  ms?: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

const useStyles = exposeStyles({
  merge: {
    root: "",
    input: "",
  },
  replace: {
    button: "",
    inputFocused: "_focused",
  },
});

const Search = ({
  enableAutoSearch = false,
  onSearch,
  handleAutoSearch,
  ms = 400,
  value,
  ...props
}: SearchProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { classes: removeIt, ...rest } = props;
  const classes = useStyles(props);

  const debounce = useDebouncedCallback((val: string) => {
    if (enableAutoSearch && typeof handleAutoSearch === "function") {
      handleAutoSearch(val);
    }
  }, ms);

  return (
    <div className={classes.root}>
      <Focus keyBoardOnly applyClassName={classes.inputFocused}>
        <input
          aria-label="search"
          value={value}
          className={classes.input}
          onKeyDown={(e: React.KeyboardEvent) => {
            //if value is provided, then assume this is a controlled input
            //else, assume this is uncontrolled and inside a form element
            //so hitting enter should be handled by form submit
            if (e.key === "Enter" && typeof value === "string") {
              onSearch?.(value);
            }
          }}
          onKeyUp={() => value && typeof value === "string" && debounce(value)}
          {...rest}
          type="search"
        />
      </Focus>
      <Button
        classes={{ root: classes.button }}
        type="submit"
        aria-label="Search button"
      >
        <HiOutlineMagnifyingGlass />
      </Button>
    </div>
  );
};

export default Search;
