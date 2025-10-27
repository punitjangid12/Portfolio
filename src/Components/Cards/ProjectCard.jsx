import React from 'react'

function ProjectCard({image, title, description, view}) {
  return (
     <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="relative overflow-hidden rounded-lg mb-6">
       
       <img
          src={image}
          alt="Featured content"
          width={400}
          height={300}
          className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mb-4">
        
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
          {title}
        </h2>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <button className="relative overflow-hidden font-semibold text-white border border-white rounded-xl group h-[45px] w[3rem] p-1">
          <span className='absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></span>
          <span className="relative z-10 group-hover:text-black">Learn more</span>
        </button>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{view}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard