import { Container } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {/* app bar */}
      <Header />
      {/* side bar */}
      <SideBar />
      {children}
    </Container>
  );
};

export default Layout;
