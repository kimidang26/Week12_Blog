import express from "express";
// import db from "../db/db-connection.js";
const router = express.Router();

// **********GET REQUEST*******************

router.get('/', async (req, res) => {
    try {
      const restaurant = [
        {
          "id": 1,
          "restaurant_name": "Hako",
          "date": "2022-01-01",
          "location": "4790 Irvine Blvd Ste 103 Irvine, CA 92620",
          "img":"pic1"
      
          },
          {
            "id": 2,
            "restaurant_name": "Mokkoji",
            "date": "2022-01-01",
            "location": "4790 Irvine Blvd Ste 103 Irvine, CA 92620",
            "img":"pic1"
          },
          {
            "id": 3,
            "restaurant_name": "Burnt Crumbs",
            "date": "2022-01-01",
            "location": "4790 Irvine Blvd Ste 103 Irvine, CA 92620",
            "img":"pic1"
          },
          {
            "id": 4,
            "restaurant_name": "Hako",
            "date": "2022-01-01",
            "location": "4790 Irvine Blvd Ste 103 Irvine, CA 92620",
            "img":"pic1"
          },
          {
            "id": 5,
            "restaurant_name": "Tomikawa",
            "date": "2022-01-01",
            "location": "4790 Irvine Blvd Ste 103 Irvine, CA 92620",
            "img":"pic1"
          }
      ];
      res.send(restaurant);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



export default router;