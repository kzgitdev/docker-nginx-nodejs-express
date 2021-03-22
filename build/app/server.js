'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '192.168.11.33';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

//app.listen(PORT, HOST);
app.listen(3000, '0.0.0.0');
console.log(`Running on http://${HOST}:${PORT}`);
