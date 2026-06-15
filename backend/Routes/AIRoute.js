const router = require("express").Router();

const {
  generatePortfolioReport,
} = require("../Controllers/AIController");

router.get(
  "/portfolio-report",
  generatePortfolioReport
);

module.exports = router;