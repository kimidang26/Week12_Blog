import Reviews from "./foodreviews.js";
import './FoodCard.css'


const FoodCard = ({ setFoods }) => {
    return (
        <div className="card">
            <div className="card_image"><img src={setFoods.img} alt={setFoods.id}/> </div>
            <br></br>
            <div className="card__title"><b> {setFoods.restaurant_name}</b> </div>
            <br></br>
            <div className="card__body">
                <div className="card_location"><b>Date:</b> {setFoods.date}</div>
                <div className="card_location"><b>Address:</b> {setFoods.location}</div>
                <br></br>
                <div className="card_review"><b>Review:</b> {setFoods.review}</div>
                
            </div>
        </div>
    );
};

export default FoodCard;