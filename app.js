const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');
const adminRouter = require('./router/adminRouter');
const Dbconnection = require('./config/dataBase');
require('dotenv').config();

Dbconnection();


const corsOptions = {
  origin: ('http://localhost:5173'),
};
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
