import { getOffers } from "../useCases/getOffers.js";
import {
  activateOfferWithId,
  archiveOfferWithId,
  addOneView,
} from "../repositories/commands.js";
import { createNewOffer } from "../useCases/createNewOffer.js";
import { deleteOfferWithId } from "../useCases/deleteOffer.js";
import validateCreateOffer from "../model/OfferValidation.js";
import { updateOfferFunc } from "../useCases/updateOffer.js";
import jwt from "jsonwebtoken";
import { getOfferById } from "../repositories/queries.js";
// import { getOffer } from "../repositories/queries.js";
import { getUserOffers } from "../useCases/getUserOffers.js";
import Mongoose from "mongoose";

export const getAllOffers = async (req, res) => {
  try {
    const offers = await getOffers(req.query.sort);
    return res.status(200).send(offers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getAllUserOffers = async (req, res) => {
  try {
    const offers = await getUserOffers(req.params.id);
    return res.status(200).send(offers);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getOneOffer = async (req, res) => {
  try {
    const offer = await getOfferById(req.params.id);
    if (!offer) return res.status(404).send("No offer found!");
    return res.status(200).send(offer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const createOffer = async (req, res) => {
  const body = req.body;
  const categoryObjId = new Mongoose.Types.ObjectId(body.category._id);
  const heightObjId = new Mongoose.Types.ObjectId(body.height._id);

  body.category = categoryObjId;
  body.height = heightObjId;

  const { error } = validateCreateOffer(body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    await createNewOffer(req.body);
    return res.status(201).send(`Offer was added!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const deleteOffer = async (req, res) => {
  try {
    const decoded = jwt.decode(req.headers.token);
    const userId = decoded.sub;
    const deletedOffer = await deleteOfferWithId(req.params.id, userId);
    if (!deletedOffer) return res.status(404).send("There is no offer");
  } catch (error) {
    return res.status(500).send(error.message);
  }
  return res.status(200).send(`Offer with ${req.params.id} was deleted`);
};

export const activateOffer = async (req, res) => {
  try {
    const activatedOffer = await activateOfferWithId(req.params.id);
    if (!activatedOffer) {
      return res.status(404).send("There is no offer");
    }
    return res.status(200).send({
      message: "Offer was activated",
      data: activatedOffer,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const archiveOffer = async (req, res) => {
  try {
    const decoded = jwt.decode(req.headers.token);
    const userId = decoded.sub;
    const archivedOffer = await archiveOfferWithId(req.params.id, userId);
    if (!archivedOffer) {
      return res.status(404).send("There is no offer");
    }
    // res.append("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.append(
    //   "Access-Control-Allow-Origin",
    //   "https://plant-lovers.herokuapp.com/"
    // );
    return res.status(200).send(`Offer was archived!`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const addView = async (req, res) => {
  try {
    const viewAdded = await addOneView(req.params.id);
    if (!viewAdded) {
      return res.status(404).send("There is no offer");
    }
    return res.status(200).send("View was added");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const updateOffer = async (req, res) => {
  const { error } = validateCreateOffer(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    const decoded = jwt.decode(req.headers.token);
    const userId = decoded.sub;
    const updatedOffer = await updateOfferFunc(req.params.id, userId, req.body);
    return res.status(200).send({
      message: "Offer was updated",
      data: updatedOffer,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
