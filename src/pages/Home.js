import React from "react";
import HomePage from "../components/HomePage/HomePage";
import Banner from "./Banner";
import "./Home.css"
import center_image from "./images/center_image.jpg";
import meal_icon from "./images/meal_icon.jpeg";
import health_icon from "./images/health_icon.jpeg";
import clock_icon from "./images/clock_icon.jpeg";
import menu_icon from "./images/menu_icon.jpeg";
import offer_icon from "./images/offer_icon.jpeg";
import loc_icon from "./images/loc_icon.jpeg";
import cross_icon from "./images/cross_icon.jpeg";
import food_icon from "./images/food_icon.jpeg";
import people from "./images/people.jpeg";
import catering from "./images/catering.jpeg";
import bulk from "./images/bulk.jpeg";
import imgscroll from "./images/imgscroll.jpg";
import eat4 from "./images/eat4.jfif";
import door_to_door from "./images/door-to-door.png"
import chef_hat from "./images/chefs-hat.png"
import clipboard from "./images/clipboard.png"



const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-content w-full mx-auto">
                <div className="caption-contact ">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-q">FRESH & HEALTHY</p>
                    <p className="home-contact">HOME COOKED MEALS</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="first">
                <p className="f">Homemade Food Delivery Service Coimbatore</p>
                <p className="s"><span className="redText">WELCOME TO</span> JERUSHA FOODS</p>
            </div>

            <p className="sub_text">HOW IT WORKS</p>

            <div className="boxsplit-home max-w-content w-full mx-auto">
                <div className="a1">
                    <img src={clipboard} className="pics"></img>
                    <p className="one">Choose Your Favorite</p>
                    <p className="two">With our periodically-changing menu, choose your
                    favorite food plan in just one click. Our recipes are cooked with seasonal
                    produce to serve you a nutritious and a healthy diet.</p>
                </div>
                <div className="a2">
                    <img src={chef_hat} className="pics"></img>
                    <p className="one">Our Chef Starts Cooking</p>
                    <p className="two">Once you subscribe to our plan, our home Chefs start 
                    cooking according to the plan you have chosen. Our chefs adhere to
                    meticulously laid out quality standards.</p>
                </div>
                <div className="a3">
                    <img src={door_to_door} className="pics"></img>
                    <p className="one">Get It At Your Doorstep</p>
                    <p className="two">Our delivery team will pick up your home cooked meal 
                    from our kitchen and deliver it right to your doorstep, on time.Bon appetit!</p>
                </div>
            </div>
            <div class="container-home">
                <img className="poster-top"src={center_image}></img>
                <div className="poster-top-mob"></div>
                <div class="centered-home">
                    <div className="mini">
                        <img className="small" src={people}></img>
                        Corporate Orders
                    </div>
                    <div className="mini">
                        <img className="small" src={catering}></img>
                        Catering Orders
                    </div>
                    <div className="mini">
                        <img className="small"src={bulk}></img>
                        Bulk Orders
                    </div>
                </div>
            </div>

            <p className="sub_text">BENEFITS</p>
            <div className="boxsplit-home max-w-content w-full mx-auto">
                <div className="a1">
                    <img src={meal_icon} className="icons-home"></img>
                    <p className="one">Home Cooked Meal</p>
                    <p className="two">Get authentic home cooked meal at your doorstep.</p>
                </div>
                <div className="a1">
                    <img src={clock_icon} className="icons-home"></img>
                    <p className="one">Get More Free Time</p>
                    <p className="two">Spend less time cooking and get more productive time.</p>
                </div>
                <div className="a1">
                    <img src={cross_icon} className="icons-home"></img>
                    <p className="one">No Commitments</p>
                    <p className="two">Skip or Cancel the Meal. Your money will be refunded*.</p>
                </div>
                <div className="a1">
                    <img src={menu_icon} className="icons-home"></img>
                    <p className="one">Amazing Menu</p>
                    <p className="two">Amazing variety of food options every day for a healthy diet.</p>
                </div>
                
            </div>
            <br></br><br></br>
            <div className="boxsplit-home max-w-content w-full mx-auto">
                <div className="a1">
                    <img src={offer_icon} className="icons-home"></img>
                    <p className="one">Promotions & Offers</p>
                    <p className="two">Refer your friends and avail loyalty coupons and offers.</p>
                </div>
                <div className="a1">
                <   img src={loc_icon} className="icons-home"></img>
                    <p className="one">Choose Your Location</p>
                    <p className="two">Delivery location according to your availability.</p>
                </div>
                
                <div className="a1">
                    <img src={health_icon} className="icons-home"></img>
                    <p className="one">Healthy Food & Life</p>
                    <p className="two">No Artificial flavors or colours, Ajinomoto or preservatives.</p>
                </div>
                <div className="a1">
                    <img src={food_icon} className="icons-home"></img>
                    <p className="one">Why Hire A Cook?</p>
                    <p className="two">Subscribe to one of our affordable plans.</p>
                </div>
            </div>
          
            <div className="menu-d w-full mx-auto">
                <HomePage/>
            </div>
            
            
            <div class="container-home">
                <img className="poster"src={imgscroll}></img>
                <img className="postermobile" src={eat4}></img>
                <div class="right">
                        <div class="slider-home">
                            <div class="imgs_slides">
            
                            <input type="radio" name="radio-btn" id="radio1" />
            
                            <input type="radio" name="radio-btn" id="radio2" />
            
                            <input type="radio" name="radio-btn" id="radio3" />
            
                            <input type="radio" name="radio-btn" id="radio4" />
            
                            <input type="radio" name="radio-btn" id="radio5" />
            
                            <div class="first slide">
                                <p className="ek">Quality Food. Great Service.</p>
                                <p className="dho">Quality food just like the ones made at home. 
                                Flexible packages with good food variants for lunch. 
                                Delivery at office/door makes it an ideal daily option
                                for working people. Great service and affordable prices.</p>
                                <p className="theen">Phenil Ruban</p>
                            </div>
                            <div class="slide">
                                <p className="ek">Real Value for Money</p>
                                <p className="dho">Enjoy tasty and healthy homemade food at home/office.
                                 Daily and monthly plans are available and can be customized too.
                                Real value for money!</p>
                                <p className="theen">Gomathi R Manoharan</p>
                            </div>
                            <div class="slide">
                                <p className="ek">Feel like My Mom's Cooking</p>
                                <p className="dho">I recommend you all to taste this homemade food. 
                                It really made me feel like my mom's cooking. 
                                There was no preservatives, it just tasted awesome. 
                                Thanks to my friend who suggested me easy dine kitchen.</p>
                                <p className="theen">Kruthika</p>
                            </div>
                            <div class="slide">
                                <p className="ek">Quality Food. Great Service.</p>
                                <p className="dho">Quality food just like the ones made at home. 
                                Flexible packages with good food variants for lunch. 
                                Delivery at office/door makes it an ideal daily option
                                for working people. Great service and affordable prices.</p>
                                <p className="theen">Phenil Ruban</p>
                            </div>
                            <div class="slide">
                                <p className="ek">Quality Food. Great Service.</p>
                                <p className="dho">Quality food just like the ones made at home. 
                                Flexible packages with good food variants for lunch. 
                                Delivery at office/door makes it an ideal daily option
                                for working people. Great service and affordable prices.</p>
                                <p className="theen">Phenil Ruban</p>
                            </div>
                        </div>
            
                        <div class="navigation-home">
                            <label for="radio1" class="navigation-btn">
                            </label>
                            <label for="radio2" class="navigation-btn">
                            </label>
                            <label for="radio3" class="navigation-btn">
                            </label>
                            <label for="radio4" class="navigation-btn">
                            </label>
                            <label for="radio5" class="navigation-btn">
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default Home;
