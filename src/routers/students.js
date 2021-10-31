const express = require("express");
const router = new express.Router();
const Student = require("../models/students");


//create new students
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
//     // res.send("heloo");
// })

router.post("/students",async(req,res)=>{
    try{
        // console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//read registered student data
router.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// for individual student using id
router.get("/students/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const studentData = await Student.findById({_id:id});
        if(!studentData)
        {
            return res.status(404).send();
        }
        else{
            res.send(studentData);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})


//update student by id
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(updateData);
    }
    catch(e){
        res.status(400).send(e);
    }
})



//delete student by id
router.delete("/students/:id",async(req,res)=>{
    try{
        const deleteData = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteData);
    }
    catch(e){
        res.status(500).send(e);
    }
})


module.exports = router; 