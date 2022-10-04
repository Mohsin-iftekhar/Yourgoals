import mongoose from 'mongoose'
const connection={}
async function dbConnect(){
    // if(connection.isConnected){
    //     return;
    // }
    // const db=await mongoose.connect(process.env.MONGO_URI,{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true
    // })
    // connection.isConnected=db.connections[0].readyState

    mongoose.connect("mongodb+srv://mohsin:ASDFGHJKL@cluster0.xnasmj8.mongodb.net/mmm?retryWrites=true&w=majority").then(()=>{
        console.log("Database Connected");
    }).catch((err)=>console.log(err));
}
export default dbConnect