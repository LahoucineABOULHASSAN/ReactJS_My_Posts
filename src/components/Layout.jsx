import { Container } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import Header from "./Header";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container className={classes.container}>{children}</Container>
    </>
  );
};

export default Layout;
