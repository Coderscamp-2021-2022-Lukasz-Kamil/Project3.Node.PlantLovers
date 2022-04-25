import { deleteOffer } from "../repositories/commands.js";
import Offer from "../model/Offer.js";

export const deleteOfferWithId = async (offerId, userId) => {
  const existingOffer = await Offer.findById(offerId);
  if (!existingOffer) {
    throw new Error("Offer doesn't exists");
  }
  if (existingOffer.userId.toString() !== userId) {
    throw new Error("Access denied");
  }

  return deleteOffer(offerId);
};
