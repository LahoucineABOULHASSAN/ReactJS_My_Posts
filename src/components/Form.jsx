import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useState } from "react";
import { useStyles } from "../hooks/useStyles";
const Form = () => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [details, setDetails] = useState("");
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("reminders");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    (title === "" || !title) && setTitleError(true);
    (details === "" || !details) && setDetailsError(true);

    title && details && console.log(title, details);
  };
  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={(event) => handleSubmit(event)}
    >
      <TextField
        onChange={(event) => setTitle(event.target.value)}
        className={classes.field}
        variant="outlined"
        label="Note Title"
        fullWidth={true}
        error={titleError}
        required
      />
      <TextField
        onChange={(event) => setDetails(event.target.value)}
        className={classes.field}
        variant="outlined"
        label="Note Details"
        fullWidth={true}
        multiline
        rows={3}
        error={detailsError}
        required
      />
      <FormControl component="fieldset" className={classes.field}>
        <FormLabel component="legend">Categories</FormLabel>
        <RadioGroup
          aria-label="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel
            value="reminders"
            control={<Radio />}
            label="Reminders"
          />
          <FormControlLabel value="todos" control={<Radio />} label="Todos" />
          <FormControlLabel value="money" control={<Radio />} label="Money" />
          <FormControlLabel value="work" control={<Radio />} label="Work" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        endIcon={<ChevronRightIcon />}
      >
        Create
      </Button>
    </form>
  );
};

export default Form;
