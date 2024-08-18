import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='section about'>
      <h1>About Section</h1>
      <Link to={"/"}>Home</Link>
    </div>
  )
}

export default About
