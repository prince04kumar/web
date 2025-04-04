const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}`
    ).then(() => {
      console.log('Connected to MongoDB');
    }).catch((error) => {
      console.error(`Error connecting to MongoDB: ${error.message}`);

    });


  }

  catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }








};


exports.connectDB = connectDB;