import * as Yup from "yup";
import { phoneRegExp } from "./constants";

export const editProfileSchema = Yup.object({
  email: Yup.string().email("Invalid email"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  city: Yup.string(),
});
