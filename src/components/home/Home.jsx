import React, { useEffect, useRef } from 'react'
import profilePic from '../../assets/pic.png';


import {
    AiFillInstagram,
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai'

import {
    FaFacebook
} from 'react-icons/fa'

import {
    BsTwitter
} from 'react-icons/bs'

import Typed from 'typed.js';

const Home = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Software Developer", "Programmer", "Web Developer"],
            startDelay: 300,
            typeSpeed: 90,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "!"
        });

        return () => {
            typed.destroy();
        };


    }, []);

    

   

  return (
      <section id = 'home'>
          
          <div className='w-90 h-full mt-40'>
              <img className='w-28 mx-auto ' src={profilePic} alt='profile-pic'/>
              <div className=''>
                  <h1 className='mt-2 font-sans font-bold text-4xl flex items-center justify-center'>Suryakant Thakur</h1>
                  <div className='mt-2 font-serif text-2xl flex items-center justify-center'>I'm a <span className='ml-2 text-red-600 dotted' ref={el}></span></div>
              </div>
              
          </div>

          <div className='flex items-center justify-center mt-4 text-black text-3xl md:w-auto space-x-7 rounded-full '>
                <a className='hover:text-sky-800' target='_blank' rel="noreferrer" href="https://www.facebook.com/isuryakant"><FaFacebook/></a>
                <a className='hover:text-sky-600' target='_blank' rel="noreferrer" href="https://www.twitter.com/iamsuryakant_"><BsTwitter/></a>
                <a className='hover:text-pink-600' target='_blank' rel="noreferrer" href="https://www.instagram.com/iamsuryakant_"><AiFillInstagram/></a>
                <a className='hover:text-sky-800' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/iamsuryakant/"><AiFillLinkedin/></a>
              <a className='hover:text-gray-600' target='_blank' rel="noreferrer" href="https://www.github.com/iamsuryakant"><AiFillGithub /></a>

          </div>

          <div className='flex flex-col items-center mt-10'>
              <button className='bg-red-600 rounded-full border-solid border-2 border-yellow-400 hover:bg-sky-500'><a className= " text-white inline-block mx-7 my-2 text-xl font-semibold" href="#contact">Hire me</a></button>
          </div>
          
          <div className='text-center pt-20'>
            <span className="font-serif font-normal ">Scroll Down</span>
            <a href="#about">
                  <div className='mt-2 item-scroll
            ' ></div>
            </a>
        </div>
          
     </section>
  )
}

export default Home