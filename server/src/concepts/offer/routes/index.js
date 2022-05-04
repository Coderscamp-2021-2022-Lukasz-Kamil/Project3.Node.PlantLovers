import express from "express";
import {
  activateOffer,
  addView,
  archiveOffer,
  createOffer,
  deleteOffer,
  getAllOffers,
  getAllUserOffers,
  updateOffer,
} from "../controllers/index.js";
import { isAuthenticated } from "../../authorization/controllers/auth.js";
import { isAdmin } from "../../authorization/controllers/auth.js";
import { getOneOffer } from "../controllers/index.js";
import { searchOffer } from "../useCases/searchOffer.js";

const router = express.Router();

router.post("/", isAuthenticated, createOffer);
router.delete("/:id", isAuthenticated, deleteOffer);
router.get("/", getAllOffers);
router.get("/:id", getAllUserOffers);
router.get("/:id", getOneOffer);
router.put("/:id", isAuthenticated, updateOffer);
router.put("/activate/:id", isAdmin, activateOffer);
router.put("/archive/:id", isAuthenticated, archiveOffer);
router.put("/view/:id", addView);
router.get("/search/:key", searchOffer);

export default router;
