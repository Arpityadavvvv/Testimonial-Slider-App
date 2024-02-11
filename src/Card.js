import React from "react";
import {FaQuoteLeft , FaQuoteRight ,FaArrowRight ,FaArrowLeft} from "react-icons/fa";
import reviews from "./data";

const Card = (props) =>
{ 
    let review =props.review;

 

   

    


    return (
        

        <div className="flex flex-col md:relative  pl-5 pr-5 pb-3  ">
            <div className="absolute top-[-7rem] z-[10] mx-auto ">
            <img className="rounded-full aspect-square w-[140px] h-[140px] z-25" src={review.image}></img>
            <div className="rounded-full w-[140px] h-[140px] absolute  z-[-9] bg-purple-400 top-[-6px] left-[10px] "></div>

           
            </div>

            <h3 className="text-center mt-7 font-bold text-2xl capitalize">{review.name}</h3>

            <h5 className="text-center mt-7 uppercase text-violet-500 text-sm font-bold ">{review.job}</h5>

            <FaQuoteLeft className="text-center mx-auto mt-5  text-violet-500 "></FaQuoteLeft>
            <p className="text-center mt-4 text-slate-500">{review.text}</p>

            

                

                <FaQuoteRight className="text-center mx-auto mt-5  text-violet-500 "></FaQuoteRight>
            

           

           
        </div>
    )
   
}

export default Card;