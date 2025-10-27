import React from "react";
import my from "../Images/my.png"
import Button from "./Cards/Button";
export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center  text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <img
          src = {my}  // <-- replace with your image path
          alt="Punit Jangid"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-2 border-gray-700 hover:scale-110 hover:rotate-6 hover:translate-y-2 transition-transform duration-500"
       
         />    

        {/* Text Section */}
        <div  className="space-y-4">
        
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">
            About Me
          </h2>

          <p className="text-gray-300 ">
            Hi, I'm <span className="text-zinc-900 font-semibold">Punit Jangid</span> — 
            a passionate Frontend Developer who loves turning ideas into
            beautiful and responsive web experiences.
          </p>

          <p className="text-gray-300">
            I specialize in building modern web apps using{" "}
            <span className="text-zinc-900 font-medium">
              React, Tailwind CSS, and JavaScript
            </span>.
            I’m focused on writing clean, efficient code and creating smooth,
            user-friendly interfaces.
          </p>

          <p className="text-gray-300 ">
            My journey started with curiosity about how websites work — and that
            curiosity grew into a deep passion for coding. Every day, I aim to
            improve <span className="text-zinc-900">1% better</span> than
            yesterday.
          </p>

          <p className="text-gray-300 leading-relaxed">
            When I’m not coding, I’m probably at the gym 🏋️‍♂️.

          </p>

          <Button label="Contact Me" />
        </div>
      </div>
    </section>
  );
}
