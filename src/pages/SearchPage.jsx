import React from 'react'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
    const params = useParams();
    console.log(params);
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage