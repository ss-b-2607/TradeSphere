const { model } = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema.js");

const HoldingsModel = model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };