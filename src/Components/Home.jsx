import React from 'react'
import pfp from "../Images/pfp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import Button from './Cards/Button';
function Home() {
  
  return (
    <div className="w-full mt-10">
      <div className="wrapper   grid grid-cols-1 md:grid-cols-2 items-center p-20 gap-20 h-[100%]">
        <div className="intro gap-20">
          <h1 className="text-4xl font-bold mb-4">Hi, I’m Punit</h1>
          <p className="text-gray-600">Frontend Developer</p>
          <p className="text-gray-600">I build clean, modern UIs.</p>
          <div className='text-3xl p-2'>
               <a
      href="https://github.com/punitjangid12"
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-black-400 hover:text-purple-900"
    >
      <FontAwesomeIcon icon={faGithub} />
      
    </a>
    <a
       href='https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav'
       target="_blank"
       rel="noopener noreferrer"
       className="text-4xl text-black-400 hover:text-purple-900 transition-colors duration-300"
    >

     <FontAwesomeIcon icon = {faLinkedin} />

    </a>
     <a
       href='https://www.instagram.com/punitharswal/'
       target="_blank"
       rel="noopener noreferrer"
       className="text-4xl text-black-400 hover:text-purple-900 transition-colors duration-2-00"
    >

     <FontAwesomeIcon icon = {faInstagramSquare} />

    </a>
          </div>
          <div className='flex flex-auto align-middle p-4 gap-2 '>
            <Button label="Hire Me"/> 
            <Button label="Check Cv"/>       
          </div>

        </div>
        

        <div className="flex justify-center ">
          <img
            src={pfp}                // 👈 use your imported variable here
            alt="Profile"
            className="w-full h-auto object-cover hover:scale-110 hover:rotate-6 hover:translate-y-2 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  )
}

export default Home