import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from './Cards/Button';


function Contact() {
  return (
   <section className="min-h-screen  text-white px-6 py-16" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-zinc-900 mb-10"
      
        >
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            
           
          
            <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
              Let’s Connect 🚀
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Have a project idea, collaboration, or just want to say hello?
              I’m always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500" />
                <p className="text-gray-300">punitjangid@email.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-green-500" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-red-500" />
                <p className="text-gray-300">Jaipur, India</p>
              </div>
            </div>
            </div>

          {/* Right side - Contact Form */}
          <form className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-5">
            
            
           
          
            <div>
              <label className="block text-sm text-gray-400 ">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-violet-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
              
            </div>
             <button className="relative overflow-hidden font-semibold text-white border border-white rounded-xl group h-[45px] w[3rem] p-1">
          <span className='absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></span>
          <span className="relative z-10 group-hover:text-black">Click here</span>
        </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact