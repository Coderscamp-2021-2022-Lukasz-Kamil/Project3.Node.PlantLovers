import Category from "../model/Category.js";

export async function getCategory(categoryId) {
  const category = await Category.findById(categoryId);

  return category;
}

export async function getAllCategories() {
  const categories = await Category.find();

  return categories;
}
export async function findCategoryByName(newCategoryName) {
  const findCategory = await Category.findOne({ name: newCategoryName });
  return findCategory;
}
