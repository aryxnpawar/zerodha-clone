const mongoose = require("mongoose");
const Order = require("./models/orders");
const Holding = require("./models/holdings");
const Position = require("./models/postions");
const dummyOrders = require("./initData/dummyOrders");
const dummyHoldings = require("./initData/dummyHoldings");
const dummyPositions = require("./initData/dummyPositions");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(async () => {
    console.log("Connected to MongoDB");

    await Order.deleteMany({});
    console.log("Deleted prev orders");

    await Holding.deleteMany({});
    console.log("Deleted prev Holdins");

    await Position.deleteMany({});
    console.log("Deleted prev Positons");


    await Order.insertMany(dummyOrders);
    console.log("Inserted orders");

    await Holding.insertMany(dummyHoldings);
    console.log("Inserted Holdings");

    await Position.insertMany(dummyPositions);
    console.log("Inserted Holdings");


    mongoose.connection.close();
  })
  .catch((err) => console.error("Error:", err));