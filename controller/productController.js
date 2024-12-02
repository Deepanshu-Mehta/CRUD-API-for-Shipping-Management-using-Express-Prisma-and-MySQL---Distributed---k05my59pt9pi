const { prisma } = require("../db/config");

const createShipping = async (req,res)=>{
    try{
        const {userId, productId, count} = req.body;
    if(!userId || !productId || !count){
        return res.status(404).json({error: "All fields required"})
    };
    const created = await prisma.Shipping.create({data : {userId, productId, count}});
    return res.status(201).json(created);
    }catch(err){
        return res.status(500).json({message : "Internal server error"});
    }
    
}

const cancelShipping = async (req,res)=>{
    try{
        const {shippingId} = req.body;
        if(!shippingId){
            return res.status(404).json({error: "Missing shippingId"});
        }
        const product = await prisma.Shipping.findUnique({where : {id : shippingId}});
        if(!product){
            return res.status(400).json({})
        }
        const cancelshipp = await prisma.Shipping.update({
            where : {id : shippingId},
            data : {status : "cancelled" }
        });
        return res.status(200).json(cancelshipp);
    }catch(err){
        return res.status(500).json({message : "Internal server error"});
    }
}

const retrieve = async (req,res)=>{

    try{
        const {userId} = req.query;
        if(!userId){
            const data = await prisma.Shipping.findMany();
            return res.status(200).json(data);
        }
        else{
            const data = await prisma.Shipping.findUnique({where : userId});
            return res.status(200).json(data);
        }
        
    }
    catch(err){
        return res.status(500).json({message : "Internal server error"});
    }
}

module.exports = {createShipping, cancelShipping, retrieve}