import React from 'react'
import { ReactComponent as AddIcon} from '../assets/add.svg'
import {Link} from 'react-router-dom'

const Addbutton = () => {
  return (
    <Link to='/note/new' className='floating-button'>
      <AddIcon></AddIcon>
    </Link>
  )
}

export default Addbutton
