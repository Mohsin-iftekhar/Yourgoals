import dbConnect from "../../../db/dbconnect";
import Hero from "../../../models/Hero";

dbConnect() 
console.log("Hello i am backend")
//get all records, post new record
export default async(req,res)=>{
    const {method}=req
    switch (method){
        case 'GET':
      try {
        const heros=await Hero.find({})
        res.status(200).json({success:true,hero:heros})
      } catch (error) {
        res.status(400).json({success:false})
      }
   break;
   case 'POST':
    try {
      const hero=await Hero.create(req.body)
      res.status(200).json({success:true,hero:hero})
    } catch (error) {
      res.status(400).json({success:false})
      console.log("lp")
    }
 break;
default:
    res.status(400).json({success:false})
    break;
    }
}