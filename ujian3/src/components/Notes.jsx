import React from "react";
import CardNote from "./CardNote";
import "../index.css";

const Notes = ({ notes, onDelete, onArchive }) => {
  let archivedNotes = notes.filter((note) => note.archived === true);
  let unArchivedNotes = notes.filter((note) => note.archived === false);
  return (
    <div className="Notes">
      <div className="cards-container">
        <h2>Catatan Aktif</h2>
        <div className="row">
          {unArchivedNotes.length === 0 ? (
            <h3 className="unavailable">Tidak ada catatan</h3>
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
          {archivedNotes.length === 0 ?(
            <h3 className="unavailable">Tidak ada catatan</h3>
          ):(archivedNotes.map((note) => (
            <CardNote
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            />
          )))}
        </div>
      </div>
    </div>
  );
};

export default Notes;

