import Height from "../model/Height.js";

export const createHeight = async (data) => {
  const newHeight = new Height({
    ...data,
  });

  try {
    await newHeight.save();
    return newHeight;
  } catch (err) {
    return new Error("Height wasn't created");
  }
};

export const deleteHeight = async (id) => {
  return await Height.deleteOne({ _id: id });
};
