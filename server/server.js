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
}).on('listening', () => {
  console.log(`Server is listening on port ${PORT}`);
}).on('error', (err) => {
  console.error('Error starting server:', err);
});
