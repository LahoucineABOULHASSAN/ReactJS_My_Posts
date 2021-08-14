import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "../hooks/useStyles";

const Note = ({ note, handleDelete }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
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
