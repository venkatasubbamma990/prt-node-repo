let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.json())
let imported = require('./model');

let Student = imported.Student;
let Class = imported.Class
app.get('/',(req,res)=>{
    res.send('hello db is working')
})
app.post('/v1/myClass', async (req,res)=>{
    try{
        let student =  await Student.create(req.body);
    res.status(201).json({
        status:'success',
        student:student.id
    })
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})
app.post('/v1/myClass/:myClassId/students', async (req,res)=>{
    try{
        let classes =  await Class.create(req.body, {myClassId:req.params.myClassId});
    res.status(201).json({
        status:'success',
        classes :classes
        
    })
    console.log(classes)
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})
app.get('/v1/myClass', async(req,res)=>{
    try{
        let student = await Student.find();
    res.status(200).json({
        status:'success',
        student:student
    })
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})

app.get('/v1/myClass/:myClassId', async (req,res)=>{
    try{
        let classes = await Class.find({myClassId:req.params.myClassId});
    res.status(200).json({
        status:'success',
        classes:classes
    })
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})

app.get('/v1/myClass/:myClassId/students', async (req,res)=>{
    try{
        let classes =  await Class.find({myClassId:req.params.myClassId});
    res.status(201).json({
        status:'success',
        classes :classes
        
    })
    console.log(classes)
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})
app.get('/v1/myClass/:myClassId/students/:studentId', async (req,res)=>{
    try{
        let classes =  await Class.find({myClassId:req.params.myClassId} && {studentId:req.params.studentId});
    res.status(201).json({
        status:'success',
        classes :classes
        
    })
    console.log(classes)
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})
app.put('/v1/myClass/:myClassId/students/:studentId', async (req,res)=>{
    try{
        let classes =  await Class.updateOne({myClassId:req.params.myClassId} && {studentId:req.params.studentId},{$set:{name:req.body.name}});
    res.status(201).json({
        status:'success',
        classes :classes
        
    })
    console.log(classes)
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})
app.delete('/v1/myClass/:myClassId', async (req,res)=>{
    try{
        let classes =  await Class.deleteOne({myClassId:req.params.myClassId});
    res.status(201).json({
        status:'success',
        classes :classes
        
    })
    console.log(classes)
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})
app.delete('/v1/myClass/:myClassId/students/:studentId', async (req,res)=>{
    try{
        let classes =  await Class.deleteOne({myClassId:req.params.myClassId} && {studentId:req.params.studentId});
    res.status(201).json({
        status:'success',
        classes :classes
        
    })
    console.log(classes)
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})

app.get('/v1/myClass/:id', async (req,res)=>{
    try{
        let student = await Student.find({id:req.params.id});
    res.status(200).json({
        status:'success',
        student:student
    })
    }
    catch(e){
        res.status(400).json({
            status:'failure',
            message:e.message
        })
    }
    
})

module.exports = app;