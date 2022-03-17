import React from "react";
import "./Banner.css"
import foodimg from './images/food.jfif';


const Banner = () => {
    
    const myStyle={
        backgroundImage: `url(${foodimg})`,
    };
    return (
        <div>
            <div className="box-search" style={myStyle}>
           
           </div>
          
        </div>
        
       
    );
};

export default Banner;
