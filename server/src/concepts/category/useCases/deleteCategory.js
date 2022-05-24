import { deleteCategory } from "../repositories/commands.js";

export const deleteCategoryWithId = (id) => {
  return deleteCategory(id);
};
