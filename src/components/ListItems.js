import React from 'react'
import { Link } from 'react-router-dom';

const ListItems = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
     <h2>{note.body}</h2>
     </Link>
  );
}

export default ListItems
