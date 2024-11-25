import React, { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      onAddNote({
        title,
        body,
      });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
