import express from "express";
import db from "../db/db-connections.js"
const router = express.Router();
import cors from "cors"; 
import * as dotenv from 'dotenv'; dotenv.config();

// **********GET REQUEST*******************

// // THIS IS THE MOCK DATA
// router.get('/', async (req, res) => {
//   try {
//     const restaurant =

//       [{ "id": 1, "restaurant_name": "Oyoloo", "date": "08/09/2022", "location": "0685 Pennsylvania Point", "review": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "img": "http://dummyimage.com/174x100.png/cc0000/ffffff" },
//       { "id": 2, "restaurant_name": "Mydeo", "date": "04/14/2022", "location": "18 Village Circle", "review": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.", "img": "http://dummyimage.com/149x100.png/ff4444/ffffff" },
//       { "id": 3, "restaurant_name": "Meemm", "date": "09/12/2022",  "location": "9448 Gateway Drive", "review": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "img": "http://dummyimage.com/208x100.png/5fa2dd/ffffff" },
//       { "id": 4, "restaurant_name": "Kimia", "date": "08/13/2022", "location": "98797 Charing Cross Hill", "review": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "img": "http://dummyimage.com/140x100.png/5fa2dd/ffffff" },
//       { "id": 5, "restaurant_name": "Gevee", "date": "01/14/2022",  "location": "693 Forest Dale Place", "review": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "img": "http://dummyimage.com/157x100.png/ff4444/ffffff" }]

//     res.send(restaurant);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const review = await db.query('SELECT * FROM reviews ORDER BY id');
    res.send(review);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
    
  }
});

  // ***********************create the POST request (update)****************************
  router.post('/', async (req, res) => {
    const newBlog = {
      // id: req.params.id,
      img: req.body.img,
      restaurant_name: req.body.restaurant_name,
      date: req.body.date,
      location: req.body.location,
      review: req.body.review,
      
 
  
    }
    console.log([newBlog.id, newBlog.img, newBlog.restaurant_name, newBlog.date, newBlog.location, newBlog.review ]);
    try {
    const addBlog = await db.query(
      'INSERT INTO reviews ( img, restaurant_name, date, location, review) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [ newBlog.img, newBlog.restaurant_name, newBlog.date , newBlog.location, newBlog.review ],
    );
    console.log(req.body);
    res.send(addBlog);
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({ e });
    }
  });

export default router;