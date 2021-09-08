import { Container, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    padding: "2rem",
    borderRadius: "10px",
    alignItems: "center",
    background: red[100],
    flexDirection: "column",
    justifyContent: "center",
  },
  error: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
  },
  alert: {
    fontSize: "4rem",
    marginRight: "1rem",
  },
  link: {
    cursor: "pointer",
    marginTop: "1rem",
    wordSpacing: "3px",
    letterSpacing: "3px",
    paddingBottom: "0.3rem",
    textTransform: "capitalize",
    borderBottom: "2px solid #313131",
  },
});

const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="notfound">
      <Container className={classes.root}>
        <Typography
          variant="h3"
          component="h2"
          className={classes.error}
          color="error"
        >
          <ErrorOutlineIcon className={classes.alert} color="error" /> 404 |
          Error
        </Typography>
        <Typography variant="h4">This Page Can Not Be Found</Typography>

        <Typography
          className={classes.link}
          color="primary"
          variant="h6"
          onClick={() => {
            history.push("/");
          }}
        >
          Go to main page
        </Typography>
      </Container>
    </div>
  );
};
export default NotFound;
