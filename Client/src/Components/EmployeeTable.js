import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllEmployees } from "../Reducers/employeeReducer";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";
const EmployeeTable = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllEmployees()); //eslint-disable-next-line
    }, [])
    const employees = useSelector(state => state.employeesToShow)
    const currentPage = useSelector(state => state.pageNo);
    const lastPage = currentPage * 10;
    const firstPage = lastPage - 10;
    const currentEmployees = employees.slice(firstPage, lastPage)
    const navigate = useNavigate();
    const [showPopup,setPopup]=useState(false)    
    const [empId,setEmpId]=useState(null)


    const deleteEmployee = async (id) => {
        
        setPopup(true)
       setEmpId(id)
    }





    return (
        <div className="employees">
            <table id="employees">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Gender</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((employee) => {

                        return <tr key={employee._id}>
                            <td>{employee.firstName + " " + employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.gender}</td>
                            <td><button onClick={() => navigate(`/employee/${employee._id}`)} >View</button></td>
                            <td><button onClick={() => navigate(`/employee/edit/${employee._id}`)}>Edit</button></td>
                            <td><button onClick={() => deleteEmployee(employee._id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
             {showPopup&&<DeleteConfirmation employee={"something"} empId={empId} setPopup={setPopup} />}
        </div>
    )


}
export default EmployeeTable;