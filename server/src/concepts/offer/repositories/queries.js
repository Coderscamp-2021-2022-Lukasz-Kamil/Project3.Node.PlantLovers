import Offer from "../model/Offer.js";
import mongoose from "mongoose";

export async function getOffer(offerId) {
  const offers = await Offer.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(offerId),
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $unwind: "$category",
    },
    {
      $lookup: {
        from: "heights",
        localField: "height",
        foreignField: "_id",
        as: "height",
      },
    },
    {
      $unwind: "$height",
    },
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "userId",
      },
    },
    {
      $unwind: "$userId",
    },
  ]);

  if (!offers.length) {
    throw "There is no offer with id = " + offerId;
  }
  return offers[0];
}

export async function getAllOffers(options, limit, skip, sort) {
  const offers = await Offer.find(options).sort(sort).limit(limit).skip(skip);

  return offers;
}

export async function getAllUserOffers(options, limit, skip) {
  const offers = await Offer.find(options).limit(limit).skip(skip);
  return offers;
}
