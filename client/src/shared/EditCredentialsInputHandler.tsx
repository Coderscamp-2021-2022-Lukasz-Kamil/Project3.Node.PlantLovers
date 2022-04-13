import { useFormik } from "formik";
import * as Yup from "yup";
import { passwordRegExp } from "./LoginInputHandler";

const editCredentialsSchema = Yup.object({
  currentPassword: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars minimum")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  newPassword: Yup.string()
    .min(4, "Password is too short - should be 4 chars minimum")
    .when("currentPassword", (currentPassword, field) =>
      currentPassword ? field.required("Password is required") : field
    )
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string().when("newPassword", (newPassword, field) =>
    newPassword ? field.required().oneOf([Yup.ref("newPassword")]) : field
  ),
});

const editCredentialsFormHandler = useFormik({
  initialValues: {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  validationSchema: editCredentialsSchema,
  onSubmit: (values) => alert(JSON.stringify(values)),
});

export default editCredentialsFormHandler;
