import { useFormik } from "formik";
import * as Yup from "yup";
import { passwordRegExp } from "./constants";

const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const signInFormHandler = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: signInSchema,
  onSubmit: (values) => alert(JSON.stringify(values)),
});

export default signInFormHandler;
