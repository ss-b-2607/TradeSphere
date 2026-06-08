require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoute = require("./Routes/AuthRoute");
const { requireAuth } = require("./Middlewares/RequireAuth");

const app = express();

const url = process.env.MONGO_URL;
const PORT = process.env.PORT || 3002;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://trade-sphere-beta.vercel.app",
      "https://trade-sphere-ss-b-2607s-projects.vercel.app",
      "https://tradesphere-dashboard.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", authRoute);

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "TradeSphere backend is running",
  });
});

app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({
      userId: req.userId,
    });

    res.json(allHoldings);
  } catch (err) {
    console.log("Holdings fetch error:", err);
    res.status(500).json({
      error: "Failed to fetch holdings",
    });
  }
});

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({
      userId: req.userId,
    });

    res.json(allPositions);
  } catch (err) {
    console.log("Positions fetch error:", err);
    res.status(500).json({
      error: "Failed to fetch positions",
    });
  }
});

app.get("/allOrders", requireAuth, async (req, res) => {
  try {
    const orders = await OrdersModel.find({
      userId: req.userId,
    });

    res.json(orders);
  } catch (err) {
    console.log("Orders fetch error:", err);
    res.status(500).json({
      error: "Failed to fetch orders",
    });
  }
});

app.post("/newOrder", requireAuth, async (req, res) => {
  try {
    console.log("New order body:", req.body);
    console.log("Logged in user:", req.userId);

    const { name, qty, price, mode } = req.body;

    const orderQty = Number(qty);
    const orderPrice = Number(price);

    if (!name || !orderQty || !orderPrice || !mode) {
      return res.status(400).json({
        success: false,
        message: "Missing order fields",
      });
    }

    const newOrder = new OrdersModel({
      userId: req.userId,
      name,
      qty: orderQty,
      price: orderPrice,
      mode,
    });

    await newOrder.save();

    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({
        userId: req.userId,
        name,
      });

      if (existingHolding) {
        const oldQty = Number(existingHolding.qty);
        const oldAvg = Number(existingHolding.avg);
        const newQty = oldQty + orderQty;

        const newAvg = (oldQty * oldAvg + orderQty * orderPrice) / newQty;

        existingHolding.qty = newQty;
        existingHolding.avg = Number(newAvg.toFixed(2));
        existingHolding.price = orderPrice;
        existingHolding.net = "0.00%";
        existingHolding.day = "0.00%";
        existingHolding.isLoss = false;

        await existingHolding.save();
      } else {
        const newHolding = new HoldingsModel({
          userId: req.userId,
          name,
          qty: orderQty,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00%",
          day: "0.00%",
          isLoss: false,
        });

        await newHolding.save();
      }
    }

    res.json({
      success: true,
      message: "Order saved successfully",
      order: newOrder,
    });
  } catch (err) {
    console.log("Order error:", err);
    res.status(500).json({
      success: false,
      message: "Order not saved",
      error: err.message,
    });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  domain: ".onrender.com",
});

  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });
