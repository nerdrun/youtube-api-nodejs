const express = require('express');
const router = express.Router();
const { getOAuth2, getRating } = require('../providers/youtube');
const { extractToken } = require('../utils/token');

router.get('/', (_, res) => {
  const authURL = getOAuth2().generateAuthUrl({
    access_type: process.env.ACCESS_TYPE,
    scope: process.env.SCOPE,
  });
  res.send(authURL);
});

router.get('/callback', async (req, res) => {
  const { code } = req.query;
  const oauth = getOAuth2()
  const { tokens: { access_token, refresh_token, id_token } } = await oauth.getToken(code);
  /// After user login, a business logic goes here.
  res.send({ token: { access_token, refresh_token, id_token } });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  let token = extractToken(req.headers.authorization);
  const { data: { items } } = await getRating(token, id);
  res.send({ items });
})

module.exports = router;