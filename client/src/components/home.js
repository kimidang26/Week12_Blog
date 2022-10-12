import burntcrumbs from "../images/burntcrumbs.jpeg";
import seafood from "../images/EMC.jpeg";
import sushi from "../images/sushi.JPG";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Home = () => {
  return (
    <section className="images-carousel">
        <Carousel className="main-slide">
                <div>
                    <img src={burntcrumbs} height= "400px" width="100px"/>
                    
                </div>
                <div>
                    <img src={seafood} height= "400px" width="100px" />
                 
                </div>
                <div>
                    <img src={sushi} height= "400px" width="100px"/> 
                  
                </div>
            </Carousel>
    </section>
  );
}

export default Home ;