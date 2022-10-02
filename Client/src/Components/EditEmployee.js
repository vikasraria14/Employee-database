import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"

import { saveEmployee } from "../Reducers/employeeReducer";
import male from '../Assets/male.png'
import female from '../Assets/female.png'
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const EditEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams().id;
    const employees = useSelector(state => state.employees);
    let currentIndex = 0;
    const employee = employees.find((employee, i) => {
        currentIndex = i;
        return employee._id === id
    })
    if (employee) {
        var initialValues = {
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            contact: employee.contact,
            age: employee.age,
            gender: employee.gender
        };
    }



    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values, action) => {
                const gender = employee.gender

                const data = {
                    id: employee._id,
                    ...values,
                    gender
                }

                navigate(`/employee/${id}`)
                action.resetForm();
                return dispatch(saveEmployee(data))


            },
        });


    if (employee) {
        return (
            <div className="edit">
                <button onClick={() => navigate('/')}>Back</button><br /><br />
                <div className="card">
                    <img alt="" src={employee.gender === 'male' ? male : female} />
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
                                <label htmlFor="age" className="input-label">
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

                            <br />
                            <div className="modal-buttons">

                                <button className="input-button" type="submit">
                                    Save
                                </button>
                                <button type="button" onClick={() => navigate(`/employee/${employee._id}`)}>Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="navigationButtons">
                    <button onClick={() => navigate(`/employee/${employees[currentIndex - 1]._id}`)}> Prev </button>
                    <button onClick={() => navigate(`/employee/${employees[currentIndex + 1]._id}`)}> Next </button>
                </div>
            </div>
        )
    }
}

export default EditEmployee;