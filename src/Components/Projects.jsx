import React from "react";
import ProjectCard from "./Cards/ProjectCard";

function Projects() {
  const ProjectCardData =[
     {
       image: "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title: "📱 Project 1 – Fitness App UI",
       description : "A sleek, mobile-friendly fitness app UI featuring daily stats, progress tracking, and dark mode interface using Tailwind and Framer Motion.",
       view:"10",
     },
     {
       image:"https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title: "🛍️ Project 2 – E-Commerce Template",
       description :"A front-end store design focused on simplicity and performance — includes dynamic product cards, cart preview, and responsive layout.",
       view:"10",
     },
     {
       image:"https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title: "🧠 Project 3 – AI Chat UI",
        description :"An interactive chat interface inspired by modern AI apps — featuring typing effects, message animations, and smooth scroll behavior.",
        view:"20",
     },
     {
       image:"https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title:"🌐 Project 4 – Landing Page Design",
        description :"A conversion-focused landing page built for startups — combining bold typography, smooth hover effects, and glassmorphism style.",
        view:"15",
     },
     {
       image:"https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title:"🧩 Project 5 – Weather App",
        description :"A real-time weather application that displays live temperature, forecast, and city-based search — crafted with React and API integration.",
        view:"8",
     },
     {
       image:"https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title:"📰 Project 6 – Blog Platform UI",
        description :"A clean and distraction-free blogging layout with responsive typography, tag filters, and a modern reading experience.",
        view:"30",
     },
     {
       image:"https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title:"🎧 Project 7 – Music Player UI",
        description :"A responsive music player with waveform animation, playlist management, and dark/light mode toggle.",
        view:"28",
     },
      {
       image:"https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto,fit=crop,height=630/uploads/sites/2/2023/06/HowDesignPortfolio-Blog.jpeg",
       title:"🕹️ Project 8 – Mini Game",
        description :"A fun and interactive card-matching game built with React. Players flip cards to find pairs while a timer and score tracker keep the challenge alive. ",
        view:"34",
     }
  ]
  return (
    <section>
      <div className="">
        <div className="flex justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900" >MY PROJECTS</h1>
        </div>
       <div className="min-h-screen flex items-center justify-center p-10">
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 ">
         {ProjectCardData.map((card, index) => (
         <ProjectCard 
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          view={card.view}
         />
          
        
      ))}
        </div>
       </div>
      </div>
    </section>
  );
}

export default Projects;
