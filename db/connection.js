import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://anshitasaini30:navansh@anshita.offi2yw.mongodb.net/")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
