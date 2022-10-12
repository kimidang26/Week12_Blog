import { useEffect, useState} from "react";

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
    
    <div className="Food-Review-Card-Deck">
        <h1>My Reviews</h1>
            {foods.map((review, index) => {
            
              return (
                <div>
                    <div className="card-1">
                        <div className="card-body">
                            <p> {review.img}</p>
                            <h5 className="card-title">{review.restaurant_name}</h5>
                            <p className="card-text">{review.date}</p>
                            <p className="card-text">{review.location}</p>
                         </div>
                    </div>
             </div>
              
              );
            })}

    </div>
  );
}

export default Reviews;