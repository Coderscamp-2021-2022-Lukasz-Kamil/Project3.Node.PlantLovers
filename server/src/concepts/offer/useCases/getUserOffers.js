import { getAllUserOffers } from "../repositories/queries.js";
import User from "../../user/model/User.js";

export const getUserOffers = async (userId) => {
  await User.findById(userId);
  return await getAllUserOffers({ userId: userId }, 10, 0);
};
