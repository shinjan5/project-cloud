const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    console.log('MongoDB connection successful!');
    console.log('MongoDB is running properly.');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    console.error('MongoDB might not be running or installed properly.');
  });
