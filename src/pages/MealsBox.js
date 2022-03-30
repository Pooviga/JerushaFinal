import React, { useEffect } from "react";
import "./Box.css"
import spices from "./images/spices.jpg";
import logo from "./images/mealbox_logo.jpg";
import bgvision from "./images/bg-meals.jpeg"

const MealsBox = () => {  
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])  
    const myStylevideo={
        backgroundImage: `url(${bgvision})`,
        
    }; 
    useEffect(() => {    
        document.title = "Jerusha | MealsBox";
    });
    return (
        <div >
            <div className="box-search-vision" style={myStylevideo}>
           </div>
            <div class="max-w-content w-full mx-auto">
                <div class="caption-vision">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">RANIPET'S #1 BEST MEALBOX SERVICES AT LOW COST</p>
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
                    <p className="parah3">On a monthly basis, food is delivered. Lunch that is excellent for you on a regular basis Box was designed with your requirements in mind. We've seen you before. We recognise that you work 12-hour shifts and require home-cooked breakfast, lunch, and dinner. We're familiar with your hectic work schedule, deadlines, conference calls, and countless business meetings. To put it another way, to get through it all, you'll need superhuman strength. When you think of strength, the first thing that comes to mind is undoubtedly food. Yes, you may order a healthy food subscription.
                    </p>
                    {/* <img className="img2" src= {art}></img>             */}

                    {/* <p className="parah2">But who has the time to prepare such a meal? In the rush of morning you just have to 
                    pack whatever food that’s available to you and fret through work. Buying hotel food is an option but it is
                     definitely not a healthy option.  This is where we come in. We offer healthy home food delivery service and
                      wholesome food that can satiate your hunger and also take care of your nutrient requirements all at once. 
                      Sounds amazing isn’t it? We present you, Subscription Meals Box!</p> */}

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
                    <p className="t2">Monthly Food Delivery in Ranipet</p>
                    <p className="parah2">We've got you covered with our Lunch Delivery Box. Traditional South Indian Lunch is featured in this box. Employees can choose from more than 250 varieties of rice. This nutritious lunch box is presented in a beautiful Lunch Box that is equally pleasing to the eye. Jerusha Foods Catering Service delivers vegetarian meals to your house or business on a regular basis.</p>
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