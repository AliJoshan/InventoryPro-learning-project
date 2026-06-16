const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const roleAuth = require("../middleware/roleMiddleware");

const {
  registerUser,
  loginUser,
  deleteUser,
  getAllUsers,
  getProfile,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/:id", auth, roleAuth("admin"), deleteUser);
router.get("/", getAllUsers);
router.get("/profile", auth, getProfile);

module.exports = router;
