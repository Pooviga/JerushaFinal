import React, { useEffect } from "react";
import "./Vision.css";
import video from './images/videotest1.mp4';
import "./VideoTestimonials.css";
import bgvision from './images/bg-video.jpg';
import logo from './images/gold.png';


const VideoTestimonials = () => {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)
      }, [])
    const myStylevideo={
        backgroundImage: `url(${bgvision})`,
        
    };  
    useEffect(() => {    
        document.title = "Jerusha | Video";
    });
    return (
        <div>
            <div>
            <div className="box-search-video" style={myStylevideo}></div>
            <div class=" max-w-content w-full mx-auto">
                <div class="caption-video ">
                    <p className="home-title">JERUSHA HOME FOODS</p>
                    <p className="home-contact">HOME COOKED MEAL-CUSTOMER REVIEWS</p>
                    <hr className="hrbanner"></hr>
                </div>
            </div>
            <div className="space-video max-w-content mx-auto w-full">
                <div class="container">
                    <div class="column column-two">
                        <div className="x" id="sliceX2">
                            <a href={video} target="_blank" className="videotest"><video className="videos" poster={logo}></video>
                            <div className="play-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
                            </div>
                            </a>
                        </div>
                        <div className="x" id="sliceX2">
                            <a href={video} target="_blank"><video className="videos" poster="//s3-us-west-2.amazonaws.com/s.cdpn.io/3174/poster.png"></video>
                            <div className="play-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
                            </div>
                            </a>
                        </div>
                        <div className="x" id="sliceX2">
                            <a href={video} target="_blank"><video className="videos" poster="//s3-us-west-2.amazonaws.com/s.cdpn.io/3174/poster.png"></video>
                            <div className="play-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
</svg>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
    
            </div>
           
        </div>
        
        </div>
    );
};

export default VideoTestimonials;