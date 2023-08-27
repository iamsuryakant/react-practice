import React from 'react'
import "./About.css"
import profilePic from '../../assets/pic.png';

const About = () => {
  return (
      <section className= 'about' id='about'>
          <div className='content'>
              <div className='title'>
                  <span>About Me</span>
              </div>
              <div className='about-details'>
                  <div className='left-side'>
                    <img className='w-28 mx-auto ' src={profilePic} alt='profile-pic'/>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default About