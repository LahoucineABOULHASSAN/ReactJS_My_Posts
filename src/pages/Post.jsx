import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Post = ({ post, handleDelete }) => {
  return (
    <Card className="grid-card">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="avatar-title">
            {post.title[0].toUpperCase()}
          </Avatar>
        }
        action={
          handleDelete && (
            <IconButton
              aria-label="settings"
              className="delete-icon"
              onClick={() => handleDelete(post.id)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          )
        }
        title={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
