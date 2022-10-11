import { useReducer , useEffect, useState} from "react";

const Reviews = () => {
    const [foods, setFoods] = useState([]);  


//****************Fetches/Gets Contact Table***********/

const getReviews = async () => {
    const response = await fetch('http://localhost:2026/food');
    const foods = await response.json();
    setFoods(foods);
  };
  
  useEffect(() => {
    getReviews();
  }, []);
  
  

  return (
    <div className="Food-Review-Page">
        <h1>My Reviews</h1>
            {foods.map((review) => {
            
              return (
                <div>
                  <p>{review.id}</p>
                  <p>{review.restaurant_name}</p>
                  <p>{review.date}</p>
                  <p>{review.location}</p>
                  <p>{review.img}</p>
                  <p>{review.student_id}</p>
             </div>
              
              );
            })}

    </div>
  );
}

export default Reviews;