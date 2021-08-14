import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;
const secondaryLight = "#ffc40030";
export const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    padding: "4rem 2rem",
    background: "#EFEFEF",
  },
  field: {
    margin: "0.5rem 0",
    display: "block",
  },
  avatar: {
    background: "#E46677",
  },
  drawer: {
    width: drawerWidth,
  },
  active: {
    background: secondaryLight,
  },
});
