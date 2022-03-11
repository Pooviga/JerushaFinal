import React from "react";
import "./Vision.css";
import bgvision from "./images/bg-vision.jpg"
import Banner from "./Banner"

const Vision = () => {
    const myStylevision={
        backgroundImage: `url(${bgvision})`,
        
    };  
    return (
        <div>
            <div className="box-search-vision" style={myStylevision}>
           </div>
            <div class="max-w-content w-full mx-auto">
                <div class="caption-vision">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">OUR VISION - TO PRODUCE HIGH QUALITY FOOD</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="hjHGDFG max-w-content mx-auto w-full">
                <div>
                    <p className="hfGHDh animatecon">OUR VISION STATEMENT</p>
                </div>
                <div>
                    <h4 className="shdfHF">“To make high-quality food that is nutritious and hygienic available to people from all walks of life.”</h4>
                </div>
                <hr className="jhfHGk animatecon"></hr>
                <p className="ajgKJF">To supply everyone with high-quality, nutrient-dense food in order to support our belief that proper nutrition is crucial for good health and a basic, required component of nurturing the human spirit.</p>
                <p className="HJFhfh ">OUR PRINCIPLES</p>
                <div>
                    <h4 className="ckhjkJH">We strictly adhere to the following </h4>
                </div>
                <hr className="hjLoJG "></hr>
                <div class="btText">
                    <blockquote>
                        <ul>
                            <li className="scJKGff">No artificial colors</li>
                            <li className="scJKGff">No artificial flavors</li>
                            <li className="scJKGff">No additional preservatives</li>
                            <li className="scJKGff">No reuse of cooking oil</li>
                            <li className="scJKGff">No vanaspati</li>
                            <li className="scJKGff">No ajinomoto</li>
                            <li className="scJKGff">Clean water for food preparation</li>
                            <li className="scJKGff">Fresh vegetables for cooking</li>
                            <li className="scJKGff">No wastage of food</li>
                            <li className="scJKGff">Safe and non-toxic packaging</li>
                        </ul>
                    </blockquote>
                </div>
                <hr className="iHJFii"></hr>
            </div>
        </div>
    );
};

export default Vision;
