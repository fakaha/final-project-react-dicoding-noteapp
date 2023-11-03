import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            note: '',
        }

        this.onNoteChangeEventHandler = this.onNoteChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onNoteChangeEventHandler(event){
        this.setState(() => {
            return{
                note: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        console.log(this.props.id);
        this.setState({note: ''}); // membuat value input kosong ketika sudah submit
    }

    render(){
        return(
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Note" value={this.state.note} onChange={this.onNoteChangeEventHandler}/>
                <button className="add-button-input" type="submit">+</button>
            </form>
        )
    }
}

export default NoteInput;