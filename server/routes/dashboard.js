const express = require("express");
const router = express.Router();
const { isLogin } = require("../middleware/checkAuth");
const dashboardController = require("../controllers/dashboardController");

router.get("/dashboard", isLogin, dashboardController.dashboard);

module.exports = router;
