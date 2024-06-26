import React, {useState, useEffect} from 'react'
import ListItems from '../components/ListItems'
import Addbutton from '../components/Addbutton'

const NotesListPages = ()  => {

  let[notes, setNotes] = useState([])

  useEffect(() => {

    getNotes()

  }, [])

  let getNotes = async () => {
    let response = await fetch('http://localhost:8000/notes')
    let data = await response.json()
    setNotes(data)
  }
  
  return (
     <div className='notes'>
           <div className='notes-header'>
              <h2 className='notes-title'>&#9782; Notes</h2>
               <p className='notes-count'>{notes.length}</p>
            </div>
     
           <div className='notes-list'>
             {notes.map((note, index) => 
           (
            <ListItems key={index} note={note}/>
           ))}
          </div>
          <Addbutton></Addbutton>
  </div>
    
  )
}

export default NotesListPages
