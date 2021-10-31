const express = require("express");
const router = express.Router();
const menRanking = require("../models/men");


//adding details
router.post("/men", async(req,res)=>{
    try{
        const addingRecord = new menRanking(req.body);
        const insertmen = await addingRecord.save();
        res.status(201).send(insertmen);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//getting details
router.get("/men", async(req,res)=>{
    try{
        const getmen = await menRanking.find({}).sort({ranking:1});
        res.send(getmen);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//getting details by id
router.get("/men/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getman = await menRanking.findById(_id);
        res.send(getman);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//update details
router.patch("/men/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateman = await menRanking.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(updateman);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//delete details
router.delete("/men/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteman = await menRanking.findByIdAndDelete(_id);
        if(!_id)
        {
            return res.status(400).send();
        }
        res.send(deleteman);
    }
    catch(e){
        res.status(500).send(e);
    }
})


module.exports = router;

