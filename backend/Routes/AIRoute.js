const router = require("express").Router();

const {
  generatePortfolioReport,
} = require("../controllers/AIController");

router.get(
  "/portfolio-report",
  generatePortfolioReport
);

module.exports = router;