import React from "react";
import "./HomePage.css"
import chapathi from "./images/chapathi.jfif"
import idly from "./images/idli.jfif"
import dosa from "./images/dosa.jpg"
import poori from "./images/poori.png"
import pongal from "./images/pongal.jpg"
import onion from "./images/onion.jpg"
import meals from "./images/meals.jpg"
import plainbriyani from "./images/plain-briyani.png"
import tomato from "./images/tomato-rice.png"
import lime from "./images/lime-rice.jpg"
import tamarind from "./images/tamarind-rice.jpg"
import curd from "./images/curd-rice.jfif"
import vegbriyani from "./images/veg-briyani.jpg"
import ghee from "./images/ghee-rice.jpg"
import kichidi from "./images/kichadi.png"
import chickenbriyani from "./images/chicken-briyani.jpg"
import muttonbriyani from "./images/mutton-briyani.png"
import prawnbriyani from "./images/prawn-briyani.png"
import eggbriyani from "./images/eggbriyani.png"
import chickengravy from "./images/chicken-gravy.jpg"
import prawngravy from "./images/prawngravy.jpg"
import crabgravy from "./images/crabgravy.jpg"
import egggravy from "./images/egggravy.jpg"
import fishcurry from "./images/fishcurry1.png"
import fishfry from "./images/fishfry1.png"
import chicken65 from "./images/chicken65-1.png"
import prawn65 from "./images/prawn65.jpg"
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
                    <img src={pongal} className="menu-img-pongal"></img>
                        <p className="menu-caption-pongal">PONGAL</p>
                    </div>
                    <div class="my-card">
                        <img src={poori} className="menu-img-poori"></img>
                        <p className="menu-caption-poori">POORI</p>
                    </div>
                    <div class="my-card">
                        <img src={dosa} className="menu-img-dosa"></img>
                        <p className="menu-caption-dosa">DOSA</p>
                    </div>
                    <div class="my-card">
                        <img src={idly} className="menu-img-idly"></img>
                        <p className="menu-caption-idly">IDLY</p>
                    </div>
                    <div class="my-card">
                        <img src={chapathi} className="menu-img-chapathi"></img>
                        <p className="menu-caption-chapathi">CHAPATHI</p>
                    </div>
                    <div class="my-card">
                        <img src={onion} className="menu-img-onion"></img>
                        <p className="menu-caption-onion">ONION UTHAPPAM</p>
                    </div>
                    <div class="my-card">
                        <img src={kichidi} className="menu-img-kichidi"></img>
                        <p className="menu-caption-kichidi">KICHIDI</p>
                    </div>
                    <div class="my-card">
                        <img src={meals} className="menu-img-meals"></img>
                        <p className="menu-caption-meals">VEG MEALS</p>
                    </div>
                    <div class="my-card">
                        <img src={plainbriyani} className="menu-img-limerice"></img>
                        <p className="menu-caption-limerice">PLAIN BRIYANI</p>
                    </div>
                    <div class="my-card">
                        <img src={tomato} className="menu-img-tomatorice"></img>
                        <p className="menu-caption-tomatorice">TOMATO RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={lime} className="menu-img-limerice"></img>
                        <p className="menu-caption-limerice">LIME RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={tamarind} className="menu-img-tamarind"></img>
                        <p className="menu-caption-tamarind">TAMARIND RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={curd} className="menu-img-curdrice"></img>
                        <p className="menu-caption-curdrice">CURD RICE</p>
                    </div>
                    <div class="my-card">
                        <img src={vegbriyani} className="menu-img-vegbriyani"></img>
                        <p className="menu-caption-vegbriyani">VEG BRIYANI</p>
                    </div>
                    <div class="my-card">
                        <img src={ghee} className="menu-img-gheerice"></img>
                        <p className="menu-caption-gheerice">GHEE RICE</p>
                    </div>
                </div>
            
            {/* <div style={catStyle} className=""></div> */}
            <hr className="w-full mx-auto max-w-content"></hr>
        
                <div className="w-full mx-auto max-w-content">
                    <p className="menu-title-nv">MENU - NONVEG   </p>
                </div>
            <div className="nv-con mx-auto w-full max-w-content" >
                <div className="card-carouselnv" >
            
                    <div class="my-cardnv">  
                        <img src={chickenbriyani} className="menu-img-chickenbriyani"></img>
                        <p className="menu-caption-chickenbriyani">CHICKEN BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                    <img src={muttonbriyani} className="menu-img-muttonbriyani"></img>
                        <p className="menu-caption-muttonbriyani">MUTTON BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                    <img src={prawnbriyani} className="menu-img-prawnbriyani"></img>
                        <p className="menu-caption-prawnbriyani">PRAWN BRIYANI</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={eggbriyani} className="menu-img-eggbriyani"></img>
                        <p className="menu-caption-eggbriyani">EGG BRIYANI</p>
                    </div>
                    {/* <div class="my-cardnv">
                    <img src={onion} className="menu-img"></img>
                        <p className="menu-caption">PLAIN BRIYANI</p>
                    </div> */}
                    <div class="my-cardnv">
                    <img src={chickengravy} className="menu-img-chickengravy"></img>
                        <p className="menu-caption-chickengravy">CHICKEN GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={prawngravy} className="menu-img-prawngravy"></img>
                        <p className="menu-caption-prawngravy">PRAWN GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={crabgravy} className="menu-img-crabgravy"></img>
                        <p className="menu-caption-crabgravy">CRAB GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={egggravy} className="menu-img-egggravy"></img>
                        <p className="menu-caption-egggravy">EGG GRAVY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={fishcurry} className="menu-img-fishcurry"></img>
                        <p className="menu-caption-fishcurry">FISH KARIKOLAMBU</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={fishfry} className="menu-img-fishfry"></img>
                        <p className="menu-caption-fishfry">FISH FRY</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={chicken65} className="menu-img-chicken65"></img>
                        <p className="menu-caption-chicken65">CHICKEN 65</p>
                    </div>
                    <div class="my-cardnv">
                        <img src={prawn65} className="menu-img-prawn65"></img>
                        <p className="menu-caption-prawn65">PRAWN 65</p>
                    </div>
                </div>
            
            </div>
            </div>
            
            
            
        </div>
    );
};
export default HomePage;