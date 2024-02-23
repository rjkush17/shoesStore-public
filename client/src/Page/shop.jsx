import React from 'react'
import { useParams } from 'react-router-dom'

function Shop() {
    const {type}  = useParams();
  return (
    <div>Shop type is {type}</div>
  )
}

export default Shop