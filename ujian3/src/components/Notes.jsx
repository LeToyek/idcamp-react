import React from "react";
import CardNote from "./CardNote";

const Notes = ({ notes, onDelete, onArchive }) => {
  let archivedNotes = notes.filter(note => note.archived === true)
  let unArchivedNotes = notes.filter(note => note.archived === false)
  return (
    <div>
      <h2>not archived</h2>
      <div className="not-archived">
        {unArchivedNotes.map(note =>(
          <CardNote
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note}
        />
        ))}
      </div>
      <div className="archived">
        <h2>HAHAHA</h2>
        {archivedNotes.map(note =>(
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
  );
};

export default Notes;
{/* <CardNote
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            /> */}