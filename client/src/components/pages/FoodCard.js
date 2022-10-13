import Reviews from "./foodreviews.js";
import './FoodCard.css'

const FoodCard = ({setFoods}) => {
    return(
        <div className="card">
            <div className ="card_image"><img src={setFoods.img} alt={setFoods.id} /> </div>
            <div className="card__title"> {setFoods.restaurant_name} </div>
           <div className="card__body">
                <div className ="card_location">{setFoods.date}</div>
                 <div className ="card_location">{setFoods.location}</div>
                 <div className ="card_review">{setFoods.review}</div>
                
           </div>
            
        </div> 
    );
};

export default FoodCard;