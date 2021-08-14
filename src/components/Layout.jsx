import { Container } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {/* app bar */}
      {/* side bar */}
      <SideBar />
      {children}
    </Container>
  );
};

export default Layout;
