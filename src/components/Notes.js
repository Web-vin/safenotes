import React, { useContext, useEffect, useRef, useState} from 'react'
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import NoteContext from '../context/notes/NoteContext';
import {useNavigate} from 'react-router-dom'

const Notes = (props) => {
   const context = useContext(NoteContext);
   let navigate = useNavigate();
   const {notes, getNotes, editNote} = context;
   useEffect(()=>{
     if(localStorage.getItem('token')){
       getNotes()
     }
    else{
      navigate("/signup")
    }
     // eslint-disable-next-line 
   }, [])

   const ref = useRef(null)
   const refClose = useRef(null)

   const [note, setnote] = useState({ititle: "", idescription: "", itag: ""})

  const updateNote = (currentnote) =>{
      ref.current.click()
      setnote({id: currentnote._id, ititle: currentnote.title, idescription: currentnote.description, itag: currentnote.tag})
  }
  const handleClick = (e) =>{
    console.log("Updating the note...", note)
    editNote(note.id, note.ititle, note.idescription, note.itag)
    refClose.current.click();
    props.showAlert("updated Successfully", "success")
    //addNote(note.title, note.description, note.tag);
}
const onChange = (e) =>{
  setnote({...note, [e.target.name]: e.target.value})
}

  return (
    <>
<AddNote showAlert={props.showAlert}/>
<button ref={ref} type="button"  class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">edit note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
  <div className="mb-3">
    <label htmlfor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="ititle" name="ititle" aria-describedby="emailHelp" value={note.ititle} minLength={5} required onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlfor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="idescription" name="idescription" value={note.idescription} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlfor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="itag" name="itag" value={note.itag} onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button ref={refClose}type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.ititle.length<5 || note.idescription.length<5} onClick={handleClick} type="button" class="btn btn-primary">Update note</button>
      </div>
    </div>
  </div>
</div>
   
    <div className="row my-4">
    <h1>
      your notes
    </h1>
    <div className="container">
    {notes.length===0 && 'No notes to display'}
    </div>
    {notes.map((note)=>{
      return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>
    })}
    </div>
    </>
  )
}

export default Notes
