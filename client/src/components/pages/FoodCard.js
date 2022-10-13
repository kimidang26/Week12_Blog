import Reviews from "./foodreviews.js";
import './FoodCard.css'

const FoodCard = ({ setFoods }) => {
    return (
        <div className="card">
            <div className="card_image"><img src={setFoods.img} alt={setFoods.id} /> </div>
            <br></br>
            <div className="card__title"> {setFoods.restaurant_name} </div>
            <br></br>
            <div className="card__body">
                <div className="card_location">Date: {setFoods.date}</div>
                <div className="card_location">Address: {setFoods.location}</div>
                <br></br>
                <div className="card_review">Review: {setFoods.review}</div>
            </div>
        </div>
    );
};

export default FoodCard;