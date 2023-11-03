import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, editNote }) => {
    return(
        <div className="note-list">
            {notes?.map((note, index) => (
                <NoteItem
                key={index}
                id={note.id}
                onDelete={onDelete}
                {...note}
                editNote={editNote}/>
            ))}
        </div>
    )
}

export default NoteList;