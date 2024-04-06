import React from 'react'
import notes from '../assets/data'
import ListItems from '../components/ListItems'

const NotesListPages = ()  => {
  return (
     <div className='notes'>
           <div className='notes-header'>
              <h2 className='notes-title'>&#9782; Notes</h2>
            </div>
     
           <div className='notes-list'>
             {notes.map((note, index) => 
           (
            <ListItems key={index} note={note}/>
           ))}
          </div>
  </div>
    
  )
}

export default NotesListPages
