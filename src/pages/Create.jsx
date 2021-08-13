import { Container, Typography } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import { Form } from "../components";
const Create = () => {
  const classes = useStyles();
  return (
    <Container className={classes.typography}>
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        align="center"
        gutterBottom={true}
      >
        Create Your Note
      </Typography>
      <Form />
    </Container>
  );
};

export default Create;
