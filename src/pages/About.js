import React, { useEffect } from "react";
import "./About.css"
import Banner from "./Banner"
import foodimg from './images/food.jfif';
import bgcontact from './images/about-bg.jpg'

const CateringService = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])
    const aboutStyle={
        backgroundImage: 
 `url(${foodimg})`,
    };
    const myStyleabout={
        backgroundImage: `url(${bgcontact})`,
        
    }; 
    return (
        <div>
            <div className="box-search-about" style={myStyleabout}></div>
            <div className="max-w-content w-full mx-auto">
                <div className="caption-contact ">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">HOME COOKED MEALS - DELIVERY ACROSS RANIPET </p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="aboutsplit w-full mx-auto max-w-content">
                <div className="aboutsplit-left">
                    <div className="about-div-one">
                        <p className="about-para-one">Home Cooked Food: Atchayapathra Foods Private Limited (APF) was launched by Atchayapathra  Groups in January 2018 as a catering and meal delivery services. Our Homemade food supply service has the sole aim of providing fresh, delicious and nutritious meals every day at a budget cost. We are continuously leveraging technology to multiply our reach. Our state-of-the-art kitchens enable us to prepare quality food on a timely basis.</p>
                        <p className="about-head">Madurai’s #1 Home Cooked Food Delivery Service</p>
                        <p className="about-para-one">We deliver meals to Corporate Employees, Hospital Staff, and School Students at a very reasonable cost. Our special focus goes in preparing nutritious meals for school children every single day. Since we know that all parents, no matter how busy they might be, want their kids to eat good food and grow healthier. It is no easy task to make a kid eat healthy while they are at school. The sheer variety of yummy food will arouse their interest to eat.</p>
                    </div>
                </div>
                <div className="aboutsplit-right ">
                    <img src={foodimg} className="about-img"></img>
                </div>
            </div>
            {/* <div className="about-img-quote">
                <div style={aboutStyle} className="w-full mx-auto max-w-content">
                    <p className="quote-catering w-full mx-auto max-w-content">“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
                    <p className="author-about">~ Author</p>
                </div>
            </div> */}
            
             
            <div className="aboutsplit-two w-full mx-auto max-w-content">
                <div className="aboutsplit-left-two">
                    <img src={foodimg} className="about-img"></img>
                </div>
                <div className="aboutsplit-right-two">
                    <div className="about-div-two">
                        <p className="about-para-one">Home Cooked Food: Atchayapathra Foods Private Limited (APF) was launched by Atchayapathra  Groups in January 2018 as a catering and meal delivery services. Our food supply service has the sole aim of providing fresh, delicious and nutritious meals every day at a budget cost. We are continuously leveraging technology to multiply our reach. Our state-of-the-art kitchens enable us to prepare quality food on a timely basis.</p>
                        <p className="about-para-one">We deliver healthy meals to Corporate Employees, Hospital Staff, and School Students at a very reasonable cost. Our special focus goes in preparing nutritious meals for school children every single day. Since we know that all parents, no matter how busy they might be, want their kids to eat good food and grow healthier with our Home Cooked Food. It is no easy task to make a kid eat healthy while they are at school. The sheer variety of yummy food will arouse their interest to eat.</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default CateringService;