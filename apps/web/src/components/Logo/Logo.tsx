import { exposeStyles } from "~/utils/styles";
import Image from "next/image";

//STYLES API
//Define which styles of the component you want to expose. Only what you expose can be overridden.

//behavior: props.classes will MERGE/REPLACE what you exposed
const useStyles = exposeStyles({
  replace: {
    root: "",
    image: "",
  },
});

type LogoProps = {
  classes?: Partial<ReturnType<typeof useStyles>>;
};

const Logo = (props: LogoProps) => {
  //Consume with props to return classes that are either merged or replaced depending on what you defined above
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        src="/images/flerson-logo.svg"
        alt="Flerson Logo"
        // placeholder="blur"
      />
    </div>
  );
};

export default Logo;
