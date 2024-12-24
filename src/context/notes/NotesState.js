//import  { useState } from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const host = "http://localhost:2000"
    const notesInitial =[
    ]
    const [notes, setnotes] = useState(notesInitial)
    // GET ALL NOTES
    const getNotes = async () => {
      // API Call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      const json = await response.json()
      console.log(json)
      setnotes(json)
    } 



     //Add a note
     const addNote = async(title, description, tag)=>{
        //Api Call
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        
        body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
      });
      const json = await response.json();
      console.log(json)
   


        console.log("adding a new note")
        const note = {
            "_id": "646b301e39011b1ac36ea5ed3",
            "user": "6466f586097454704d0a0b2e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-05-22T09:04:30.414Z",
            "__v": 0
          };
         setnotes(notes.concat(note))
     }

     // Delete a note
     const deleteNote = async (id)=>{
        //Api Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      const json = response.json();
      console.log(json)


      console.log("delete a note with id" + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setnotes(newNotes)
     }

     // Edit a note
     const editNote = async(id, title, description, tag)=>{
      //Api Call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        
        body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
      });
      const json= response.json();
      console.log(json)
      //return response.json(); // parses JSON response into native JavaScript objects
    
    let newNotes = JSON.parse(JSON.stringify(notes))



      //logic to edit
      for (let index = 0; index < newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
          
          
      }
      //console.log(id, notes)
      setnotes(newNotes);
     }


     return (
         <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
             {props.children}
         </NoteContext.Provider>
     )
}

export default NoteState;