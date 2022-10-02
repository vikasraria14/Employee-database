import {  useDispatch } from "react-redux";
import { createNewEmployee } from "../Reducers/employeeReducer";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
    firstName: "",
    lastName:"",
    email: "",
    contact: "",
    age: "",
    gender:"male"
};


const CreateEmployee = ({ toggleCreate }) => {
    const dispatch = useDispatch();
    
   
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {                
               
               toggleCreate();
                action.resetForm();
                return dispatch(createNewEmployee(values))
            },
        }); 
    


    

    return (
        <div className="create">
            <div className="card">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="input-block">
                            <label htmlFor="firstName" className="input-label">
                                <span>First Name : </span>
                            </label>

                            <input
                                type="firstName"
                                autoComplete="off"
                                name="firstName"
                                id="firstName"
                                placeholder="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.firstName && touched.firstName ? (
                                <p className="form-error">{errors.firstName}</p>
                            ) : null}

                        </div>
                        <div className="input-block">
                            <label htmlFor="lastName" className="input-label">
                                <span>Last Name : </span>
                            </label>

                            <input
                                type="lastName"
                                autoComplete="off"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.lastName && touched.lastName ? (
                                <p className="form-error">{errors.lastName}</p>
                            ) : null}

                        </div>
                        <div className="input-block">
                            <label htmlFor="email" className="input-label">
                                <span>Email : </span>
                            </label>

                            <input
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                                <p className="form-error">{errors.email}</p>
                            ) : null}

                        </div>
                        <div className="input-block">
                            <label htmlFor="contact" className="input-label">
                                <span>Contact : </span>
                            </label>

                            <input
                                type="contact"
                                autoComplete="off"
                                name="contact"
                                id="contact"
                                placeholder="contact"
                                value={values.contact}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.contact && touched.contact ? (
                                <p className="form-error">{errors.contact}</p>
                            ) : null}

                        </div>
                        <div className="input-block">
                            <label htmlFor="confirm_contact" className="input-label">
                                <span>Age : </span>
                            </label>

                            <input
                                type="age"
                                autoComplete="off"
                                name="age"
                                id="age"
                                placeholder="Age"
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.age && touched.age ? (
                                <p className="form-error">{errors.age}</p>
                            ) : null}

                        </div>
                        <div className="input-block">
                            <label htmlFor="confirm_contact" className="input-label">
                                <span>Gender : </span>
                            </label>

                            <input type="radio" id="gender" name="gender" value="male" />
                            <label htmlFor="male">Male </label>
                            <input type="radio" id="gender" name="gender" value="female" />
                            <label htmlFor="css">Female</label>
                            {errors.confirm_contact && touched.confirm_contact ? (
                                <p className="form-error">{errors.confirm_contact}</p>
                            ) : null}

                        </div>
                        <br />
                        <div className="modal-buttons">

                            <button className="input-button" type="submit">
                                Save
                            </button>
                            <button type="button" onClick={()=>toggleCreate()}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default CreateEmployee;