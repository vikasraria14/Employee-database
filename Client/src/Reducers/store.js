import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './employeeReducer'
import selectedPageReducer from './selectedPageReducer';
import searchReducers from './searchReducers';


const store = configureStore({
    reducer: {
        employees: employeeReducer,
        pageNo:selectedPageReducer,
        employeesToShow:searchReducers
    }
})
export default store;