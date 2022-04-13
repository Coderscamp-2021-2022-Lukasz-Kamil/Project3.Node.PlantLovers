import { useFormik } from "formik";
import * as Yup from "yup";

export const passwordRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum")
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
