import {createSlice} from '@reduxjs/toolkit';
const initialState=[];

const showEmployeesSlice=createSlice({
    name:"employeesToShow",
    initialState,
    reducers:{
        setEmployees(state,action)
        {
            const employees=action.payload;
            return employees;
        }
    }
})

export const searchEmployees=(employees)=>{
    return async dispatch=>{
        dispatch(setEmployees(employees))
    }
}


const {setEmployees}=showEmployeesSlice.actions;
export default showEmployeesSlice.reducer

