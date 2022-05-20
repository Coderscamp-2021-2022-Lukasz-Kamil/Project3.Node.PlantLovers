import Offer from "../model/Offer.js";

export const searchOffer = async (req, res) => {
  let offer = await Offer.find({
    $or: [{ title: { $regex: req.params.key, $options: "i" } }],
  });
  res.send(offer);
};
