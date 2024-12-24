import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/NoteContext"
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context; 

    const [note, setnote] = useState({title: "", description: "", tag: ""})
    const handleClick = (e) =>{
           e.preventDefault();
           addNote(note.title, note.description, note.tag);
           setnote({title: "", description:"", tag:""})
           props.showAlert("Added Successfully", "success")
    }

    const onChange = (e) =>{
         setnote({...note, [e.target.name]: e.target.value})
    }
  return (
    <>
    <div className="container my-4">
    <h1>Add a note</h1>
    <form>
  <div className="mb-3">
    <label htmlfor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" minLength={5} required onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlfor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={note.description} minLength={5} required onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlfor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} minLength={5} required onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
</form>
</div>
</>
  )
}

export default AddNote
