import { useEffect, useState} from "react";
import FoodCard from "./FoodCard.js";

const Reviews = () => {
    const [foods, setFoods] = useState([]);  

    //for search bar
    const [allReviews, setAllReviews] = useState([]);  

//****************Fetches/Gets Contact Table***********/


useEffect(() => {
  fetch("http://localhost:2026/food")
    .then((response) => response.json())
    .then((data) => {
      setAllReviews(data);
      setFoods(data);
    });
}, []);


// ************Filter Cards/Search*************

const filterReview = event => {
  console.log(event.target.value ); 
  const value = event.target.value.toLowerCase(); 
  const filteredReviews = allReviews.filter(
    food => (`${food.restaurant_name}`
    .toLowerCase()
    .includes(value)
    )
  );

  setFoods(filteredReviews)
};
  
  

  return (
     <div className="Food-Review-Card-Deck">
        <h1>My Reviews</h1>
          <input className="search-box" placeholder="search restaurant name" onInput = {filterReview}/>
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