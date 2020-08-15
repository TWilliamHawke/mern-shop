const mongoose = require("mongoose");
const config = require("config");
const server = require('./server')

const PORT = 5000;
const isLocal = config.get("isLocal");

const mongoUrl = isLocal
  ? "mongodb://localhost:27017/mern-shop"
  : config.get("mongoUrl");

const start = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    server.listen(PORT, () => console.log("server has running"));
  } catch (e) {
    console.log(e);
    process.exit();
  }
};


start();
