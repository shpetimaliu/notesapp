const express = require("express");
const router = express.Router();
const { isLogin } = require("../middleware/checkAuth");
const dashboardController = require("../controllers/dashboardController");

router.get("/dashboard", isLogin, dashboardController.dashboard);
router.get("/dashboard/item/:id", isLogin, dashboardController.viewNote);
router.put("/dashboard/item/:id", isLogin, dashboardController.updateNote);
router.delete(
  "/dashboard/item-delete/:id",
  isLogin,
  dashboardController.deleteNote
);

module.exports = router;
