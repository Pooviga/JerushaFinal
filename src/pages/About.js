import React, { useEffect } from "react";
import "./About.css"
import Banner from "./Banner"
import foodimg from './images/about-food.png';
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
    useEffect(() => {    
        document.title = "Jerusha | About";
      });
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
                <p className="about-top-para"><b className="about-bold">Home Cooked Food :</b> <b className="about-tit">Jerusha Home Foods</b> was launched by Jerusha Groups in January 2020 as a catering and meal delivery services. Our Homemade food supply service has the sole aim of providing fresh, delicious and nutritious meals every day at a budget cost. We are continuously leveraging technology to multiply our reach. Our state-of-the-art kitchens enable us to prepare quality food on a timely basis.</p>
                <div className="aboutsplit-left">
                    <div className="about-div-one">

                        <p className="about-head">Bachelors / Students</p>
                        <p className="about-para-one">Jerusha Home Foods was created to assist bachelors and students who are tired of eating outside food that tastes the same every time and is expensive. Because we care about your health as well as your taste, Jerusha home foods is an excellent budget-friendly option. Your desire for home-cooked meals will be satisfied.</p>
                        <p className="about-head">Professionals</p>
                        <p className="about-para-one">For busy and hard-working professionals, Jerusha Home Foods offers good food. Today's professionals seldom have time to prepare their own lunches. They either eat unhealthy, pre-packaged foods or junk food. Jerusha Home Foods helps professionals save time and money by reducing the amount of time they spend eating out.</p>
                        <p className="about-head">People with Special Care</p>
                        <p className="about-para-one">Every day, we guarantee to serve healthful and clean cuisine. Jerusha Home Foods is a godsend for them because the meal is tasty and prepared according to their specifications.</p>
                        <p className="about-head">Elders / Old Age Parents</p>
                        <p className="about-para-one">People frequently confront difficulties at home as their loved ones rush to work and have less time to prepare meals. We, at Jerusha Home Foods, provide delicious and nutritious cooked meals for the elderly on a timely basis.</p>
                        <p className="about-head">Eco-Friendly</p>
                        <p className="about-para-one">We care about people, but we also care about the environment. Our food is packaged in sanitary reusable boxes, which decreases the use of plastic and allows nature to breathe. The next day, the empty cartons are collected and reused without compromising hygiene.</p>
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
            
             
            {/* <div className="aboutsplit-two w-full mx-auto max-w-content">
                <div className="aboutsplit-left-two">
                    <img src={foodimg} className="about-img"></img>
                </div>
                <div className="aboutsplit-right-two">
                    <div className="about-div-two">
                        <p className="about-para-one">Home Cooked Food: Atchayapathra Foods Private Limited (APF) was launched by Atchayapathra  Groups in January 2018 as a catering and meal delivery services. Our food supply service has the sole aim of providing fresh, delicious and nutritious meals every day at a budget cost. We are continuously leveraging technology to multiply our reach. Our state-of-the-art kitchens enable us to prepare quality food on a timely basis.</p>
                        <p className="about-para-one">We deliver healthy meals to Corporate Employees, Hospital Staff, and School Students at a very reasonable cost. Our special focus goes in preparing nutritious meals for school children every single day. Since we know that all parents, no matter how busy they might be, want their kids to eat good food and grow healthier with our Home Cooked Food. It is no easy task to make a kid eat healthy while they are at school. The sheer variety of yummy food will arouse their interest to eat.</p>
                    </div>
                </div>
            </div>  */}
        </div>
    );
};

export default CateringService;