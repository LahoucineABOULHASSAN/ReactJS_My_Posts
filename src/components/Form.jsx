import { TextField, Button, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "../hooks/useStyles";

import { Post } from "../pages";
const Form = () => {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [post, setPost] = useState("");
  const [postError, setPostError] = useState(false);

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const postData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body: post }),
    });
    const data = await res.json();
    setNewTitle(data.title);
    setNewBody(data.body);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitleError(false);
    setPostError(false);

    (title === "" || !title) && setTitleError(true);
    (post === "" || !post) && setPostError(true);

    title && post && postData();
  };

  const redirectHome = () => {
    history.push("/");
    setNewTitle("");
    setNewBody("");
  };
  let newPost = { title: newTitle, body: newBody };
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        align="center"
        gutterBottom={true}
      >
        {newTitle && newBody ? "My new Post" : "Create New Post"}
      </Typography>
      {newTitle && newBody ? (
        <div className="new-post">
          <Post post={newPost} />
          <br />
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={redirectHome}>
              Go to posts
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setNewTitle("");
              }}
            >
              create new post
            </Button>
          </div>
        </div>
      ) : (
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
            gutterBottom={true}
            required
          />
          <br />
          <TextField
            onChange={(event) => setPost(event.target.value)}
            className={classes.field}
            variant="outlined"
            label="Note Post"
            fullWidth={true}
            multiline
            rows={3}
            error={postError}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<ChevronRightIcon />}
          >
            Create
          </Button>
        </form>
      )}
    </>
  );
};

export default Form;
