import React, { useEffect } from "react";
import "./Box.css"
import Banner from "./Banner"

import spices from "./images/spices1.jpg";
import art from "./images/art.jpg";
import logo from "./images/mealbox_logo.jpg";
import chart from "./images/din.gif";
import menuchart from "./images/menucard.jpeg";
import vege from "./images/vege.jpg";
import mealbox from "./images/mealbox.jpg";
import bgvision from "./images/bg-dinner.jpg"

const DinnerBox = () => { 
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
                    <p className="top">Corporate Subscription Dinner Box</p>
                    <p className="f_t">Dinner Box</p>
                    <p className="parah1">“Dining made smoother and more enjoyable with exciting varieties.”</p>
                    <p className="s_t">Why Dinner Is Important?</p>
                    <hr className="hrmeals"></hr>
                    <img className="img1" src= {spices}></img>
                    <p className="parah2">We all want our families to be healthy and contented, but we may be ignoring the most important spot in the day. 
                        Regular family dinners may be the most powerful way to help kids stay healthy and happy, according to Harvard
                         Health mental and physical health specialists.Having a <i>healthy vegetarian dinner</i> is quite satisfying 
                         after a long, hard day. Most people would agree that going to bed on an empty stomach is not enjoyable, nor is 
                         waking up with an unbalanced body. When families dine together, they tend to eat more vegetables and fruits — and 
                         fewer fried foods, soda, and foods with trans fats, research shows. When younger frequently eat dinner with their families,
                          they are less likely to be overweight than others.
                    </p>
                    {/* <img className="img2" src= {art}></img> */}
                    <p className="parah2">It is no mystery that what people eat has an effect on their daily physical and mental health. When people keep themselves
                         well-nourished, they can participate more fully and effectively in a wide variety of activities.</p>

                    <p className="t2">Dinner Delivery Service Madurai</p>

                    <p className="parah2">Dinner is an important meal of the day we provide food door delivery without any delay. Food is what gives you energy.
                     Dinner Food raises your blood sugar level in the middle of the day, making you able to focus for the rest of the night. It has been proven that
                    people who don’t eat dinner tend to gain more weight because they overeat during lunch time to compensate for dinner.</p>
                   
                    <p className="parah3-dinner">Our DinnerBox Subscription menu encompasses a complete, wholesome, nourishing and yummy South Indian traditional foods such as Idly, Dosai, Vadai,
                    Paniyaram, Appam, Uthappam, Upma, Puttu, Kozhukattai, Sevai, Idiyappam etc.</p>

                    {/* <img className="vege" src= {vege}></img> */}

                </div>
                <div className="boxsplit-right">
                    {/* <p className="top_r">DINNERBOX SUBSCRIPTION PLANS</p> */}
                    

                    {/* <img className="chart" src= {chart}></img> */}

                    <p className="menu-box-alt">MENU CHART</p>
                    {/* <img className="logo" src= {logo}></img> */}
                    <div className="dinner-tab">
                        <table className="table-mealsbox">
                            <tr>
                            <th className="th-meals tab-head" colSpan="2">DISHES</th>
                            </tr>
                            <tr>
                            <th className="th-meals">Dish</th>
                            <th className="th-meals">Prize</th>
                            </tr>
                            <tr>
                                <td className="th-meals">Idly (3 Idlies)</td>
                                <td className="th-meals">&#8377; 30.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Dosa</td>
                                <td className="th-meals">&#8377; 25.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Kichidi</td>
                                <td className="th-meals">&#8377; 50.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Onion Uthappam</td>
                                <td className="th-meals">&#8377; 40.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Chapathi</td>
                                <td className="th-meals">&#8377; 20.00</td>
                            </tr>
                        </table>
                    </div>
                    {/* <img className="menuchart" src= {menuchart}></img> */}

                </div>
                {/* <div>
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
                </div> */}
                
            </div>
        </div>
        
    );
};

export default DinnerBox;