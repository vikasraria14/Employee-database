import {createSlice} from '@reduxjs/toolkit';
const initialState=1;

const pageSlice=createSlice({
    name:"pageNo",
    initialState,
    reducers:{
        setPage(state,action)
        {
            const page=action.payload;
            return page;
        }
    }
})

export const changePage=(page)=>{
    return async dispatch=>{
        dispatch(setPage(page))
    }
}


const {setPage}=pageSlice.actions;
export default pageSlice.reducer

