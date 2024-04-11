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

let handelsubmit = () => {

  updatenote()
  navigate('/')
}
   return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/' >
             <ArrowLeft onClick={handelsubmit}></ArrowLeft>
          </Link>
        </h3>
      </div>
     <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body}>
     </textarea>
    </div>
  )
}

export default NotePage
