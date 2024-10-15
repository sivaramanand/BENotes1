import mongoose from "mongoose"

const connectDB=async(DBURL)=>{
    try{
     const dboptions={
        dbname:"schooldb1"
     }
     await mongoose.connect(DBURL,dboptions);
     console.log("schooldb1 conected")
    }
    catch(err){
        console.log(err)
    }

}

export default connectDB