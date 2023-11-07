import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, editNote }) => {
    return(
        <div className="note-list">
            {notes?.map((note) => (
                <NoteItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                {...note}
                editNote={editNote}/>
            ))}
        </div>
    )
}

export default NoteList;