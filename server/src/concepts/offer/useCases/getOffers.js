import { getAllOffers } from "../repositories/queries.js";

export const getOffers = async () => {
  return await getAllOffers({}, 0);
};
