const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const youtube = google.youtube('v3');

const getOAuth2 = () => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectURL = process.env.REDIRECT_URL;
  return new OAuth2(clientId, clientSecret, redirectURL);
}

const getRating = async (token, id) => {
  return await youtube.videos.getRating({
    id,
    access_token: token,
  })
}

module.exports = { getOAuth2, getRating };