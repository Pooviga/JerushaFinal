import React, { useEffect } from "react";
import "./NutritionFoodDelivery.css"
import bgnfd from './images/bg-nfd.jpg';
import nutrition1 from "./images/nutrition3.jpg"

const NutritionFoodDelivery = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])
    const myStylenfd={
        backgroundImage: `url(${bgnfd})`,
        
    }; 
    useEffect(() => {    
        document.title = "Jerusha | NutritionalFoodDelivery";
    });
    return (
        <div className="UYYbbv">
            <div className="box-search-nfd" style={myStylenfd}>
           
           </div>
            <div className="max-w-content w-full mx-auto">
                <div className="caption-nfd">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">FRESH & HEALTHY - HOME COOKED MEALS</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="gapnutrition">
            <div className="nftop max-w-content w-full mx-auto">
                    <p className="sdjkYT">JERUSHA HOME FOODS - FOOD DELIVERY</p>
                    <p className="dYUUvvg">Ranipet’s #1 Vegetarian and Non-Vegetarian Food Delivery Services</p>
                    <hr className="shsHJGY"></hr>
                    <p className="UThfYTR">“Consuming a healthy, well-balanced diet can help us maintain our good health throughout our lives.”</p>
                </div>
            <div className="nfsplit max-w-content w-full mx-auto">
                
                <div className="nfsplit-left">
                    <p className="HFiyFN">Why Should You Opt for Food Delivery?</p>
                    <p className="HJFyrt"><i className="JHuiIM">Food Delivery:</i> A well-balanced diet is essential for good health and happiness. Food offers the energy, protein, essential fats, vitamins, and minerals that our bodies require to live, grow, and function effectively. Experts say that in order to get the correct number of nutrients for optimum health, we all need a wide variety of foods.</p>
                    <p className="JHFiyM">One of the greatest cultural presence of life is the enjoyment of a nutritious food. Our menu lists the foods and dietary patterns that promote healthy nutrition.</p>
                    <p className="JHFiyM">Consider this: eating traditional food allows you to connect deeply with your roots. This is the type of meal your parents ate. Also, your forefathers and mothers before them.</p>
                    
                    <p className="CNPOVC">Food Delivery Services in Ranipet</p>
                    <p className="JHFiyM">provide you with the opportunity to match with your culture and nature</p>
                    <p className="JHFiyM">You have a cultural incentive to go fully traditional, in addition to the health argument.<a href="" className="Homelink">Jerusha Homemade Food</a> can show you the way.</p>
                    <p className="CNPOVC">How Do We Deliver Nutrient-Dense Food?</p>
                    <p className="JHFiyM">Three Touchstones:</p>
                    <ul className="HJFuio">
                        <li className="HFAQdf">Quality</li>
                        <li className="HFAQdf">Affordability</li>
                        <li className="HFAQdf">On-time delivery</li>
                    </ul>
                    <p className="JHFiyM"> Every bite of our food is prepared fresh to offer the finest taste and nutrients. We partner with local farms to provide you excellent, farm-fresh food.</p>
                    <p className="JHFiyM">Our first concern is your well-being. We begin by considering what is healthy for you. From our extensive menu, select the meal that best meets your health goals.</p>
                    <p className="JHFiyM">To assure the highest quality meal delivery, we use only natural products with no preservatives. Meals that are fresh, pleasantly healthful, and of high quality are delivered on time.</p>
                </div>
                <div className="nfsplit-right">
                    <div class="containernutrition">
                        <img src={nutrition1} alt="Snow" className="foodImageNut"></img>
                        <div class="bottom-left-nut">
                            <p className="img-nut-cap">Jerusha Home Foods</p>
                            <p className="img-nut-cap2">Fresh and Healthy</p>
                        </div>
                    </div>
                    <div className="nutrition-right-down">
                        <div className="quote-write">
                            <p className="quote-cont"> To eat is a necessity, but to eat intelligently is an art.It's not tough to maintain a healthy body weight.Our bodies are built up of the foods we consume on a daily basis. If we are now overweight or obese, one thing is certain: the food we consume is unhealthy.</p>
                        </div>
                        <div className="quote-symbol">
                            <p className="quotes">❛❛</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NutritionFoodDelivery;
