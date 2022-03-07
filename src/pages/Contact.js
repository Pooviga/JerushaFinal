import React from "react";
import "./Contact.css"
import Banner from "./Banner"
import Chef from './images/ci.png';
import bgcontact from './images/bg-contact.jpg'
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const Contact = () => {  
    const myStylecontact={
        backgroundImage: `url(${bgcontact})`,
        
    };  
    return (
        <div >
            <div className="box-search-contact" style={myStylecontact}>
           </div>
            <div className="max-w-content w-full mx-auto">
                <div className="caption-contact ">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">CONTACT US - WE'D LOVE TO HEAR FROM YOU</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="TghGHD ">
                <div class="flex-container w-full  max-w-content mx-auto">
                    <div class="flex-item-left">
                        <p className="gHGDiu">CONTACT US</p>
                        <h4 className="UtrwER">Best Food Subscription Boxes</h4>
                        <hr className="agkjajg"></hr>
                        <p className="UIhfGJ">Food Subscription in Ranipet: The primary purpose of our food supply business is to provide fresh, delicious, and nutritious meals on a daily basis at a low cost. We're always looking for new ways to use technology to expand our reach. Our cutting-edge kitchens allow us to make high-quality cuisine in a timely manner.</p>
                        <ul className="HFbvhg">
                            <li className="UTuybvJ"><p className="OUhdfdY">Homemade Food Delivery</p></li>
                            <li className="UTuybvJ"><p className="OUhdfdY">Home Cooked Food</p></li>
                            <li className="UTuybvJ"><p className="OUhdfdY">Vegetarian and Non Vegetarian Food Delivery</p></li>
                            <li className="UTuybvJ"><p className="OUhdfdY">Catering Service</p></li>
                        </ul>
                        <p className="YTRbff">Jerusha Home Foods prepares foods in accordance with the  <b className="UYRBCV">highest standards of hygiene.</b> Clean utensils, clean wipes, clean cutlery, washed vegetables, exhaust, and pest control are all requirements that our Chef adheres to. Our Food Subscription delivery service will pick up your freshly prepared meal from our kitchen and deliver it to your house on time. Subscription meal delivery business Jerusha Foods delivers fresh, healthful meals to your door. Our main goal is to give knowledgeable, pleasant, and friendly service while providing high-quality meals at reasonable costsbest hygiene preparation</p>
                        <p className="IYyteTR"> Food that is of the same high quality as that which is prepared at home. Lunch packages that are flexible and offer a variety of nutritious meal options. It is a perfect everyday alternative for working people because it is delivered to their office or door. Excellent service at a <b className="UYRBCV">reasonable price.</b></p>
                    </div>
                    <div class="flex-item-right">
                   
                        <div><img className="hyYRFGj" src={Chef}></img></div>
                        <div className="HTEnfG">
                            <p className="HjGHBvx">RANIPET</p>
                            <p className="VJhjffD">Home Food</p>
                            <hr className="HFVHGbnc"></hr>
                            <p className="HUTjgkk">Mon-Sat: 11.00AM – 1.00PM</p>
                            <div className="OUghfr"><a className="UYTnbf" href="tel:+919940755521"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill jdfUTjg" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>9940755521</a>
                            
                        </div>
                            <div className="YURHJGi"><a className="UYJGbf" href="mailto:jerushahomefoods@example.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope JHGhgUT" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>jerushahomefoods@gmail.com</a></div>
                            <div className="address"><a className="JHFyrU" href="https://www.google.co.in/maps/place/Jerusha+Home+Foods/@12.9496365,79.3217986,15z/data=!4m5!3m4!1s0x0:0xc8ae0389cb7a0802!8m2!3d12.9496365!4d79.3217986"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt HJFyrG" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>No 188 Thiru Nagar, Ramachandra ITI, opp. Sipcot, Ranipet, Ranipet, Tamil Nadu 632403</a><br></br><br></br>
<hr className="under"></hr> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Contact;