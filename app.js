const { API_KEY } = require('./secrets');
const axios = require('axios').default;
const express = require('express');
const cors = require('cors');

const BASE_URL = 'https://pro-api.coinmarketcap.com';
const GET_PRICES_TOP_100 = '/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + API_KEY;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
   console.info('GET /');

   axios.get(BASE_URL + GET_PRICES_TOP_100).then(response => {
      return res.json(response.data);
   });
});

app.listen(3001, () => console.log('API running on 3001'));