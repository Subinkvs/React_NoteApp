import React from 'react'
import { useParams } from 'react-router-dom'
import notes from '../assets/data'
import { Link } from 'react-router-dom'
import{ ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

function NotePage() {
  const{id} = useParams()
  const note = notes.find(note => note.id === Number(id))
  console.log(note); 
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/'>
             <ArrowLeft></ArrowLeft>
          </Link>
        </h3>
      </div>
     <textarea value={note?.body}>

     </textarea>
    </div>
  )
}

export default NotePage
