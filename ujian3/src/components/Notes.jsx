import React from "react";
import CardNote from "./CardNote";
import "../index.css";

const Notes = ({ notes, onDelete, onArchive }) => {
  let archivedNotes = notes.filter((note) => note.archived === true);
  let unArchivedNotes = notes.filter((note) => note.archived === false);
  return (
    <div>
      <div className="cards-container">
        <h2>Catatan Aktif</h2>
        <div className="row">
          {unArchivedNotes === [] ? (
            <h2>Catatan Aktif Masih Kosong</h2>
          ) : (
            unArchivedNotes.map((note) => (
              <CardNote
                key={note.id}
                id={note.id}
                onArchive={onArchive}
                onDelete={onDelete}
                {...note}
              />
            ))
          )}
        </div>
      </div>
      <div className="cards-container">
        <h2>Arsip</h2>
        <div className="row">
          {archivedNotes.map((note) => (
            <CardNote
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
{
  /* <CardNote
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            /> */
}
