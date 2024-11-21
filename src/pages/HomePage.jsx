import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      here is home page
      <Link to='/post'>post</Link>
    </div>
  )
}

export default HomePage
