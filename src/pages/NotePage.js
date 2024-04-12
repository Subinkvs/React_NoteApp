import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import{ ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NotePage() {
  const navigate = useNavigate()
  const{id} = useParams()
  let [note, setNote] = useState(null)

  useEffect(() =>{
   
    getNote()

  }, [id])

let getNote = async () =>{
  if(id === 'new') return
  let response = await fetch(`http://localhost:8000/notes/${id}`)
  let data = await response.json()
  setNote(data)
}

let updatenote = async () => {
  await fetch(`http://localhost:8000/notes/${id}`, {
    method:'PUT',
    headers: {
      'Content-Type': 'application\json'
    },
    body: JSON.stringify({...note, 'updated': new Date()})
  })
}

let deletenote = async () => {
  await fetch(`http://localhost:8000/notes/${id}`,{
    method:'DELETE',
    headers:{
      'Content-Type':'application\json'
    },
    body: JSON.stringify(note)
  })
  navigate('/')
}

let createnote = async () => {
  await fetch(`http://localhost:8000/notes/`, {
    method:'POST',
    headers:{
      'Content-Type':'application\json'
    },
    body: JSON.stringify(note)
  })
  navigate('/')
}

let handlesubmit = () => {

  if(id !== 'new' && !note.body){
    deletenote()
  }
  else if(id !== 'new'){
    updatenote()
  }
  else if(id === 'new' && note !== null){
    createnote()
  }
  navigate('/')
}
   return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/' >
             <ArrowLeft onClick={handlesubmit}></ArrowLeft>
          </Link>
        </h3>
        {id !== 'new' ? (
         <button onClick={deletenote}>Delete</button>
        ):(
          <button onClick={handlesubmit}>Done</button>
        )}
       </div>
     <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body}>
     </textarea>
    </div>
  )
}

export default NotePage
