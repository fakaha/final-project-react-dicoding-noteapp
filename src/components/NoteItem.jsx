import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

const NoteItem = ({ note, id, onDelete, editNote }) => {
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editNotes, setEditNotes] = useState(note);

  return (
    <div className="note-item">
      <h3 className={isDone ? "completed" : "not-completed"}>{note}</h3>
      <div className="editor-note">
        {isEdit ? (
          <div>
            <input
              value={editNotes}
              onChange={(e) => setEditNotes(e.target.value)}
              placeholder="Edit Note"
            />
            <button
              onClick={() => {
                editNote(id, editNotes);
                setIsEdit(false);
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEdit(false);
                setEditNotes(note);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="editor-note-buttons">
            <p>{isDone ? "Completed" : "Not Completed"}</p>
            <button onClick={(e) => setIsEdit(true)}>Edit</button>
            <input
              type="checkbox"
              onChange={(e) => setIsDone(!isDone)}
              checked={isDone}
            />
            <DeleteButton id={id} onDelete={onDelete} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
