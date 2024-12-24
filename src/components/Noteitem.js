import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
   const context = useContext(NoteContext)
   const { deleteNote } = context;
   const {note, updateNote} = props;
  return (
    
      <div className="card my-4">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-sharp fa-solid fa-trash mx-4" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully", "success")}}></i>
    <i className="fa-regular fa-pen-to-square" onClick={()=>{updateNote(note); 
}}></i>
        </div>
</div>
  )
}

export default Noteitem
