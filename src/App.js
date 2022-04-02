import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import MealsBox from "./pages/MealsBox";
import BreakBox from "./pages/BreakBox";
import DinnerBox from "./pages/DinnerBox";
import VideoTestimonials from "./pages/VideoTestimonials";
import NutritionFoodDelivery from "./pages/NutritionFoodDelivery";
import CateringService from "./pages/CateringService";
import Contact from "./pages/Contact";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { useEffect } from "react";
import $ from 'jquery';
const App = () => {
    useEffect(() =>{
        
            $(document).on('click','.accor >  .head',function(){
                `var closestDiv = $(this).closest('.accor');`
                `closestDiv.find('.body').slideToggle();`
            });
        
    },[])
    const { theme } = useSelector((state) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;
    const spinner = document.getElementById('spinner');

        if (spinner && !spinner.hasAttribute('hidden')) {
        spinner.setAttribute('hidden', 'true');
        }
       
    return (
        
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <Helmet>
                <title>Jerusha</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about-us">
                            <About />
                        </Route>
                        <Route exact path="/vision">
                            <Vision />
                        </Route>
                        <Route exact path="/video_testimonials">
                            <VideoTestimonials />
                        </Route>
                        <Route exact path="/nutrition_food_delivery">
                            <NutritionFoodDelivery />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="/meals_box">
                            <MealsBox />
                        </Route>
                        <Route exact path="/dinner_box">
                            <DinnerBox />
                        </Route>
                        <Route exact path="/break_box">
                            <BreakBox />
                        </Route>
                        <Route exact path="/catering">
                            <CateringService />
                        </Route>
                    </Switch>
                </Layout>
            </>
        </ThemeProvider>
    );
};

export default App;
