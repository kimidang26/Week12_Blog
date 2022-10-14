import Reviews from "./foodreviews.js";
import './FoodCard.css'


const FoodCard = ({ setFoods, editBlog, deleteBlog }) => {
    // console.log(setFoods.id,"id-supriya")
    return (
        <div className="card">
            <div className="card_image"><img src={setFoods.img} alt={setFoods.id}/> </div>
            <br></br>
            <div className="card__body">
                <div className="card__title"><b> {setFoods.restaurant_name}</b> </div>
                <br></br>
                    <div className="paragraph-body">
                        <div className="card_location"><b>Date:</b> {setFoods.date.toString().slice(0,10)}</div>
                        <div className="card_location"><b>Address:</b> {setFoods.location}</div>
                        <br></br>
                        <div className="card_review"><b>Review:</b> {setFoods.review}</div>
                    </div>
                <button onClick={() => editBlog(setFoods)}>Edit </button>
                <button onClick={() => deleteBlog(setFoods.id)}>DELETE</button>
            </div>
           
        </div>
    );
};

export default FoodCard;