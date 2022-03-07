import React from "react";
import "./Footer.css"
import zomato from './images/zomato.png'
import swiggy from './images/swiggy.png'

const Footer = () => {
    return (
        <div className="mapp">
            <div className="flex-div max-w-content mx-auto w-full">
                <div className="flex-div-left">
                    <div className="flex-item-left_">
                        <p class="gHGDiu_">CALL US</p>  
                    </div>
                    <p className="phn">9900998877 , 8877665544</p>
                    <div className="flexing">
                        <svg className="iconss" xmlns="http://www.w3.org/2000/svg" font-weight="lighter" width="60" height="60" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        <div>
                            <h3 className="foot-head">SERVE TIMING</h3>
                            <hr className="line"></hr>
                            <div classname="pg">
                                <p className="parah">Lunch Serve Time</p>
                                <p className="parah">Monday -Saturday: 11.30AM – 1.00PM</p>
                                <p className="parah">Dinner Serve Time</p>
                                <p className="parah">Monday -Saturday: 6.00PM – 7.30PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="flexing-apps">
                        <div className="flex-cont-foot">
                            <div className="zomato-cont">
                                    <a href="fg" className=""><img className="zomato-foot" src={zomato}></img></a>
                            </div>
                            <div className="swiggy-cont">
                                    <a href="" >
                                        <img className="swiggy-foot" src={swiggy}></img>
                                    </a>
                            </div>
                        </div>
                    </div>
                        
                      
                    {/* <div className="flexing">
                    <svg className="iconss" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <div>
                            <h3 className="foot-head">PRODUCTION UNIT</h3>
                            <hr className="line"></hr>
                            <div classname="pg">
                                <p className="parah">Lunch Serve Time</p>
                                <p className="parah">Monday -Saturday: 11.30AM – 1.00PM</p>
                                <p className="parah">Dinner Serve Time</p>
                                <p className="parah">Monday -Saturday: 6.00PM – 7.30PM</p>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="flex-div-right">
                <p className="mapfull"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.38782379031!2d79.3217986!3d12.9496365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc8ae0389cb7a0802!2sJerusha%20Home%20Foods!5e0!3m2!1sen!2sin!4v1644937148846!5m2!1sen!2sin" height="450" width="650"  allowfullscreen="" loading="lazy"></iframe></p>
                <p className="maps"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.38782379031!2d79.3217986!3d12.9496365!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc8ae0389cb7a0802!2sJerusha%20Home%20Foods!5e0!3m2!1sen!2sin!4v1644937148846!5m2!1sen!2sin" height="350" width="100%"  allowfullscreen="" loading="lazy"></iframe></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;