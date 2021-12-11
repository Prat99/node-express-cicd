const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express demo app</h1><p>App is working</p>');
});

app.get('/products', (req, res) => {
  res.send([
    {
      productId: 100,
      name: 'Iphone',
    },
    {
      productId: 101,
      name: 'Macbook-pro',
    },
  ]);
});

app.listen(port, () => {
  console.log(`demo app is working ${port}`);
});
