import React from "react";
import "./Box.css"
import Banner from "./Banner"

import spices from "./images/spices.jpg";
import art from "./images/art.jpg";
import logo from "./images/mealbox_logo.jpg";
import chart from "./images/din.gif";
import menuchart from "./images/menucard.jpeg";
import vege from "./images/vege.jpg";
import mealbox from "./images/mealbox.jpg";

const BreakBox = () => {    
    return (
        <div >
            <Banner />
            <div className="boxsplit max-w-content w-full mx-auto">
                <div className="boxsplit-left">
                    <p className="top">Traditional South Indian Breakfast</p>
                    <p className="f_t">#1 Breakfast Subscription Food Delivery Service</p>
                    <p className="parah1">“Enjoyable Variety of Evolving Healthy Menu”</p>
                    <p className="s_t">No Time to Cook? Try Our Delicious Breakfast Today!</p>
                    <hr className="hrmeals"></hr>
                    <img className="img1" src= {spices}></img>
                    <p className="parah2">In our hectic and stressful lives restricts us from 
                    keeping a check on what we consume because of which we fail to secure an 
                    ideal balanced diet for ourselves. Therefore, eating a  <b className="bold">nutrition-rich breakfast</b>
                     is very important for every person. In this world, not everyone gets enough time
                    to cook a variety of nutrition-rich dishes to eat. This seed of idea led us to 
                    venture into getting the <b>Homemade and nutrition-based food delivery service</b> at your
                     doorstep named  <b className="bold">“Break Box”.</b>
                    </p>

                    <p className="t2">Are Your Seeking Tasty Homemade Food for Breakfast</p>
                    <hr className="hrmeals"></hr>
                    <img className="img2" src= {art}></img>
                    <p className="parah2"> <b className="bold">Atchayapathra Foods</b> cater to a homemade  <b className="bold">breakfast subscription 
                    pack</b> called  <b className="bold">“Break Box“.</b> The main aim of this service is people looking for healthy breakfast
                    for a day as per your requirements. That’s why we deliver a healthy and tasty breakfast
                    that gives you the great nutrition you need to tackle even the toughest day. Our chef genuinely
                    enjoys the whole process of procuring, preparing, cooking, and serving food. Atchayapathra’s <b className="bold">highly 
                    experienced chef</b> is an expert in giving directions to his team and maintains an amicable atmosphere.</p>

                    <p className="parah2">Meals are made up of <b className="bold">fresh vegetables</b> to ensure the best taste and nutrition
                     in every bite. We reach out to local farms to bring <b>delicious farm-fresh food</b> to your table. Our 
                     environmentally friendly and inventive packaging boxes guarantee the freshness of food without compromising 
                     on the experience of indulging in South-Indian cuisine.</p>
                   
                    <p className="t2">We Feed Nutritious Food With Strict Safety</p>
                    <hr className="hrmeals"></hr>

                    <img className="vege" src= {vege}></img>

                    <p className="parah2">We, at Atchayapathra Foods, provide<b className="bold">packaged food with supreme hygiene.</b>  
                    Our Packaging preserves food quality and its tastes which tend to attract customers.
                    Thus, our Foods are <b className="bold">free from contamination</b> and they support the shelf life of foods. 
                    Our Packaging Method and type helps us to differentiate us from similar products on the same.
                    Also, we use packaging machines which <b className="bold">guarantee 100% safety</b> and hygiene.<br></br>

                    Do you wish you could just keep it simple and just get the breakfast healthy delivered at your
                    home/workplace? Worry no more because we’ve got it covered! When you need <b className="bold">healthy vegetarian breakfast
                    in Madurai</b>, call us and let us help you have a better nutrition breakfast experience today. Our delivery
                    team will pick up your home-cooked meal from our kitchen and deliver it right to your doorstep, on time.<br></br>

                    Happier lifestyle comes along with the choices we make towards healthier living. Choosing <b className="bold">“Break Box”</b>
                    could be one of your initial steps towards a healthier lifestyle. Our foods are prepared, keeping our 
                    customer’s taste buds in mind.<br></br>

                    <b className="bold">Kick-on Your Healthy Journey Today!</b></p>

                </div>
                <div className="boxsplit-right">
                    <p className="top_r">DINNERBOX SUBSCRIPTION PLANS</p>
                    <img className="logo" src= {logo}></img>

                    <img className="chart" src= {chart}></img>

                    <p className="menu-box-alt">MENU CHART</p>
                    <img className="menuchart" src= {menuchart}></img>

                </div>
                <div>
                    <p className="top">Get Your Special Plans</p>
                    <p className="f_t">DinnerBox Subscription Plans</p>
                    <hr className="hrmeals"></hr>
                    <p className="parah3">Before Subscription, Kindly 
                    contact our Executives of Delivery areas. Contact  <b className="bold">9677704822, 6385788771</b></p>
                </div>
                <div className="boxsplit-left">
                    <img className="meals" src={mealbox}></img>
                </div>
                <div className="boxsplit-right">
                    <img className="meals" src={mealbox}></img>
                </div>
                
            </div>
        </div>
        
    );
};

export default BreakBox;