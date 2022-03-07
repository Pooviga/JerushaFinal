import React from "react";
import {  STitle } from "./styles";
import Banner from "../../pages/Banner";
import { Helmet } from "react-helmet";
import "./HomePage.css"
import chapathi from "./images/chapathi.png"
import idly from "./images/idly.png"
import dosa from "./images/dosa.png"
import poori from "./images/poori.png"
import pongal from "./images/pongal.png"
import onion from "./images/onion.png"
import $ from 'jquery';
const HomePage = () => {
    const catStyle={
        backgroundImage: 
 `url(${dosa})`,
        filter:'brightness(50%)',
        height:'60vh',
        width:'100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:'fixed',
        
        '@media (max-width: 768px)': {
            height:'30vh',    
        },
    };
    return (
        
        <div className="menu-display-home">
            
            
                <div className="w-full mx-auto max-w-content">
                    <p className="menu-title">MENU - VEG   </p>
                </div>
           
            <div className="menu-cont">
                <div class="card-carousel w-full mx-auto max-w-content">
                
                    <div class="my-card">
                    <img src={pongal} className="menu-img"></img>
                        <p className="menu-caption">PONGAL</p>
                    </div>
                    <div class="my-card">
                        <img src={poori} className="menu-img"></img>
                        <p className="menu-caption">POORI</p>
                    </div>
                    <div class="my-card">
                        <img src={dosa} className="menu-img"></img>
                        <p className="menu-caption">DOSA</p>
                    </div>
                    <div class="my-card">
                        <img src={idly} className="menu-img"></img>
                        <p className="menu-caption">IDLY</p>
                    </div>
                    <div class="my-card">
                        <img src={chapathi} className="menu-img"></img>
                        <p className="menu-caption">CHAPATHI</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">ONION UTHAPPAM</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">KICHIDI</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">VEG MEALS</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">PLAIN BRIYANI</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">TOMATO RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">LIME RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">TAMARIND RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">CURD RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">VEG BRIYANI</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">GHEE RICE</p>
                    </div>

                        ...
                </div>
            
            {/* <div style={catStyle} className=""></div> */}
            <hr className="w-full mx-auto max-w-content"></hr>
        
                <div className="w-full mx-auto max-w-content">
                    <p className="menu-title-nv">MENU - NONVEG   </p>
                </div>
            <div className="nv-con mx-auto w-full max-w-content" >
                <div className="card-carouselnv" >
            
                    <div class="my-cardnv">  
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">CHICKEN BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                    <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">MUTTON BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                    <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">PRAWN BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">EGG BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                    <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">PLAIN BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                    <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">CHICKEN GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">PRAWN GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">CARB GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">EGG GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">FISH KARIKOLAMBU</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">FISH FRY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">CHICKEN 65</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">PRAWN 65</p>
                    </div>
                </div>
            
            </div>
            </div>
            
            
            
        </div>
    );
};
export default HomePage;