const mongoose = require('mongoose');

// database name is provided after localhost url
// unlike the traditional mongodb where you declare
// database name separately
// const connectionURL = 'mongodb://127.0.0.1:27017/task-manager-api';

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});