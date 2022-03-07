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

const MealsBox = () => {    
    return (
        <div >
            <Banner />
            <div className="boxsplit max-w-content w-full mx-auto">
                <div className="boxsplit-left">
                    <p className="top">Corporate Subscription Lunch Box</p>
                    <p className="f_t">#1 Monthly Food Delivery Service</p>
                    <p className="parah1">“Corporate employees can choose from 250+ variety of rice.”</p>
                    <p className="s_t">Who Has The Time To Prepare Such A Meal?</p>
                    <hr className="hrmeals"></hr>
                    <img className="img1" src= {spices}></img>
                    <p className="parah2"><b className="bold">Monthly Food Delivery healthy lunch</b> Box is specifically designed
                     with you in mind. We know you. Especially, we know your 12 hour shifts home cooked food 
                     for <b className="bold">breakfast, lunch and dinner</b> We know your hectic work schedule, deadlines, conference
                      calls and countless business meetings. In short you need super human strength to pull through 
                      it all. When you think about strength, food comes to your mind. That’s right, a wholesome Food 
                      Subscription Anjarai Petti enriched with necessary proteins and vitamins to keep you afloat through it all.
                    </p>
                    <img className="img2" src= {art}></img>            

                    <p className="parah2">But who has the time to prepare such a meal? In the rush of morning you just have to 
                    pack whatever food that’s available to you and fret through work. Buying hotel food is an option but it is
                     definitely not a healthy option.  This is where we come in. We offer healthy home food delivery service and
                      wholesome food that can satiate your hunger and also take care of your nutrient requirements all at once. 
                      Sounds amazing isn’t it? We present you, Subscription Meals Box!</p>

                    <p className="t2">Monthly Food Delivery in Madurai</p>
                    <p className="parah2">Our Lunch Delivery Box got you covered. This box features Traditional South Indian Lunch. Corporate employees can choose from 250+ variety of rice. This healthy, wholesome box comes in an attractive Lunch Box that’s also appealing to your eyes. Atchayapathra Foods Catering Service provide vegetarian meals subscription delivery service to your home and office.</p>

                    <img className="vege" src= {vege}></img>

                </div>
                <div className="boxsplit-right">
                    <p className="top_r">MEALBOX SUBSCRIPTION PLANS</p>
                    <img className="logo" src= {logo}></img>

                    <img className="chart" src= {chart}></img>

                    <p className="menu-box-alt">MENU CHART</p>
                    <img className="menuchart" src= {menuchart}></img>

                </div>
                <div>
                    <p className="top">Get Your Special Plans</p>
                    <p className="f_t">MealBox Subscription Plans</p>
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

export default MealsBox;