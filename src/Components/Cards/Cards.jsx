import React from "react";

function Cards({ image, title }) {
  return (
    <div className="min-h-full min-w-fit hover:scale-110 transition-transform duration-300">

      {/* Front Side */}
     <div className="relative w-full h-full ">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-xl backface-hidden"
      />
    </div>
    {/* Back Side */}
     
   
    </div>
  );
}

export default Cards;
