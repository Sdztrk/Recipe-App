import React from 'react'
import AboutDiv from '../styleComponents/AboutDiv'

const About = () => {
  return (
    <AboutDiv>
      <img style={{width:"700px",}} src="https://recipe-app-solution.vercel.app/static/media/coding.0ee2fc3a99672b144ac05c8cb4994d69.svg" />
      <h1>Software Developer Said</h1>
      <div style={{border:"1px solid black", borderRadius:"5px"}} >
        <h3>Currently learning Full-Stack Development Languages.</h3>
        <h5>I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.</h5>
      </div>
      
    </AboutDiv>
  )
}

export default About