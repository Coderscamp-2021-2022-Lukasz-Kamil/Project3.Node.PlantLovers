import Offer from "../model/Offer.js";
// import User from "../../user/model/User.js";

export async function getOffer(offerId) {
  const offer = await Offer.findById(offerId);
  if (!offer) {
    throw "There is no offer with id = " + offerId;
  }
  return offer;
}

export async function getAllOffers(options, limit, skip) {
  const offers = await Offer.find(options).limit(limit).skip(skip);

  return offers;
}

export async function getAllUserOffers(options, limit, skip) {
  const offers = await Offer.find(options).limit(limit).skip(skip);
  return offers;
}
