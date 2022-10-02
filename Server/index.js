const express=require('express');
const mongoose=require('mongoose');
const Employee=require('./Models/employees');
const users=require('./user')
const cors=require('cors');
const app=express();

app.use(cors())
app.use(express.json())
const url='mongodb+srv://vikas_raria:raria123@cluster0.7lq1c.mongodb.net/Employees?retryWrites=true&w=majority'
mongoose.connect(url)
.then(res=>console.log("connected to url"))

app.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const employee=await Employee.findOne({_id:id})
    .catch(error=>console.log(error.message))
    console.log(employee)
    res.json(employee)
})

app.get('/',async (req,res)=>{
    console.log("get")
    const dat=await Employee.find({})  
    console.log("Sent")
    return res.json(dat)
})

app.post('/',(req,res)=>{
    const {firstName,lastName,email,contact,gender,age}=req.body;
    const newEmp=new Employee({
        firstName,lastName,email,contact,gender,age
    })
    newEmp.save()
    return res.json(newEmp)
})

app.put('/',async(req,res)=>{
    console.log("Put")
    const {id,firstName,lastName,email,contact,gender,age}=req.body;
    const newEmp={
        firstName,lastName,email,contact,gender,age
    }
    const updated=await Employee.findByIdAndUpdate(id,newEmp,{new:true})
    .catch(err=>console.log(err.message))
    console.log("Putted",updated)
    return res.json(updated)
})

app.delete('/:id',async (req,res)=>{
    console.log("Delete")
    const id=req.params.id;
    await Employee.findByIdAndRemove(id)
    console.log("Deleted")
    return res.send("deleted")
})
const port=3008;

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})

