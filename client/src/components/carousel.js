import burntcrumbs from "../images/burntcrumbs.jpeg";
import seafood from "../images/EMC.jpeg";
import sushi from "../images/sushi.JPG";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const IndividualIntervalsExample = () => {
  return (
    <section className="images-carousel">
        <Carousel>
                <div>
                    <img src={burntcrumbs} />
                    
                </div>
                <div>
                    <img src={seafood} />
                 
                </div>
                <div>
                    <img src={sushi} /> 
                  
                </div>
            </Carousel>
    </section>
  );
}

export default IndividualIntervalsExample;