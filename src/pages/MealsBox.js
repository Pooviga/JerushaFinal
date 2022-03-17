import React, { useEffect } from "react";
import "./Box.css"
import Banner from "./Banner"

import spices from "./images/spices.jpg";
import art from "./images/art.jpg";
import logo from "./images/mealbox_logo.jpg";
import chart from "./images/din.gif";
import menuchart from "./images/menucard.jpeg";
import vege from "./images/vege.jpg";
import mealbox from "./images/mealbox.jpg";
import bgvision from "./images/bg-meals.jpeg"

const MealsBox = () => {  
    // useEffect(() => {
    //     window.history.scrollRestoration = 'manual'
    //     window.scrollTo(0, 0)
    //   }, [])  
    const myStylevideo={
        backgroundImage: `url(${bgvision})`,
        
    }; 
    return (
        <div >
            <div className="box-search-vision" style={myStylevideo}>
           </div>
            <div class="max-w-content w-full mx-auto">
                <div class="caption-vision">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">OUR VISION - TO PRODUCE HIGH QUALITY FOOD</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="boxsplit max-w-content w-full mx-auto">
                <div className="boxsplit-left">
                    <p className="top">Corporate Subscription Lunch Box</p>
                    <p className="f_t">#1 Monthly Food Delivery Service</p>
                    <p className="parah1">“Corporate employees can choose from 250+ variety of rice.”</p>
                    <p className="s_t">Who Has The Time To Prepare Such A Meal?</p>
                    <hr className="hrmeals"></hr>
                    <img className="img1" src= {spices}></img>
                    <p className="parah2">Food Delivery on a Monthly Basis lunch that is good for you Box was created with your needs in mind. We recognise you. We understand that you work 12-hour shifts and need home-cooked meals for breakfast, lunch, and dinner. Your demanding work schedule, deadlines, conference calls, and numerous business meetings are all familiar to us. To put it another way, you'll need superhuman power to go through it all. When you think of strength, you probably think of food. That's right, you can get a healthy food subscription
                    </p>
                    {/* <img className="img2" src= {art}></img>             */}

                    {/* <p className="parah2">But who has the time to prepare such a meal? In the rush of morning you just have to 
                    pack whatever food that’s available to you and fret through work. Buying hotel food is an option but it is
                     definitely not a healthy option.  This is where we come in. We offer healthy home food delivery service and
                      wholesome food that can satiate your hunger and also take care of your nutrient requirements all at once. 
                      Sounds amazing isn’t it? We present you, Subscription Meals Box!</p> */}

                    <p className="t2">Monthly Food Delivery in Ranipet</p>
                    <p className="parah2">Our Lunch Delivery Box got you covered. This box features Traditional South Indian Lunch. Corporate employees can choose from 250+ variety of rice. This healthy, wholesome box comes in an attractive Lunch Box that’s also appealing to your eyes. Atchayapathra Foods Catering Service provide vegetarian meals subscription delivery service to your home and office.</p>

                    {/* <img className="vege" src= {vege}></img> */}

                </div>
                <div className="boxsplit-right">
                    {/* <p className="top_r">MEALBOX SUBSCRIPTION PLANS</p> */}
                   
                    {/* <img className="chart" src= {chart}></img>  */}

                    <p className="menu-box-alt">MENU CHART</p>
                    <img className="logo" src= {logo}></img>
                    <div className="meals-tab">
                        <table className="table-mealsbox">
                            <tr>
                                <th className="th-meals tab-head" colSpan="2">DISHES</th>
                            </tr>
                            <tr>
                                <th className="th-meals">Dish</th>
                                <th className="th-meals">Prize</th>
                            </tr>
                            <tr>
                                <td className="th-meals">Veg Meals</td>
                                <td className="th-meals">&#8377;80.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Non Veg Meals</td>
                                <td className="th-meals">&#8377;100.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Chicken Briyani</td>
                                <td className="th-meals">&#8377;150.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Mutton Briyani</td>
                                <td className="th-meals">&#8377;200.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Prawn Briyani</td>
                                <td className="th-meals">&#8377;200.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Egg Briyani</td>
                                <td className="th-meals">&#8377;70.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Plain Briyani</td>
                                <td className="th-meals">&#8377;60.00</td>
                            </tr>                            
                        </table>
                    </div>
                </div>
                {/* <div>
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
                </div> */}
                
            </div>
        </div>
        
    );
};

export default MealsBox;