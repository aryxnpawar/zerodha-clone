const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
require("dotenv").config();
const dbUrl = process.env.MONGO_URL;
const mongoose = require("mongoose");
const Holding = require("./models/holdings");
const Position = require("./models/postions");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Order = require("./models/orders");


main()
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => console.log("Error occured : ", err));

async function main() {
  await mongoose.connect(dbUrl);
}

app.listen(port, () => {
  console.log("listening on port :", port);
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/getpositions", async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
});

app.get("/getholdings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/getorders", async (req, res) => {
  let allOrders = await Order.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new Order({
      name: req.body.name,
      qty: Number(req.body.qty),
      price: Number(req.body.price),
      mode: req.body.mode,
    });
    
    await newOrder.save();
    
    const existingHolding = await Holding.findOne({ name: newOrder.name });
    
    if (newOrder.mode === "BUY") {
      // BUY logic
      if (existingHolding) {
        const totalQty = existingHolding.qty + newOrder.qty;
        const totalCost = (existingHolding.avg * existingHolding.qty) + (newOrder.price * newOrder.qty);
        const newAvg = totalCost / totalQty;
        
        await Holding.updateOne(
          { name: newOrder.name },
          {
            $set: {
              qty: totalQty,
              avg: newAvg,
              price: newOrder.price,
            }
          }
        );
      } else {
        await Holding.insertOne({
          name: newOrder.name,
          qty: newOrder.qty,
          avg: newOrder.price,
          price: newOrder.price,
          net: 0,
          day: 0,
        });
      }
    } else if (newOrder.mode === "SELL") {
      // SELL logic
      if (!existingHolding) {
        return res.status(400).json({ 
          success: false, 
          message: "You don't own this stock" 
        });
      }
      
      if (existingHolding.qty < newOrder.qty) {
        return res.status(400).json({ 
          success: false, 
          message: `Insufficient quantity. You only have ${existingHolding.qty} shares` 
        });
      }
      
      const newQty = existingHolding.qty - newOrder.qty;
      
      if (newQty === 0) {
        // Sold all shares, remove from holdings
        await Holding.deleteOne({ name: newOrder.name });
      } else {
        // Partial sell, update quantity but keep same average cost
        await Holding.updateOne(
          { name: newOrder.name },
          {
            $set: {
              qty: newQty,
              price: newOrder.price, // Update current price
            }
          }
        );
      }
    }
    
    res.status(200).json({ 
      success: true, 
      message: `${newOrder.mode} order placed successfully`,
      order: newOrder 
    });
    
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to place order" 
    });
  }
});