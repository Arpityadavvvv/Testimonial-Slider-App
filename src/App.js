import React from "react";
import Testimonial from "./Testimonial";

import reviews from "./data";




const App = () => {

  
  
  return ( <div>
     <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-200 ">
      <h1 className="text-center text-4xl font-bold ">OUR TESTIMONIALS </h1>
      <div className=" bg-violet-400 h-[4px] w-[40px] mt-1"></div>

      <Testimonial reviews = {reviews}></Testimonial>
     </div>
  </div>

  );
};

export default App;
