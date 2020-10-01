const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

let port = process.env.PORT || 9000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//IMPORT ROUTES
const foodRoute = require('./routes/food');

//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log('Conected to db')
);

app.use('/food', foodRoute);

//LISTENER
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
