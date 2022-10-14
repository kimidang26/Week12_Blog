import express from "express";
import db from "../db/db-connections.js"
const router = express.Router();
import cors from "cors"; 
import * as dotenv from 'dotenv'; dotenv.config();

// **********GET REQUEST*******************
router.get('/', async (req, res) => {
    try {
      const newcontact = await db.query('SELECT * FROM newsubscribers ORDER BY id');
      res.json(newcontact);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
      
    }
  });

    // ***********************create the POST request (update)****************************
    router.post('/', async (req, res) => {
        const newSubscriber = {
          // id: req.params.id,
          firstname: req.body.firstname,
          email: req.body.email,
        }
        console.log([newSubscriber.firstname, newSubscriber.email ]);
        try {
        const addSubscriber = await db.query(
            //change the table name after into!!
          'INSERT INTO newsubscribers ( firstname, email) VALUES($1, $2) RETURNING *',
          [ newSubscriber.firstname, newSubscriber.email],
        );
        console.log(req.body);
        res.send(addSubscriber);
        } catch (e) {
          console.log(e.message);
          return res.status(400).json({ e });
        }
      });

  export default router;