import { updateOfferFunc } from "../useCases/updateOffer";
import { validateCreateOffer } from "../model/OfferValidation";

export const updateOffer = async (req, res) => {
  const validationCheck = validateCreateOffer(req.body);
  if (validationCheck.error) {
    return res.status(400).send("Invalid data");
  }
  try {
    const updatedOffer = await updateOfferFunc(req.params.id, req.body);
    return res.status(200).send({
      message: "Offer was updated",
      data: updatedOffer,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
