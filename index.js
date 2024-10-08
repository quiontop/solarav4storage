const express = require('express');
const app = express();
const path = require('path');

// Serve the licenses.txt file
app.get('/licenses', (req, res) => {
  res.sendFile(path.join(__dirname, 'licenses.txt'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
