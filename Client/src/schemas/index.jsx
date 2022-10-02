import * as Yup from "yup";
export const signUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Please enter your name"),
  lastName: Yup.string().min(2).max(25),
  email: Yup.string().email().required("Please enter your email"),
  contact: Yup.string().min(10).max(20).required("Please enter your contact"),
  age: Yup
    .number()
    .required("Please enter your age")
    .min(18, "You must be at least 18 years")
    .max(60, "You must be at most 60 years"),
  
});