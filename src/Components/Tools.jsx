import React from "react";
import Cards from "./Cards/Cards";
import Bootstrap from "../Images/Bootstrap.png";
import  Css from "../Images/Css.png";
import Github from "../Images/Github.png";
import Html from "../Images/Html.png";
import Js from "../Images/Js.png";
import Tailwind from "../Images/Tailwind.png";
import Vscode from "../Images/Vscode.png";
import logo from "../Images/logo.svg"

function Tools() {
   const cardsData = [
  {
    image: Html,
    title: "Html",
  },
  {
    image:Css,
    title: "Css",
  },
  {
    image:Js,
    title: "Java Script",
  },
  {
    image:Bootstrap,
    title:"Bootstrap",
  },
  {
    image:Github,
    title:"Github",
  },
  {
    image:Tailwind,
    title:"Tailwind",
  },
  {
    image:Vscode,
    title:"Vscode",
  },
   {
    image:logo,
    title:"React",
  }

];

  return (
  <section className="m-10">

    <div className="flex justify-center "><h1 className="text-4xl md:text-5xl font-bold text-zinc-900">Tools I Used</h1></div>
        <div className="min-h-screen flex items-center justify-center p-10">
           <div className="grid  flex-wrap sm:grid-cols-2 lg:grid-cols-4  md:grid-cols-3 place-items-center p-10 gap-2 md:gap-4 lg:gap-6">
           
      {cardsData.map((card, index) => (
        <Cards
          key={index}
          image={card.image}
          title={card.title}
        />
      ))}
    </div>
    </div>
  </section>
  );
}

export default Tools;
