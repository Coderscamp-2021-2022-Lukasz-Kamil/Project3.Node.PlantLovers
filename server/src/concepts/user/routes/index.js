import {
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  activateAccount,
  makeUserAnAdmin,
  getOneUser,
  getUsers,
} from "../controllers/index.js";
import {
  isThatUser,
  isThatUserOrAdmin,
  isAdmin,
} from "../../authorization/controllers/auth.js";
import express from "express";

const router = express.Router();

router.post("/register", createUser);
router.put("/:id", isThatUser, updateUser);
router.put("/activate/:id", isThatUser, activateAccount);
router.delete("/:id", isThatUserOrAdmin, deleteUser);
router.post("/login", loginUser);
router.put("/admin/:id", isAdmin, makeUserAnAdmin);
router.get("/:id", getOneUser);
router.get("/", getUsers);

export default router;
