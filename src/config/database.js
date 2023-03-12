const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");

  } catch (error) {
    console.error(`Connection failed ${error}`);
  }
};

module.exports = connectDB();
