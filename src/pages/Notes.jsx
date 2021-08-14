import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Note from "./Note";
const Notes = () => {
  const [notes, setNotes] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, { method: "DELETE" });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  useEffect(() => fetchData(), []);
  return (
    <div>
      <Typography variant="h2" color="primary" align="center">
        Notes
      </Typography>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} sm={6} md={3} key={note.id}>
            <Note note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Notes;
