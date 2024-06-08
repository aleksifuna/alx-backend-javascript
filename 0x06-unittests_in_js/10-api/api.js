const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  const returnObject = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(returnObject);
});

app.post('/login', (req, res) => {
  let userName = '';
  if (req.body) {
    userName = req.body.userName;
  }
  res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
