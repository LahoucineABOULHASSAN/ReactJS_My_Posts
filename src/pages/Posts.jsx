import { Typography, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Post from "./Post";

import { makeStyles } from "@material-ui/core";
import { green, yellow, pink, blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  grid: {
    "& .grid-card": {
      height: "100%",
    },
    "&:nth-of-type(4n + 1) .delete-icon:hover": {
      background: green[100],
    },
    "&:nth-of-type(4n + 2) .delete-icon:hover": {
      background: yellow[100],
    },
    "&:nth-of-type(4n + 3) .delete-icon:hover": {
      background: pink[100],
    },
    "&:nth-of-type(4n + 4) .delete-icon:hover": {
      background: blue[100],
    },
    "&:nth-of-type(4n + 1) .avatar-title": {
      background: green[500],
    },
    "&:nth-of-type(4n + 2) .avatar-title": {
      background: yellow[500],
    },
    "&:nth-of-type(4n + 3) .avatar-title": {
      background: pink[500],
    },
    "&:nth-of-type(4n + 4) .avatar-title": {
      background: blue[500],
    },
    "&:nth-of-type(4n + 1) .grid-card": {
      border: `1px solid ${green[500]}`,
    },
    "&:nth-of-type(4n + 2) .grid-card": {
      border: `1px solid ${yellow[500]}`,
    },
    "&:nth-of-type(4n + 3) .grid-card": {
      border: `1px solid ${pink[500]}`,
    },
    "&:nth-of-type(4n + 4) .grid-card": {
      border: `1px solid ${blue[500]}`,
    },
  },
  typograpy: {
    margin: "3rem auto",
  },
});

const URL = "https://jsonplaceholder.typicode.com/posts";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setPosts(data);
  };

  const handleDelete = async (id) => {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  useEffect(() => fetchData(), []);
  return (
    <div className="page">
      <Typography
        className={classes.typograpy}
        variant="h4"
        component="h2"
        color="primary"
        align="center"
      >
        My Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={post.id}
            className={classes.grid}
          >
            <Post post={post} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
