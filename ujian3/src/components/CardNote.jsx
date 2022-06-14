import React from "react";

const CardNote = ({ title, createdAt, body, onDelete, id, archived, onArchive }) => {
  return (
    <div>
      <h4 id="title">{title}</h4>
      <h6 id="date">{createdAt}</h6>
      <p className="note">{body}</p>
      <br />
      <button className="Delete" onClick={() => onDelete(id)}>
        {" "}
        Delete{" "}
      </button>
      {archived ? (
        <button className="Archive" onClick={() => onArchive(id)}> UnArchive</button>
      ) : (
        <button className="Archive" onClick={() => onArchive(id)}> Archive</button>
      )}
    </div>
  );
};

export default CardNote;
