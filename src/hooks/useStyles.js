import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      display: "flex",
      padding: "1rem",
      margin: "100px 0",
      flexDirection: "column",
      "& h2,& h5": {
        marginBottom: "1rem",
      },
    },
    tab: {
      color: "#fff",
      borderBottom: "3px solid transparent",
      "& span:first-child": {
        "& *:first-child": {
          margin: 0,
        },
      },
    },
    active: {
      opacity: 1,
      color: "#ffc400",
      borderBottom: "3px solid #ffc400",
    },
    spacing: {
      padding: "1rem",
    },
    // toolbar classes
    navbar: {
      top: 0,
      left: 0,
      right: 0,
      width: "fit-content",
      position: "fixed",
      margin: "1rem auto",
      padding: "3px 0.7rem",
      paddingBottom: "0",
      background: "#000000b5",
      borderRadius: "10px",
    },
    buttons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      "& > *": {
        marginLeft: "1rem",
      },
    },
  };
});
