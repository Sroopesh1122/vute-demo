import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='section home'>
        <h1>Home Section</h1>
        <Link to={"/about"}>About</Link>
    </div>
  )
}

export default Home
