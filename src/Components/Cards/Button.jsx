import React from 'react'

function Button({label}) {
  return (
    <div>
               <button className="relative overflow-hidden font-semibold text-black border border-black rounded-xl group h-[45px] w[3rem] p-1 ">
                 <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                 <span className="relative z-10 group-hover:text-white">{label}</span>
                 </button>
    </div>
  )
}

export default Button