import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Note from "./Note";
const Notes = () => {
  const [notes, setNotes] = useState([]);

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

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
    <div className="page">
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        align="center"
        gutterBottom={true}
      >
        My Notes
      </Typography>
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <Note note={note} handleDelete={handleDelete} key={note.id} />
        ))}
      </Masonry>
    </div>
  );
};

export default Notes;
