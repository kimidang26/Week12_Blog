import express from "express";
// import db from "../db/db-connection.js";
const router = express.Router();

// **********GET REQUEST*******************

router.get('/', async (req, res) => {
  try {
    const restaurant =

      [{ "id": 1, "restaurant_name": "Oyoloo", "date": "08/09/2022", "email": "sheinschke0@tiny.cc", "location": "0685 Pennsylvania Point", "review": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "img": "http://dummyimage.com/174x100.png/cc0000/ffffff" },
      { "id": 2, "restaurant_name": "Mydeo", "date": "04/14/2022", "email": "kcushe1@cloudflare.com", "location": "18 Village Circle", "review": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.", "img": "http://dummyimage.com/149x100.png/ff4444/ffffff" },
      { "id": 3, "restaurant_name": "Meemm", "date": "09/12/2022", "email": "tangelini2@google.it", "location": "9448 Gateway Drive", "review": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.", "img": "http://dummyimage.com/208x100.png/5fa2dd/ffffff" },
      { "id": 4, "restaurant_name": "Kimia", "date": "08/13/2022", "email": "gwoodsford3@vkontakte.ru", "location": "98797 Charing Cross Hill", "review": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "img": "http://dummyimage.com/140x100.png/5fa2dd/ffffff" },
      { "id": 5, "restaurant_name": "Gevee", "date": "01/14/2022", "email": "jlamburne4@opera.com", "location": "693 Forest Dale Place", "review": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "img": "http://dummyimage.com/157x100.png/ff4444/ffffff" }]

    res.send(restaurant);
  } catch (e) {
    return res.status(400).json({ e });
  }
});



export default router;