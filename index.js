const express = require('express');
const useRoute = require('./routes/url');

const URL = require('./models/url');

const connectToMongoDB = require('./connection');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/url-short');
app.use(express.json);
app.use('/url', useRoute);
app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    { $push: { visitHistory: { timeStamp: Date.now() } } }
  );

  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
