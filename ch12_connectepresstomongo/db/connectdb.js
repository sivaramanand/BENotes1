import mongoose from "mongoose";

const connectDB = async (dburl) => {
  try {
    mongoose.connect(dburl).then(() => {
      console.log("connected successfully");
    });
  } catch (err) {
    console.log("didnt work" + err);
  }
};

export default connectDB;
