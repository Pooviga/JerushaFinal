import React, { useEffect } from "react";
import "./CateringService.css"
import Banner from "./Banner"
import foodimg from './images/food.jfif';
import wedcatering from './images/wed-catering.jpg'
import bgcatering from './images/bg-catering.jpg'

const CateringService = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])
    
      const catStyle={
        backgroundImage: 
 `url(${foodimg})`,
    };
    const myStylecatering={
        backgroundImage: `url(${bgcatering})`,
        
    };  
    return (
        <div>
             <div className="box-search-catering" style={myStylecatering}></div>
            <div className="max-w-content w-full mx-auto">
                <div className="caption-contact ">
                    <p className="home-title">JERUSHA CATERING SERVICE</p>
                    <p className="home-contact">CATERING SERVICE - DELECTABLE AND APPEALING DISHES</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="catsplit w-full mx-auto max-w-content">
                <div className="catsplit-left">
                    <div className="cat-div-one">
                        <p className="catering-caption">JERUSHA CATERING SERVICE</p>
                        <p className="catering-head">Wedding Catering Service</p>
                        <hr className="hr-catering"></hr>
                        <p className="catering-para-one"><b>Wedding Catering:</b> Every occasion is special, however when it comes to weddings, there are many different types of events such as engagements, Mehandis, and so on. Jerusha  catering services ensure that you enjoy your wedding day with zeal, remembering our taste in every bud of joyous movement. We can assist you in making your wedding function more elegant and full of celebration bashes than ever before. For all wedding celebrations, we organise <b className="cat-bold">delectable and appealing dishes.</b> Though we will present with full-heart that reminds Jerusha catering recipes at every taste bud, we will primarily focus on making your special occasion as lifetime memories by providing delicious homemade food and the way, we will present with full-heart that reminds Jerusha catering recipes at every taste bud.</p>
                    </div>
                </div>
                <div className="catsplit-right ">
                    <div class="containernutrition">
                            <img src={wedcatering} alt="Snow" className="vegetables"></img>
                            <div class="bottom-left-nut">
                                <p className="img-nut-cap">Jerusha Catering Service</p>
                                <p className="img-nut-cap2">Wedding Catering</p>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <div style={catStyle} className="w-full mx-auto max-w-content"></div> */}
            <hr className="hrcat mx-auto max-w-content"></hr>
            <div className="catsplit-two w-full mx-auto max-w-content">
                <div className="catsplit-left-two">
                    <div class="containernutrition-two">
                        
                                <img src={wedcatering} alt="Snow" className="vegetables-two"></img>
                                <div class="bottom-left-nut-two">
                                    <p className="img-nut-cap-two">Jerusha Catering Service</p>
                                    <p className="img-nut-cap2-two">Party Catering</p>
                                </div>
                            </div>
                    </div>
                <div className="catsplit-right-two">
                    <div className="cat-div-two">
                        <p className="catering-head">Party Catering Service</p>
                        <hr className="hr-catering"></hr>
                        <p className="catering-para-one"><b>Party Catering:</b> The perfect blend of fun and cuisine is party catering. For parents, friends, and relatives, it is always a wonderful occasion. We fully get this and provide a beguiling array of services to enhance the joy of a memorable occasion. Jerusha Catering, we provide a fully <b className="cat-bold">personalised service</b> to meet your specific needs and preferences. "Great food brings events to life." We maintain standards and ensure that health and hygiene are maintained at every stage of our service. Not only elders, but also children, can enjoy the birthday party to the utmost with our delectable foods, as per the customer's request. It is our obligation to rock your birthday bash and leave your guests speechless.</p>
                    </div>
                </div>
            </div>
            
            {/* <div style={catStyle} className="w-full mx-auto max-w-content"></div>
            <div className="catsplit w-full mx-auto max-w-content">
                <div className="catsplit-left">
                    <div className="cat-div-one">
                        <p className="catering-caption">JERUSHA HOME FOODS</p>
                        <p className="catering-head">Best Catering Service</p>
                        <hr className="hr-catering"></hr>
                        <p className="catering-para-one">Catering Service: Atchayapathra’s catering service in Madurai. Being the best caterer, we provide an excellent service in catering for all events and functions. for We always strives to make your corporate event the best it can be with generous portions of fresh, innovative recipes at fair price. Always presented to your preference and always served and delivered on time. Go through our extensive menu to choose from all the variety of delicious foods.A corporate event is any form of event, hospitality, or social activity which is organized or funded by a business entity. Such an event may include Employees, Board members, Stakeholders, Customers/clients, Potential and future clients.</p>
                        <p className="catering-para-one">We understand that these events are organized for varied reasons. Your organization may want to educate, reward, motivate, celebrate, mark key milestones, manage organizational change, or encourage collaboration. Whatever the reason, there is a solution in the name of event.</p>
                    </div>
                </div>
                <div className="catsplit-right ">
                    <img src={foodimg} className="catering-img"></img>
                </div> 
            </div>*/}
        </div>
    );
};

export default CateringService;