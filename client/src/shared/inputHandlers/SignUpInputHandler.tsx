import * as Yup from "yup";
import { phoneRegExp } from "./constants";
import { passwordRegExp } from "./constants";

export const signUpSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  city: Yup.string(),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

