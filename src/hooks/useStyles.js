import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;
const secondaryLight = "#ffc40030";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      display: "flex",
      padding: "4rem 2rem",
    },
    field: {
      margin: "0.5rem 0",
      display: "block",
    },
    drawer: {
      width: drawerWidth,
      "& > div": { background: "#EFEFEF" },
    },
    active: {
      background: secondaryLight,
    },
    spacing: {
      padding: "1rem",
    },
    // toolbar classes
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolBar: theme.mixins.toolbar,
  };
});
