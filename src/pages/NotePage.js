import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../assets/data'

function NotePage() {

  const{id} = useParams()
  const note = notes.find(note => note.id === Number(id))
  console.log(note);
  
  
  return (
    <div>
      <h2>
        {note.body}
      </h2>
    </div>
  )
}

export default NotePage
