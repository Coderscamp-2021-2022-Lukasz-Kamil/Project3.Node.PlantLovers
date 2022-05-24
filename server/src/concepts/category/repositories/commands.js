import Category from "../model/Category.js";

export const createCategory = async (data) => {
  const newCategory = new Category({
    ...data,
  });

  try {
    await newCategory.save();
    return newCategory;
  } catch (err) {
    return new Error("Category wasn't created");
  }
};

export const deleteCategory = async (id) => {
  return await Category.deleteOne({ _id: id });
};
