import React, { useState } from "react";
import Card from "./Card";
import reviews from "./data";
import {FaArrowRight ,FaArrowLeft} from "react-icons/fa";

{/**/}
/*
 dekho buttons wala pura section yha bnega ,kyoki wo card me to sirf  
 ek uska data aarha hai na , 
lekin button thodi card ke sath aaygi so isliye yha use hoga yeh 
*/


const Testimonial = (props) => 
{
   
    const[index,setIndex] = useState(0);

    {/* ye left button ke liye call hoga , just if else k use krke index ko update krenge  */}
    function leftShifthandler()    
    {
       if(index - 1 < 0)
       {
         setIndex(reviews.length-1);
       }
       else{
        setIndex(index-1);
       }
    }

    {/* ye right button ke liye call hoga , same here */}
    function rightShifthandler()   
    {
        if(index +1 >= reviews.length)
        {
          setIndex(0);
        }
        else{
         setIndex(index+1);
        }

    }

    {/* ye surprise button ke liye call hoga , math.random function ka use hota hai isme  ( floor ka use isliye kiya kyoki floating result na aajaye khi )*/}
    function surpriseHandler()    
    {
      let randomindex = Math.floor(Math.random()*reviews.length);

      setIndex(randomindex);
    }
    
    return (
        <div className=" sm:max-w-[600px] sm:min-w-[400px] md:w-[775px]  bg-white flex flex-col justify-center items-center trasition-all duration-700 mt-10 pt-10">
            <Card review = {reviews[index]}></Card>

            <div className="text-center mx-auto mt-5  flex  gap-3 justify-center items-center p-4  " >
                <button  onClick={leftShifthandler}> <FaArrowLeft className=" text-violet-400"></FaArrowLeft> </button>
                <button onClick={rightShifthandler} > <FaArrowRight className="  text-violet-400"></FaArrowRight> </button>
            </div>

            <div className="text-center mx-auto md:mt-3 md:gap-3 md:p-4">
            <button onClick={surpriseHandler} className="  hover:bg-violet-400 bg-violet-600 trasition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise ME</button>
            </div>
        </div>

    )
}

export default Testimonial;
