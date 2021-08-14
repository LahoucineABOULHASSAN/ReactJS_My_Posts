import { Typography } from "@material-ui/core";
import { Form } from "../components";
const Create = () => {
  return (
    <div className="create-page">
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
    </div>
  );
};

export default Create;
