import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body –

//import routes from db but mockdata rn
import foodRouter from "./routes/foodplace.js"


const app = express();
const PORT = 2026;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/food', foodRouter);



app.get('/', (req, res) => {
  res.json({ message: 'student contact list' });
});

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));
