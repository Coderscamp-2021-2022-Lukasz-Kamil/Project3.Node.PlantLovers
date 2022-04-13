import { useFormik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "./AddOfferInputHandler";
import { passwordRegExp } from "./LoginInputHandler";

const signUpSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  city: Yup.string(),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const signUpFormHandler = useFormik({
  initialValues: {
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
  },
  validationSchema: signUpSchema,
  onSubmit: (values) => alert(JSON.stringify(values)),
});

export default signUpFormHandler;
