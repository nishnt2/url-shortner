const mongoose = require('mongoose');

function connectToMongoDB(url) {
  return mongoose.connect(url).then(() => {
    console.log('MongoDB Connected');
  });
}

module.exports = connectToMongoDB;
