import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchEmployees } from "../Reducers/searchReducers";
import { changePage } from "../Reducers/selectedPageReducer";
import CreateEmployee from "./CreateEmployee";

const Search = () => {
    const [searchText, setSearch] = useState('')
    const [showForm, setShowForm] = useState(false)
    const employees = useSelector(state => state.employees)
    const dispatch = useDispatch();
    const relevantEmployees = () => {

        return employees.filter(employee => employee.firstName.toLowerCase().includes(searchText.toLowerCase()))
    }
    const setEmployees = () => {
        setSearch("")
        dispatch(changePage(1))
        dispatch(searchEmployees(relevantEmployees()))
    }


    useEffect(() => {
        dispatch(searchEmployees(relevantEmployees())) // eslint-disable-next-line
    }, [employees])


    const toggleCreate = () => {
        setShowForm(!showForm)
    }


    return (
        <div className="search">
            <input placeholder="Search Employees" onChange={(event) => setSearch(event.target.value)} value={searchText} />
            <button onClick={setEmployees}>Search</button>
            <button onClick={toggleCreate}>Create New Employee</button>
            {showForm ? <CreateEmployee toggleCreate={toggleCreate} /> : null}
        </div>
    )

}
export default Search;