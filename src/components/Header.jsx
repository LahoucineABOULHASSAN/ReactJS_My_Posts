import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import { format } from "date-fns";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} elevation={0} color="default">
      <Toolbar>
        <Typography variant="subtitle1" component="h5">
          {format(new Date(), "do MMMM Y")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
