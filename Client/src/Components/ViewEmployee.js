import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import male from "../Assets/male.png"
import female from "../Assets/female.png"

const ViewEmployee = () => {
    
    const navigate = useNavigate()
    const id = useParams().id
    const employees = useSelector(state => state.employees);
    let currentIndex = 0;
    const employee = employees.find((employee, i) => {
        currentIndex = i;
        return employee._id === id
    })

    return (
        <div className="view">
            <button onClick={() => navigate('/')}>Back</button><br /><br />
            <div className="card">
                <img src={employee.gender === 'male' ? male : female} alt=""/>
                <div className="container">
                    <p><span>Name : </span>{employee.firstName} {employee.lastName}</p>
                    <p><span>Email : </span> {employee.email}</p>
                    <p><span>Contact : </span> {employee.contact}</p>
                    <p><span>Age : </span> {employee.age}</p>
                    <p><span>Gender : </span> {employee.gender}</p>
                    <button onClick={() => navigate(`/employee/edit/${employees[currentIndex]._id}`)}> Edit </button>
                </div>
            </div>
            <div className="navigationButtons">
                <button onClick={() => navigate(`/employee/${employees[currentIndex - 1]._id}`)}> Prev </button>
                <button onClick={() => navigate(`/employee/${employees[currentIndex + 1]._id}`)}> Next </button>
            </div>



        </div>
    )
}
export default ViewEmployee;