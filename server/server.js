const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));
  

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Received GET request to /');
  res.send('Welcome to my Express server!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}`);
});
app.on('listening', () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});