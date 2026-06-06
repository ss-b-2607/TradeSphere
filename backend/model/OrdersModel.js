const {model} = require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema.js");

const OrdersModel = model("Order", OrdersSchema);

module.exports={OrdersModel};