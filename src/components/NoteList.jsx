import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, onDelete, onArchive }) => {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">No notes found.</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
};

export default NotesList;
