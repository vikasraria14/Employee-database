import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeEmployee } from "../Reducers/employeeReducer";
const DeleteConfirmation=({setPopup,employee,empId})=>{
    const dispatch=useDispatch()
    const [confirmDelete,setConfirm]=useState(false)
    
    if(confirmDelete)
    {
        dispatch(removeEmployee(empId));
        setPopup(false)
    }
    
    return(
        <div className="popup">
            <p>Are you sure you want to delete {employee} ?</p> 
            <div className="popupButton">
                <button onClick={()=>setPopup(false)}>Cancel</button>
                <button onClick={()=>setConfirm(true)}>Delete</button>
            </div>           
        </div>
    )
}
export default DeleteConfirmation;