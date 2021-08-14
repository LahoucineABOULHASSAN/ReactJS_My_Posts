import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { makeStyles } from "@material-ui/core";
import { green, yellow } from "@material-ui/core/colors";
import { pink } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";

const getBG = (category) => {
  if (category === "reminders") return yellow[700];
  if (category === "todos") return green[500];
  if (category === "money") return pink[500];
  return blue[500];
};

const useStyles = makeStyles({
  avatar: {
    background: (note) => getBG(note.category),
  },
  card: {
    border: (note) => `1px solid ${getBG(note.category)}`,
  },
});
const Note = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => handleDelete(note.id)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
