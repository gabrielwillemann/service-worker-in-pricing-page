const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static('public'));
app.get('/', (req, res) => res.redirect('index.html'));
app.get('/plans', (req, res) => res.send([
  {
    name: 'Free',
    price: 0,
    features: ['10 users included', '2 GB of storage', 'Email support', 'Help center access']
  },
  {
    name: 'Pro',
    price: 15,
    features: ['20 users included', '10 GB of storage', 'Priority email support', 'Help center access']
  },
  {
    name: 'Enterprise',
    price: 29,
    features: ['30 users included', '15 GB of storage', 'Phone and email support', 'Help center access']
  }
]));
