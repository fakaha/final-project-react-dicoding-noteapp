import React from "react";
import NoteList from "./NoteList";
import { getData } from "../utils/data";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      lastId: getData().id,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onEditNoteHandler = this.onEditNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ note }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            note,
          },
        ],
      };
    });
  }

  onEditNoteHandler(id, newNote){
    this.setState((prevState) =>{
        const updatedNotes = prevState.notes.map((note) => {
            if(note.id == id){
                return{
                    id: note.id,
                    note: newNote,
                };
            }
            return note;
        });
        return{
            notes: updatedNotes,
        };
    });
  }

  render() {
    return (
      <div className="note-app">
        <NoteInput addNote={this.onAddNoteHandler} id={this.state.lastId}/>
        <h1>NoteApp</h1>
        <NoteList editNote={this.onEditNoteHandler} notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
