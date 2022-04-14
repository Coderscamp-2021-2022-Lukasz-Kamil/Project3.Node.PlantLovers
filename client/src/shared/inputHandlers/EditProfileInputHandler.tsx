import { useFormik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "./constants";

const editProfileSchema = Yup.object({
  email: Yup.string().email("Invalid email"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  city: Yup.string(),
});

const editProfileFormHandler = useFormik({
  initialValues: {
    email: "",
    phone: "",
    city: "",
  },
  validationSchema: editProfileSchema,
  onSubmit: (values) => alert(JSON.stringify(values)),
});

export default editProfileFormHandler;
