import mongoose from "mongoose";

const connectDB = async (databaseurl) => {
  try {
    const dboptions = {
      dbName: "schooldb1",
    };
    await mongoose.connect(databaseurl, dboptions);
    console.log("connected db successfully");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB
