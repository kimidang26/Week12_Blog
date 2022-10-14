import { useReducer ,useEffect, useState} from "react";
import FoodCard from "./FoodCard.js";
import React from "react";
import "./foodreview.css";

//to add in a new food blog post
const reducer = (state, action) =>{
  console.log(action, 'this is the action');
  switch(action.type) {
      case 'editId' :
          console.log('Logged if the editId action is being dispatched')
          return { ...state, id: action.payload };

      case 'editImg':
      return { ...state, img: action.payload };

      case 'editRestaurant_name':
      return { ...state, restaurant_name: action.payload };

      case 'editDate':
      return { ...state, date: action.payload };

      case 'editLocation':
      return { ...state, location: action.payload };

      case 'editReview':
      return { ...state, review: action.payload };

      case 'clearForm':
          return {
              img: "", 
              restaurant_name: "", 
              date:"", 
              location: "",
              review: "",
          };

    default:
      return state;
  }
};

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


// ********USE REDUCER PT 2 WITH EVENT HANDLER**********
//Inital state of the form is empty
const initialState = {
  img: "", 
  restaurant_name: "", 
  date:"", 
  location: "",
  review: "",

};

const [state, dispatch] = useReducer(reducer, initialState);
console.log(state);

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
  

//**********POST REQUEST (ADD NEW CONTACT)**********/
const handleAddBlog = async (e) => {
  e.preventDefault();
  const newBlog = {
    // id: req.params.id,
    img: state.img,
    restaurant_name: state.restaurant_name,
    date: state.date,
    location: state.location,
    review: state.review,
  }
  //DATA FROM USER
  console.log(newBlog);

  const response = await fetch('http://localhost:2026/food', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
  });
  const content = await response.json();
  //DATA FROM SERVER
  console.log(content);
  //CONTENT CREATES A NEW ARRAY DOES A FULL REPLACEMENT OF THE BLOG
  //... PULLS ONLY VALUES FROM OLD ARRAY AND WILL ADD TO NEW ARRAY
  setFoods([...foods, ...content]);
  dispatch({ type: 'clearForm' })
};
  

  return (
     <div className="Food-Review-Card-Deck">
        <h1>Recent Posts</h1>
          <div className="Search-filter">
            <h6>Search by Restaurant Name</h6>
            <input className="search-box" placeholder="search restaurant name" onInput = {filterReview}/>
          </div>
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
          <div className="AddBlog">
            <h3>Add A New Blog</h3>
            <form id="add-review" className="form-review" action="#" onSubmit={handleAddBlog}>
              <fieldset>
                <label>Restaurant Name:</label>
                  <input type="text" id="editRestaurant_name" name="restaurant_name" placeholder="Kickin' Crab" value={state.restaurant_name} onChange={(e) => dispatch({type: "editRestaurant_name", payload: e.target.value,})} />
                  <br />
                <label>Date:</label>
                  <input type="date" id="editDate" name="date" placeholder="date" value={state.date} onChange={(e) => dispatch({type: "editDate", payload: e.target.value,})} />
                  <br />
                <label>Location:</label>
                  <input type="text" id="editLocation" name="location" placeholder="123 Apple St" value={state.location} onChange={(e) => dispatch({type: "editLocation", payload: e.target.value,})} />
                  <br />
                <label>Review:</label>
                  <input type="text" id="editReview" name="post" placeholder="Write Blog Here" value={state.review} onChange={(e) => dispatch({type: "editReview", payload: e.target.value,})} />
                  <br/>
                <label>Insert Image URL:</label>
                  <input type="url" id="editImg" name="img" placeholder="Place Img URL" value={state.img} onChange={(e) => dispatch({type: "editImg", payload: e.target.value,})} />
                  <br/>
              </fieldset>
                <input type="submit" value="Add Blog Post" />
            </form>
         </div>      

    </div>
  );
}

export default Reviews;