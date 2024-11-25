import React, { useState } from "react";
import { getInitialData, showFormattedDate } from "./utils";
import Header from "./components/header";
import NotesList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Toast from "./components/Toast";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [query, setQuery] = useState("");
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
  };

  const handleAddNote = (newNote) => {
    const note = {
      ...newNote,
      id: Date.now(),
      createdAt: showFormattedDate(new Date()),
      archived: false,
    };
    setNotes([note, ...notes]);
    showToast("Note added successfully!");
  };

  const handleDeleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter((note) => note.id !== id));
      showToast("Note deleted successfully!");
    }
  };

  const handleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
    showToast("Note status changed!");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Header onSearch={setQuery} />
      <main className="note-app__body">
        <NoteForm onAddNote={handleAddNote} />
        <h2>Active Notes</h2>
        <NotesList
          notes={filteredNotes.filter((note) => !note.archived)}
          onDelete={handleDeleteNote}
          onArchive={handleArchiveNote}
        />
        <h2>Archived Notes</h2>
        <NotesList
          notes={filteredNotes.filter((note) => note.archived)}
          onDelete={handleDeleteNote}
          onArchive={handleArchiveNote}
        />
      </main>
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};

export default App;
