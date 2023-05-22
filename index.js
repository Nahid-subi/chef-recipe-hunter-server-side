const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const data = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Chef is running');
});

app.get('/data', (req, res) => {
    res.send(data);
  });
  
  app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectData = data.find(item => item.id == id);
    res.send(selectData);
  });

app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});
