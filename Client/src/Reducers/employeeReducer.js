import {createSlice} from '@reduxjs/toolkit';
import employeeService from '../Controllers/employee'
const initialState=[];

const employeeSlice=createSlice({
    name:"employee",
    initialState,
    reducers:{
        setEmployees(state,action)
        {
            const employees=action.payload;
            return employees;
        },
        updateEmployee(state,action)
        {
            const employee=action.payload;
            return state.map(s=>s._id===employee._id?employee:s)            
        },
        addNew(state,action)
        {
            const employee=action.payload;
            return state.concat(employee)
        }
    }
})

export const getAllEmployees=()=>{    
    return async dispatch=>{        
        const data=await employeeService.getAllEmployees();
        dispatch(setEmployees(data))
    }
}
export const removeEmployee=(id)=>{
    return async dispatch=>{  
        await employeeService.deleteEmployee(id)      
        const data=await employeeService.getAllEmployees();
        dispatch(setEmployees(data))
    }
}
export const saveEmployee=(data)=>{
    return async dispatch=>{        
        const data1=await employeeService.updateEmployee(data);
        dispatch(updateEmployee(data1))
    }
}
export const createNewEmployee=(data)=>{
    return async dispatch=>{        
        const data1=await employeeService.createNew(data);
        dispatch(addNew(data1))
    }
}


const {setEmployees,updateEmployee,addNew}=employeeSlice.actions;
export default employeeSlice.reducer

