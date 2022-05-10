import { getAllOffers } from "../repositories/queries.js";

export const getOffers = async (sort) => {
  return await getAllOffers({}, 10, 0, sort);
};
