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

                  <div className='right-side'>
                      <div
                        class="block rounded-lg bg-white p-6 ">
                        <p class="mb-4 text-base text-neutral-600 ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                        </p>
                        <button className='bg-red-600 rounded-full border-solid border-2 border-yellow-400 hover:bg-sky-500'><a className= " text-white inline-block mx-7 my-2 text-xl font-semibold" href="#contact">Download CV</a></button>
                      </div>
                  </div>
              </div>
          </div>

    </section>
  )
}

export default About