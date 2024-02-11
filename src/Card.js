import React from "react";
import {FaQuoteLeft , FaQuoteRight ,FaArrowRight ,FaArrowLeft} from "react-icons/fa";
import reviews from "./data";

const Card = (props) =>
{ 
    let review =props.review;

 

   

    


    return (
        

        <div className="flex flex-col md:relative  pl-5 pr-5 pb-3  ">
            <div className="absolute  md:top-[-7rem] sm:top-[15rem]  z-[10] mx-auto ">
            <img className="rounded-full aspect-square md:w-[140px] md:h-[140px] sm:w-[65px] sm:mt-[14px] sm:h-[65px]  z-25 " src={review.image}></img>
            <div className="rounded-full md:w-[140px] md:h-[140px]  sm:w-[70px] sm:h-[70px]  absolute  z-[-9] bg-purple-400 md:top-[-6px] md:left-[10px] sm:top-[20px] "></div>

           
            </div>

            <h3 className="text-center mt-7 md:font-bold md:text-2xl sm:text-xl sm:pl-2 sm:pr-2 capitalize   ">{review.name}</h3>

            <h5 className="text-center mt-7 uppercase text-violet-500 text-sm font-bold ">{review.job}</h5>

            <FaQuoteLeft className="text-center mx-auto mt-5  text-violet-500 "></FaQuoteLeft>
            <p className="text-center mt-4 text-slate-500">{review.text}</p>

            

                

                <FaQuoteRight className="text-center mx-auto mt-5  text-violet-500 "></FaQuoteRight>
            

           

           
        </div>
    )
   
}

export default Card;
