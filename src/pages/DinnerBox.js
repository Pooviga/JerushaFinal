import React, { useEffect } from "react";
import "./Box.css"
import spices from "./images/spices1.jpg";
import bgvision from "./images/bg-dinner.jpg"

const DinnerBox = () => { 
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])  
      const myStylevideo={
        backgroundImage: `url(${bgvision})`,
        
    }; 
    useEffect(() => {    
        document.title = "Jerusha | DinnerBox";
    });
    return (
        <div >
            <div className="box-search-vision" style={myStylevideo}>
            </div>
            <div class="max-w-content w-full mx-auto">
                <div class="caption-vision">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">SUBSCRIPTION SERVICE FOR DINNERBOX</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="boxsplit max-w-content w-full mx-auto">
                <div className="boxsplit-left">
                    <p className="top"> Subscription Dinner Box</p>
                    <p className="f_t">Dinner Box</p>
                    <p className="parah1">“Dining made smoother and more enjoyable with exciting varieties.”</p>
                    <p className="s_t">Why Dinner Is Important?</p>
                    <hr className="hrmeals"></hr>
                    <img className="img1" src= {spices}></img>
                    <p className="parah3">
                          We all want our families to be happy and healthy, but it's possible that we're overlooking the most crucial part of the day. According to Harvard Health mental and physical health specialists, regular family dinners may be the most effective approach to help youngsters stay healthy and happy. After a long and exhausting day, a nutritious vegetarian meal is surprisingly fulfilling. Going to bed on an empty stomach, or getting up with an unbalanced physique, is not pleasant for most individuals. According to study, when families eat together, they eat more vegetables and fruits and less fried meals, soda, and trans fat items. When children eat dinner with their families frequently, they are less likely to be overweight than other children.
                    </p>
                    {/* <img className="img2" src= {art}></img> */}
                    {/* <p className="parah2">It is no mystery that what people eat has an effect on their daily physical and mental health. When people keep themselves
                         well-nourished, they can participate more fully and effectively in a wide variety of activities.</p> */}

                    
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
                    <p className="t2">Ranipet Dinner Delivery Service</p>

                    <p className="parah2">As dinner is such an essential meal of the day, we provide prompt food delivery to your door. Food is the source of your energy. Dinner food raises your blood sugar levels in the middle of the day, allowing you to concentrate for the remainder of the evening. It has been demonstrated that persons who skip dinner develop more weight as a result of overeating at lunch to compensate missed dinner.</p>
                   
                    <p className="parah2">Our DinnerBox Subscription menu encompasses a complete, wholesome, nourishing and yummy South Indian traditional foods such as Idly, Dosai,
                     Uthappam, Idiyappam etc.</p>
                    
                    {/* <img className="img9" src= {dinner}></img> */}
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