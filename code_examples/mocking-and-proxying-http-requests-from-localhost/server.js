const express = require('express');

const app = express();

app.get('/get-secret-data', (request, response) => {
  response.json({ data: 'secrets from server.js' });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
