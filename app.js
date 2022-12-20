const express = require('express');
const app = express();
const dotenv = require('./providers/dotenv');
const youtubeRoutes = require('./routes/youtube');

dotenv.use();
app.use('/youtube', youtubeRoutes);
app.get('/', (_, res) => res.send('The server is running properly'));

app.listen(3000, () => console.log('Example app listening on port 3000'))
module.exports = app;
