import React, { useEffect } from "react";
import "./Box.css"
import spices from "./images/break.jpg";
import bgvision from "./images/bg-break.jpeg"
import Helmet from "react-helmet";
import breaks from "./images/din2.png"

const BreakBox = () => {    
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])
      const myStylevideo={
        backgroundImage: `url(${bgvision})`,
        
    }; 
    useEffect(() => {    
        document.title = "Jerusha | BreakBox";
    });
    return (
        <div >
            <Helmet>
                <title>Break Box</title>
            </Helmet>
            <div className="box-search-vision" style={myStylevideo}>
            </div>
            <div class="max-w-content w-full mx-auto">
                <div class="caption-vision">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">WEEKLY MONTHLY SUBSCRIPTION / HOME </p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="boxsplit max-w-content w-full mx-auto">
                <div className="boxsplit-left">
                    <p className="top">Traditional South Indian Breakfast</p>
                    <p className="f_t">#1 Breakfast Subscription Food Delivery Service</p>
                    <p className="parah1">“Enjoyable Variety of Evolving Healthy Menu”</p>
                    <p className="s_t">No Time to Cook? Try Our Delicious Breakfast Today!</p>
                    <hr className="hrmeals"></hr>
                    <img className="img1" src= {spices}></img>
                    <p className="parah3">Because of our hurried and stressful lives, we are unable to keep track of what we eat, and hence fail to achieve an ideal balanced diet for ourselves. As a result, everyone should start their day with a <b className="bold"> nutritious breakfast</b>. In today's environment, not everyone has enough time to prepare a variety of nutritious meals. This seed of an idea lead us to launch <b className="bold">"Break Box"</b> a homemade and nutrition-based food delivery service to your doorstep.
                    </p>

                    <p className="tit-box">Are Your Seeking Tasty Homemade Food for Breakfast</p>
                    <hr className="hrmeals-break"></hr>
                    {/* <img className="img2" src= {art}></img> */}
                    <p className="parah3"> <b className="bold">Jerusha Foods</b> cater to a homemade  <b className="bold">breakfast subscription 
                    pack</b> called  <b className="bold">“Break Box“.</b> The main aim of this service is people looking for healthy breakfast
                    for a day as per your requirements. That’s why we deliver a healthy and tasty breakfast
                    that gives you the great nutrition you need to tackle even the toughest day. Our chef genuinely
                    enjoys the whole process of procuring, preparing, cooking, and serving food. Atchayapathra’s <b className="bold">highly 
                    experienced chef</b> is an expert in giving directions to his team and maintains an amicable atmosphere.</p>
{/* 
                    <p className="parah3">Meals are made up of <b className="bold">fresh vegetables</b> to ensure the best taste and nutrition
                     in every bite. We reach out to local farms to bring <b>delicious farm-fresh food</b> to your table. Our 
                     environmentally friendly and inventive packaging boxes guarantee the freshness of food without compromising 
                     on the experience of indulging in South-Indian cuisine.</p> */}
                   
                   

                </div>
                <div className="boxsplit-right">
                    {/* <p className="top_r">DINNERBOX SUBSCRIPTION PLANS</p>
                    <img className="logo" src= {logo}></img> */}
                    
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
                                <td className="th-meals">Poori ( 3 Piece)</td>
                                <td className="th-meals">&#8377; 50.00</td>
                            </tr>
                            <tr>
                                <td className="th-meals">Pongal</td>
                                <td className="th-meals">&#8377; 50.00</td>
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
                            <tr>
                                <td className="th-meals">Vegetable Upma</td>
                                <td className="th-meals">&#8377; 50.00</td>
                            </tr>
                        </table>
                    </div>
                    {/* <img className="menuchart" src= {menuchart}></img> */}
                    <p className="t2">We Feed Nutritious Food With Strict Safety</p>
                    <hr className="hrmeals-break-sec"></hr>

                    {/* <img className="vege" src= {vege}></img> */}

                    <p className="parah2">Jerusha Foods provides packaged food that is <b className="bold">clean and safe</b>.
                                        Our packaging protects the quality of the food and its flavours, which attract customers.
                                        As a result, our foods are free of contamination and help to extend food shelf life.
                                        Our packaging method and style help us stand out from other similar products on the market.
                                        We also employ packaging machines that provide complete safety and cleanliness.
                                       <b className="bold">Start Your Healthy Journey Now!</b>
                    </p>
                    <p className="parah2">
                        Do you wish you could keep things easy and have a healthy breakfast delivered to your house or workplace?
                        Don't be concerned; we've got you covered! Call us today if you need a <b className="bold">healthy vegetarian breakfast in 
                        Ranipet,</b> and we'll assist you enjoy a better nutrition meal experience. Our delivery crew will pick
                        up your freshly prepared dinner from our kitchen and deliver it to your house on time.

                    </p>
                    <p className="parah2">
                        
                        A happier lifestyle is associated with the decisions we make to live a healthy existence. One of your first 
                        steps toward a better living could be selecting <b>"Break Box."</b> Our meals are designed with our customers'
                        preferences in mind.
                    </p>
                                        {/* <img className="img8" src= {breaks}></img> */}
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

export default BreakBox;