import { useFormik } from "formik";
import * as Yup from "yup";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const offerSchema = Yup.object({
  title: Yup.string().required("Title offer is required"),
  description: Yup.string().required("Description is required"),
  city: Yup.string().required("City is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  category: Yup.object({
    id: Yup.string().required("Please select a category"),
  }),
  height: Yup.object({
    id: Yup.string().required("Please select a height"),
  }),
  price: Yup.number().required("Price is required"),
  forExchange: Yup.boolean(),
  photos: Yup.mixed()
    .required("Image is required")
    .test("fileType", " You can only upload JPG, JPEG and PNG files", (value) =>
      SUPPORTED_FORMATS.includes(value.type)
    ),
});

const addOfferFormHandler = useFormik({
  initialValues: {
    title: "",
    description: "",
    city: "",
    phoneNumber: "",
    category: "",
    height: "",
    price: "",
    forExchange: false,
    photos: null,
  },
  validationSchema: offerSchema,
  onSubmit: (values) => alert(JSON.stringify(values)),
});

export default addOfferFormHandler;
