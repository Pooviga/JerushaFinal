import React, { useEffect } from "react";
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
import eat4 from "./images/white.jpg";
import door_to_door from "./images/door-to-door.png"
import chef_hat from "./images/chefs-hat.png"
import clipboard from "./images/clipboard.png"
import bghome from './images/food.jfif'
import zomatohome from './images/zomato.png'
import swiggyhome from './images/swiggy.png'

import dosa from './images/dosa.png'
import poori from './images/poori.png'
import pongal from './images/pongal.png'
import idly from './images/idly.png'
import onion from './images/onion.png'
import chicken_biriyani from './images/biriyani.jpg'
import fish from './images/fish.jpg'
import crab from './images/crab.jpg'
import prawn from './images/prawn.jpg'
import fishcurry from './images/fishcurry.jpg'
import chapathi from './images/chapa.jpg'
import kichadi from './images/kichadi.jpg'
import tomato_rice from './images/tomato rice.jpg'
import lemon_rice from './images/lemon rice.jpg'
import tamarind_rice from './images/tamarind rice.jpg'
import curd_rice from './images/curd rice.jpg'
import veg_biriyani from './images/veg biriyani.jpg'
import  mutton_biriyani from './images/mutton_biriyani.jpg'
import  prawn_biriyani from './images/prawn_biriyani.jpg'
import  egg_biriyani from './images/egg_biriyani.jpg'
import  plain_biriyani from './images/plain_biriyani.jpg'
import  chicken_gravy from './images/chicken gravy.jpg'
import  mutton_gravy from './images/mutton gravy.jpg'
// import  fish_gravy from './images/fishcurry.jpg'
import  chilli from './images/chicken 65.jpg'



const Home = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])
    const myStylehome={
        backgroundImage: `url(${bghome})`,
        
    }; 
    return (
        <div>
            <div className="box-search-home" style={myStylehome}>
           </div>
            <div className="max-w-content w-full mx-auto">
                <div className="caption-home ">
                    <p className="home-title-banner">JERUSHA HOME FOODS</p>
                    <p className="home-contact-banner">CONTACT US - WE'D LOVE TO HEAR FROM YOU</p>
                    <hr className="hrbanner"></hr>
                    <div className="home-apps-banner">
                        <a href="https://zoma.to/order/19620369" target="_blank" className="zom-cont"><img src={zomatohome} className="zomato-pic"></img></a>
                        <a href="https://www.swiggy.com/amp-menu/restaurants/jerusha-home-foods-arcot-ranipet-vellore-482315" target="_blank" className="swigg-cont"><img src={swiggyhome} className="swiggy-pic"></img></a>
                        <p className="order-home-apps">ORDER NOW</p>
                    </div>
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
                    <p className="two">Choose your preferred meal plan in a single click from our always changing selection. Our meals are prepared with seasonal ingredients to provide you with a delicious and healthy meal.</p>
                </div>
                <div className="a2">
                    <img src={chef_hat} className="pics"></img>
                    <p className="one">Our Chef Starts Cooking</p>
                    <p className="two">Once you've signed up for our service, our home chefs will begin preparing according to the plan you've chosen. Our chefs adhere to a set of quality criteria that have been thoroughly spelled out.</p>
                </div>
                <div className="a3">
                    <img src={door_to_door} className="pics"></img>
                    <p className="one">Get It At Your Doorstep</p>
                    <p className="two">Our delivery team will collect your freshly prepared dinner from our kitchen and deliver it to your house on time. Good luck with your meal!</p>
                </div>
            </div>
            <div class="container-home">
                <img className="poster-top" src={center_image}></img>
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
                        Safe packaging
                    </div>
                </div>
            </div>

            <p className="sub_text">BENEFITS</p>
            <div className="boxsplit-home max-w-content w-full mx-auto">
                <div className="a1">
                    <img src={meal_icon} className="icons-home"></img>
                    <p className="one">Home Cooked Meal</p>
                    <p className="two">Get a delicious home-cooked supper delivered right to your door.</p>
                </div>
                <div className="a1">
                    <img src={clock_icon} className="icons-home"></img>
                    <p className="one">Get More Free Time</p>
                    <p className="two">Spend less time cooking and more time working.</p>
                </div>
                <div className="a1">
                    <img src={cross_icon} className="icons-home"></img>
                    <p className="one">No Commitments</p>
                    <p className="two">The meal might be skipped or cancelled. Your money will be returned to you.</p>
                </div>
                <div className="a1">
                    <img src={menu_icon} className="icons-home"></img>
                    <p className="one">Amazing Menu</p>
                    <p className="two">Every day, there is an amazing range of food options for a balanced diet.</p>
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
            <div className="menu-home-phone">
                {/* <br></br> */}
                <p className="word">VEG MENU</p>
                {/* <br></br> */}
            <div className="slider_n">
                <div className="slide_n active">
                    <img src={dosa} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>DOSA</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={poori} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>POORI</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={pongal} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>PONGAL</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={onion} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>ONION OOTHAPAM</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={idly} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>IDLY</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={chapathi} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>CHAPATHI</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={kichadi} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>KICHADI</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={tomato_rice} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>TOMATO RICE</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={lemon_rice} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>LIME RICE</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={tamarind_rice} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>TAMARIND RICE</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={curd_rice} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>CURD RICE</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="slide_n">
                    <img src={veg_biriyani} alt="" className="menu-img-phone"></img>
                    <div className="info_n">
                    <h2>VEG BIRIYANI</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                <div className="navigation_n">
                    <i className="fa fa-chevron-left prev-btn_n"></i>
                    <i className="fa fa-chevron-right next-btn_n"></i>
                </div>
                <div className="navigation-visibility_n">
                    <div className="slide-icon_n active"></div>
                    <div className="slide-icon_n"></div>
                    <div className="slide-icon_n"></div>
                    <div className="slide-icon_n"></div>
                    <div className="slide-icon_n"></div>
                </div>
            </div>
            </div>

            <br></br><br></br>

            <div className="menu-home-phone_z">
                {/* <br></br> */}
                <p className="word">NON-VEG MENU</p>
                {/* <br></br> */}
            <div className="slider_z">
                <div className="slide_z active">
                    <img src={chicken_biriyani} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>CHICKEN BIRIYANI</h2>
                    </div>
                </div>
                <div className="slide_z active">
                    <img src={mutton_biriyani} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>MUTTON BIRIYANI</h2>
                    </div>
                </div>
                <div className="slide_z active">
                    <img src={prawn_biriyani} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>PRAWN BIRIYANI</h2>
                    </div>
                </div>
                <div className="slide_z active">
                    <img src={egg_biriyani} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>EGG BIRIYANI</h2>
                    </div>
                </div>
                <div className="slide_z active">
                    <img src={plain_biriyani} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>PLAIN BIRIYANI</h2>
                    </div>
                </div>
                <div className="slide_z active">
                    <img src={chicken_gravy} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>CHICKEN GRAVY</h2>
                    </div>
                </div>
                <div className="slide_z active">
                    <img src={mutton_gravy} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>MUTTON GRAVY</h2>
                    </div>
                </div>
                <div className="slide_z">
                    <img src={crab} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>CRAB GRAVY</h2>
                    </div>
                </div>
                
                <div className="slide_z">
                    <img src={fish} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>FISH FRY</h2>
                    </div>
                </div>
                
                <div className="slide_z">
                    <img src={prawn} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>PRAWN 65</h2>
                    </div>
                </div>
                <div className="slide_z">
                    <img src={chilli} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>CHICKEN 65</h2>
                    </div>
                </div>
                <div className="slide_z">
                    <img src={fishcurry} alt="" className="menu-img-phone_z"></img>
                    <div className="info_z">
                    <h2>FISH CURRY</h2>
                    </div>
                </div>
                <div className="navigation_z">
                    <i className="fa fa-chevron-left prev-btn_z"></i>
                    <i className="fa fa-chevron-right next-btn_z"></i>
                </div>
                <div className="navigation-visibility_z">
                    <div className="slide-icon_z active"></div>
                    <div className="slide-icon_z"></div>
                    <div className="slide-icon_z"></div>
                    <div className="slide-icon_z"></div>
                    <div className="slide-icon_z"></div>
                </div>
            </div>
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
                                <p className="dho">I had approached to take last minute order for my aged parents.They took the order just a day prior and started giving hygienic, tasty and home styled food. The food quantity is sufficiently more, the package comes neatly packed well before the requested time.</p>
                                <p className="theen">Preethi Jayakumar</p>
                            </div>
                            <div class="slide">
                                <p className="ek">Real Value for Money</p>
                                <p className="dho">Best,quality and affordable home style food in Ranipet. I strongly recommended to everyone those who are in or around Ranipet surroundings. Thank you Jerusha Home Foods.</p>
                                <p className="theen">Office Alaparai</p>
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
                                <p className="dho">Affordable and perfect home style food at ranipet .People in and around ranipet approach for best quality of food</p>
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
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default Home;
