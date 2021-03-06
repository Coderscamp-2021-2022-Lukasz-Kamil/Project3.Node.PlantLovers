import Joi from "joi-oid";

const validateCreateOffer = (offer) => {
  const schema = Joi.object({
    userId: Joi.objectId().required(),

    title: Joi.string().min(3).max(50).required(),

    description: Joi.string().max(500).required(),

    city: Joi.string().max(58).required(),

    location: Joi.object({
      lat: Joi.number().optional(),
      lon: Joi.number().optional(),
    }),

    phoneNumber: Joi.string().min(9).max(9).required(),

    photos: Joi.array().items(
      Joi.object({
        url: Joi.string().required(),
        isMainPhoto: Joi.boolean().optional(),
        _id: Joi.string().optional(),
      })
    ),

    category: Joi.objectId().required(),

    height: Joi.objectId().required(),

    price: Joi.number().required(),

    forExchange: Joi.boolean().required(),
  });

  return schema.validate(offer);
};

export default validateCreateOffer;
