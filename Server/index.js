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
.then(res=>{
    console.log("connected to url")
})

app.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const employee=await Employee.findOne({_id:id})
    .catch(error=>{
        console.log(error.message)
        res.status(404).end()
    })
   
    res.status(200).json(employee)
})

app.get('/',async (req,res)=>{    
    const dat=await Employee.find({})
    .catch(error=>{
        console.log(error.message)
        res.status(404).end()
    })    
    return res.status(200).json(dat)
})

app.post('/',(req,res)=>{
    const {firstName,lastName,email,contact,gender,age}=req.body;
    const newEmp=new Employee({
        firstName,lastName,email,contact,gender,age
    })
    newEmp.save()
    .catch(error=>{
        console.log(error.message)
        res.status(404).end()
    })
    return res.status(200).json(newEmp)
})

app.put('/',async(req,res)=>{   
    const {id,firstName,lastName,email,contact,gender,age}=req.body;
    const newEmp={
        firstName,lastName,email,contact,gender,age
    }
    const updated=await Employee.findByIdAndUpdate(id,newEmp,{new:true})
    .catch(error=>{
        console.log(error.message)
        res.status(404).end()
    })  
    return res.status(200).json(updated)
})

app.delete('/:id',async (req,res)=>{   
    const id=req.params.id;
    await Employee.findByIdAndRemove(id)
    .catch(error=>{
        console.log(error.message)
        res.status(404).end()
    })   
    return res.status(200).send("deleted")
})
const port=process.env.PORT||3008;

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})

