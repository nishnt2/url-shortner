const express = require('express');
const useRoute = require('./routes/url');
const connectToMongoDB = require('./connection');
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/url-short');
app.use(express.json);
app.use('/url', useRoute);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
