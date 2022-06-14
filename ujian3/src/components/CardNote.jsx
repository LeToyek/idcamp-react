import React from "react";

const CardNote = ({
  title,
  createdAt,
  body,
  onDelete,
  id,
  archived,
  onArchive,
}) => {
  return (
    <div className="card">
      <div className="text-card">
        <h3 id="title">{title}</h3>
        <h6 id="date">{createdAt}</h6>
        <br />
        <p className="note">{body}</p>
      </div>
      <div className="btns">
        <button className="delete" onClick={() => onDelete(id)}>
          {" "}
          Delete{" "}
        </button>
        {archived ? (
          <button className="archive" onClick={() => onArchive(id)}>
            {" "}
            UnArchive
          </button>
        ) : (
          <button className="archive" onClick={() => onArchive(id)}>
            {" "}
            Archive
          </button>
        )}
      </div>
    </div>
  );
};

export default CardNote;
