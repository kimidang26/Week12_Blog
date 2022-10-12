import { useEffect, useState} from "react";
import FoodCard from "./FoodCard.js";

const Reviews = () => {
    const [foods, setFoods] = useState([]);  


//****************Fetches/Gets Contact Table***********/


useEffect(() => {
  fetch("http://localhost:2026/food")
    .then((response) => response.json())
    .then((data) => {
      setFoods(data);
    });
}, []);
  
  

  return (
     <div className="Food-Review-Card-Deck">
        <h1>My Reviews</h1>
          <div className="blog-cards">
            {foods.map((review,index) => {
              // need a return if you map 
              return (
                <FoodCard setFoods={review} key={index}/>


                    // <div className="card-1">
                    //     <div className="card-body">
                    //         <p> {review.img}</p>
                    //         <h5 className="card-title">{review.restaurant_name}</h5>
                    //         <p className="card-text">{review.date}</p>
                    //         <p className="card-text">{review.location}</p>
                    //      </div>
                    // </div>
              );
            })}
          </div>
    </div>
  );
}

export default Reviews;