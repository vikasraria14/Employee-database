import axios from 'axios';

const url="http://192.168.1.8:3008/";

const getAllEmployees=async()=>{
    const response=await axios.get(url);
   // console.log(response)
    return response.data;
}

const deleteEmployee=async(id)=>{
    const url1=url+id;
    const response=await axios.delete(url1)
    return response.data;
}

const updateEmployee=async(data)=>{
    const response=await axios.put(url,data)
    return response.data;
}

const createNew=async(data)=>{
    const response=await axios.post(url,data)
    return response.data;
}
const employeeService={getAllEmployees,deleteEmployee,updateEmployee,createNew}
export default employeeService